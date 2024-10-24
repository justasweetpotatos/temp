import React, { useState, useCallback } from "react";
import SelectTable from "./SelectTable";
import Heading from "./Heading";
import { useNavigate, useOutletContext } from "react-router-dom";

const mockData = [
  { id: 1, name: "string 1", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 2, name: "string 2", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 3, name: "string 3", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 4, name: "string 4", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 5, name: "string 5", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 6, name: "string 6", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 7, name: "string 7", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 8, name: "string 8", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 9, name: "string 9", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 10, name: "string 10", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 11, name: "string 11", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 12, name: "string 12", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 13, name: "string 13", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 14, name: "string 14", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 15, name: "string 15", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 16, name: "string 16", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 17, name: "string 17", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 18, name: "string 18", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 19, name: "string 19", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 20, name: "string 20", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 21, name: "string 21", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 22, name: "string 22", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 23, name: "string 23", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 24, name: "string 24", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 25, name: "string 25", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 26, name: "string 26", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
  { id: 27, name: "string 27", banned: false, picked: false, bannedBy: undefined, pickedBy: undefined },
];

function usePagination(data, itemsPerPage) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, Math.ceil(data.length / itemsPerPage) - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const displayedData = data.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

  return { displayedData, nextSlide, prevSlide, currentIndex };
}

function getRandomElements(array, count) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function parseDataList(songList) {
  let bannedTeam1List = [];
  let bannedTeam2List = [];
  let pickedTeam1List = [];
  let pickedTeam2List = [];

  songList.forEach((songData) => {
    if (songData.banned) {
      songData.bannedBy === "Team 1" ? bannedTeam1List.push(songData) : bannedTeam2List.push(songData);
    }
    if (songData.picked) {
      songData.pickedBy === "Team 1" ? pickedTeam1List.push(songData) : pickedTeam2List.push(songData);
    }
  });

  return { bannedTeam1List, bannedTeam2List, pickedTeam1List, pickedTeam2List };
}

export default function BanPickPhase() {
  const { currentSession, setCurrentSession, selectedList, setSelectedList } = useOutletContext();

  const [songList, setSongList] = useState(getRandomElements(mockData, 10));
  const navigate = useNavigate();

  const itemsPerPage = 8;
  const { displayedData, nextSlide, prevSlide } = usePagination(songList, itemsPerPage);

  const switchPhase = useCallback(() => {
    const newSession = { ...currentSession };
    const data = parseDataList(songList);

    if (currentSession.selectionMode === "none") {
      alert("Done");
      return;
    }

    if (newSession.isBanning) {
      if (newSession.currentTeam === "Team 1") newSession.currentTeam = "Team 2";
      else {
        newSession.currentTeam = "Team 1";
        newSession.selectionMode = "picking";
        newSession.isBanning = false;
        newSession.isPicking = true;
      }
    } else if (newSession.isPicking) {
      if (data.pickedTeam1List.length < 1 && currentSession.currentTeam === "Team 1") {
        alert("Picked 1 song is empty !");
        return;
      } else if (data.pickedTeam2List.length < 1 && currentSession.currentTeam === "Team 2") {
        alert("Picked 2 song is empty !");
        return;
      }

      if (newSession.currentTeam === "Team 1") newSession.currentTeam = "Team 2";
      else {
        setSelectedList(songList);
        navigate("/banpick/final");
      }
    }
    setCurrentSession(newSession);
  }, [currentSession, songList]);

  // Chia dữ liệu thành 2 hàng
  const rows = [];
  for (let i = 0; i < displayedData.length; i += 4) {
    const row = displayedData.slice(i, i + 4);
    rows.push(row);
  }

  if (rows.length < 2) rows.push([]);

  return (
    <div className="h-full w-full p-10 overflow-x-hidden">
      <Heading
        headingTitle={`${
          currentSession.isBanning
            ? `${currentSession.currentTeam} BANNING`
            : currentSession.isPicking
            ? `${currentSession.currentTeam} PICKING`
            : `FINAL`
        }`}
      />
      <div className="w-full h-fit flex flex-col items-center">
        <div className="h-full w-full flex flex-col">
          <SelectTable
            currentSlideRenderList={rows}
            session={currentSession}
            songList={songList}
            setSongList={setSongList}
          />
          <div className="w-full h-[10%] flex justify-center my-4">
            <button className="w-[80px] h-[60%]" onClick={prevSlide}>
              Prev
            </button>
            <button className="w-[80px] h-[60%]" onClick={nextSlide}>
              Next
            </button>
          </div>
        </div>

        <div className="w-full h-fit p-4 flex justify-end">
          <button
            type="button"
            className="h-[40px] w-[8%] px-2 border border-slate-300 rounded-md bg-white hover:bg-slate-300"
            onClick={switchPhase}
            aria-label="Submit Phase"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
