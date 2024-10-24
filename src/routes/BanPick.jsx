import { useState } from "react";
import { Outlet } from "react-router-dom";

const initialSession = {
  id: 1,
  currentTeam: "Team 1",
  selectionMode: "banning",
  isBanning: true,
  isPicking: false,
};

export default function BanPick() {
  const [selectedList, setSelectedList] = useState([]);
  const [currentSession, setCurrentSession] = useState(initialSession);

  return (
    <div className="h-full w-full px-10 overflow-scroll overflow-x-hidden">
      <Outlet context={{ currentSession,setCurrentSession, selectedList, setSelectedList }} />
    </div>
  );
}
