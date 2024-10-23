import React, { useState } from "react";
import img18 from "../../assets/BanPick/image 18.png";
import banPickImage from "../../assets/BanPick/pickingComponentHeader.png"; // Đảm bảo rằng bạn có đúng phần mở rộng
import { FaBan } from "react-icons/fa"; // Sử dụng icon từ react-icons

export default function SelectComponent({ id, name, isPicked, isFreeze, currentBannedList, setCurrentBannedList }) {
    const [picked, setPicked] = useState(isPicked);

    const handleClick = () => {
        setPicked((prev) => {
            // debug
            // if (!(currentBannedList instanceof Array)) return prev;

            let newList = currentBannedList;
            if (prev) newList = currentBannedList.filter((item) => item !== id);
            else if (!newList.find((arrayItemId) => arrayItemId === id)) newList = currentBannedList.concat([id]);
            setCurrentBannedList(newList);

            // debug
            // console.log(newList);
            return !prev;
        });
    };

    return (
        <div className="w-[25%] flex flex-col p-2 cursor-pointer" onClick={isFreeze ? () => {} : handleClick}>
            <div className="h-max">
                <img src={banPickImage} alt="Header" className="w-full" />
            </div>
            <div className="h-full relative flex flex-col justify-end">
                <img src={img18} alt="img18" className="w-auto" />

                {picked && (
                    <div className="absolute bottom-2 inset-0 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
                )}

                <div className="absolute flex flex-col items-center justify-end top-0 left-0 w-full h-full">
                    {picked && (
                        <>
                            <FaBan className="text-black text-2xl" />
                            <div className="leading-4 text-black">BANNED</div>
                        </>
                    )}
                    <div className="bottom-2 h-[5%] w-full transition duration-300 ease-in-out">
                        <div
                            className={
                                picked
                                    ? "bg-white text-center font-semibold file:font-bold text-md text-black"
                                    : "bg-purple-500 text-center font-semibold file:font-bold text-md text-white"
                            }
                        >
                            {name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
