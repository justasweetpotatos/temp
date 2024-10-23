import React, { useState } from "react";
import SelectTable from "../component/BanPick/SelectTable";
import Heading from "../component/BanPick/Heading";
import CustomInput from "../component/BanPick/CustomInput";

const mockData = [
    { id: 1, name: "string 1" },
    { id: 2, name: "string 2" },
    { id: 3, name: "string 3" },
    { id: 4, name: "string 4" },
    { id: 5, name: "string 5" },
    { id: 6, name: "string 6" },
    { id: 7, name: "string 7" },
    { id: 8, name: "string 8" },
    { id: 9, name: "string 9" },
];

export default function BanPick() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentBannedList, setCurrentBannedList] = useState([]);

    const itemsPerPage = 8;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, Math.ceil(mockData.length / itemsPerPage) - 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    const displayedData = mockData.slice(start, end);

    // Chia dữ liệu thành 2 hàng
    const rows = [];
    for (let i = 0; i < displayedData.length; i += 4) {
        const row = displayedData.slice(i, i + 4);
        rows.push(row);
    }

    if (rows.length < 2) rows.push([]);

    return (
        <div className="h-full w-full px-10">
            <div className="h-full w-full p-10 overflow-x-hidden">
                <Heading headingTitle={"TEAM SET"} />
                <div className="w-full h-fit flex flex-col items-center">
                    <div className="h-full w-full flex flex-row">
                        <div id="team-1-config" className="w-1/2 px-4 py-2">
                            <CustomInput
                                inputName="Name"
                                inputId="team-1-name"
                                placeholder="Enter the team name..."
                            ></CustomInput>
                            <CustomInput
                                inputName="Player 1 name"
                                inputId="team-1-player-1-name"
                                placeholder="Enter the player name..."
                            ></CustomInput>
                            <CustomInput
                                inputName="Player 2 name"
                                inputId="team-1-player-2-name"
                                placeholder="Enter the player name..."
                            ></CustomInput>
                            <CustomInput
                                inputName="Player 3 name"
                                inputId="team-1-player-3-name"
                                placeholder="Enter the player name..."
                            ></CustomInput>
                            <CustomInput
                                inputName="Player 3 name"
                                inputId="team-1-player-3-name"
                                placeholder="Enter the player name..."
                            ></CustomInput>
                        </div>
                        <div id="team-2-config" className="w-1/2 px-4 py-2">
                            <CustomInput
                                inputName="Team 2 name"
                                inputId="team-2-name"
                                placeholder="Enter the team name..."
                            ></CustomInput>
                            <CustomInput
                                inputName="Player 1 name"
                                inputId="team-2-player-1-name"
                                placeholder="Enter the player name..."
                            ></CustomInput>
                            <CustomInput
                                inputName="Player 2 name"
                                inputId="team-2-player-2-name"
                                placeholder="Enter the player name..."
                            ></CustomInput>
                            <CustomInput
                                inputName="Player 3 name"
                                inputId="team-2-player-3-name"
                                placeholder="Enter the player name..."
                            ></CustomInput>
                            <CustomInput
                                inputName="Player 3 name"
                                inputId="team-2-player-3-name"
                                placeholder="Enter the player name..."
                            ></CustomInput>
                        </div>
                    </div>

                    <div className="w-full h-fit p-4 flex justify-end">
                        <button
                            type="button"
                            className="h-[40px] w-[8%] px-2 border border-slate-300 rounded-md bg-white hover:bg-slate-300"
                            onClick={() => {}}
                        >
                            Submmit
                        </button>
                    </div>

                    {/* <SelectTable
                        currentSlideRenderList={rows}
                        currentBannedList={currentBannedList}
                        setCurrentBannedList={setCurrentBannedList}
                    />
                    <div className="w-full h-[10%] flex justify-center my-4">
                        <button className="w-[80px] h-[60%]" onClick={prevSlide} disabled={currentIndex === 0}>
                            Prev
                        </button>
                        <button
                            className="w-[80px] h-[60%]"
                            onClick={nextSlide}
                            disabled={currentIndex === Math.ceil(mockData.length / itemsPerPage) - 1}
                        >
                            Next
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
