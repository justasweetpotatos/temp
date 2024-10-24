import React from "react";
import img18 from "../../assets/BanPick/image 18.png";
import banPickImage from "../../assets/BanPick/pickingComponentHeader.png";
import { FaBan, FaCheck } from "react-icons/fa";

function arraySet(array, value) {
  return array.map((item) => (item.id === value.id ? value : item));
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

export default function SelectComponent({ songData, selectionMode, isSelectingBy, songList, setSongList }) {
  const data = parseDataList(songList);

  const switchPickMode = () => {
    const updatedSongData = { ...songData };

    if (selectionMode === "banning") {
      const isBanned = updatedSongData.banned;

      if (isSelectingBy === "Team 1" && data.bannedTeam1List.length >= 4 && !isBanned) {
        alert("Max ban is 4");
        return;
      }
      if (isSelectingBy === "Team 2" && data.bannedTeam2List.length >= 4 && !isBanned) {
        alert("Max ban is 4");
        return;
      }

      if (updatedSongData.banned && updatedSongData.bannedBy !== isSelectingBy) {
        alert("This song is banned, can't select!");
        return;
      }

      // Unban if already banned
      if (isBanned && updatedSongData.bannedBy === isSelectingBy) {
        updatedSongData.banned = false;
        updatedSongData.bannedBy = undefined;
      } else {
        updatedSongData.banned = true;
        updatedSongData.bannedBy = isSelectingBy;
      }
    } else if (selectionMode === "picking") {
      const isPicked = updatedSongData.picked;

      if (isSelectingBy === "Team 1" && data.pickedTeam1List.length >= 1 && !isPicked) {
        alert("Max pick is 1");
        return;
      }
      if (isSelectingBy === "Team 2" && data.pickedTeam2List.length >= 1 && !isPicked) {
        alert("Max pick is 1");
        return;
      }

      if (updatedSongData.banned) {
        alert("This song is banned, can't select!");
        return;
      }

      if (updatedSongData.picked && updatedSongData.pickedBy !== isSelectingBy) {
        alert("This song is picked, can't select!");
        return;
      }

      // Unpick if already picked
      if (isPicked && updatedSongData.pickedBy === isSelectingBy) {
        updatedSongData.picked = false;
        updatedSongData.pickedBy = undefined;
      } else {
        updatedSongData.picked = true;
        updatedSongData.pickedBy = isSelectingBy;
      }
    }

    setSongList(arraySet(songList, updatedSongData));
  };

  const isBanned = songData.banned;
  const isPicked = songData.picked;

  return (
    <div
      className="w-[23%] flex flex-col p-4 cursor-pointer"
      onClick={selectionMode === "none" ? () => {} : switchPickMode}
    >
      <div className="h-max">
        <img src={banPickImage} alt="Header" className="w-full" />
      </div>
      <div className="h-full relative flex flex-col justify-end">
        <img src={img18} alt="img18" className="w-auto" />

        {isBanned && (
          <div className="absolute bottom-2 inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
        )}

        {isPicked && (
          <div className="absolute bottom-2 inset-0 bg-gradient-to-t from-[#aa61de] via-[#aa61de]/30 to-transparent"></div>
        )}

        <div className="absolute flex flex-col items-center justify-end top-0 left-0 w-full h-full">
          {isBanned ? (
            <>
              <FaBan className="text-black text-2xl" />
              <div className="leading-4 text-black">BANNED</div>
            </>
          ) : isPicked ? (
            <>
              <FaCheck className="text-white text-2xl" />
              <div className="leading-4 text-white">PICKED</div>
            </>
          ) : null}
          <div className="bottom-2 h-fit w-full transition duration-300 ease-in-out">
            <div
              className={`bg-${
                isBanned ? "white" : isPicked ? "[#aa61de]" : "purple-500"
              } text-center font-semibold file:font-bold text-md text-${
                isBanned ? "black" : isPicked ? "white" : "white"
              }`}
            >
              {songData.name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
