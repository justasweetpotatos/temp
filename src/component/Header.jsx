import React, { useEffect, useState } from "react";
import { FaDiscord } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header() {
    const [isCompact, setIsCompact] = useState(false);

    useEffect(() => {
        // Hàm xử lý thay đổi kích thước cửa sổ
        const handleResize = () => {
            if (window.innerWidth / window.screen.width < 0.5) {
                setIsCompact(true);
            } else setIsCompact(false);


            console.log(window.innerWidth / window.screen.width);
        };

        // Thêm sự kiện resize
        window.addEventListener('resize', handleResize);

        // Xóa sự kiện resize khi component bị hủy
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (

        <header className="fixed w-full min-h-20 max-h-20">
            <div className="container w-full min-h-20 max-h-20 flex justify-center pt-3 pb-1 mx-auto drop-shadow-xl">
                <nav className="flex items-center justify-between p-2 lg:px-8 border-4 rounded-xl border-transparent bg-[#F9C791] w-full drop-shadow-lg">
                    <div className="justify-start max-w-[120px]">
                        <a href="/" className="max-w-[120px]">
                            <img src="../fac_1.png" alt="" className="object-cover" />
                        </a>
                    </div>
<<<<<<< HEAD
                    <div className="">
=======
                    <div className="h-full mr-auto lg:flex justify-center font">
>>>>>>> 4c055a8efc733d9eab8a8faf0fb45bc58157d747
                        <Link
                            to="/home"
                            className="text-xl flex items-center justify-center font-semibold leading-6 text-black w-[125px]"
                        >
                            Trang Chủ
                        </Link>
                        <Link
                            to="/info"
                            className="text-xl flex items-center justify-center font-semibold leading-6 text-black w-[125px]"
                        >
                            Thông Tin
                        </Link>
                        <Link
                            to="/leaderboard"
                            className="text-xl flex items-center justify-center font-semibold leading-6 text-black w-[125px]"
                        >
                            Xếp hạng
                        </Link>
                        <Link
                            to="/about"
                            className=" text-xl flex items-center justify-center font-semibold leading-6 text-black w-[125px]"
                        >
                            Nhân sự
                        </Link>
                    </div>

                    <div className=" justify-end ">
                        <button className="flex w-36 items-center justify-between">
                            <img className="size-1/4" src="../Youtube_MSOC.png" alt="DC_Logo" />
                            <a href="https://discord.gg/PMVTHDgerp">
                            </a>
                        </button>
                    </div>

                    <div className=" justify-end ">
                        <button className="flex w-36 space-x-1 items-center justify-between">
                            <img className="size-1/4" src="../x_MSOC.png" alt="DC_Logo" />
                            <a href="https://discord.gg/PMVTHDgerp">
                            </a>
                        </button>
                    </div>

                    <div className=" justify-end ">
                        <button className="flex w-36 space-x-1 items-center justify-between">
                            <img className="size-1/4" src="../DC_MSOC.png" alt="DC_Logo" />
                            <a href="https://discord.gg/PMVTHDgerp">
                            </a>
                        </button>
                    </div>


                    <div className=" justify-end ">
                        <button className="flex w-36 space-x-1 items-center justify-between">
                            <img className="size-1/4" src="../FB_MSOC.png" alt="FB_Logo" />
                            <a href="https://discord.gg/PMVTHDgerp">
                            </a>
                        </button>

                    </div>
                </nav>
            </div>
        </header>
    );
}
