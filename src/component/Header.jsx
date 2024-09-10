import React from "react";
import { FaDiscord } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex justify-center fixed w-full min-h-20 max-h-20">
            <div className="container w-full pr-20 pl-20 flex justify-center pt-3">
                <nav className="flex items-center justify-between p-2 lg:px-8 border-4 rounded-xl border-transparent bg-[#F9C791] w-full">
                    <div className="justify-start max-w-[120px]">
                        <a href="/" className="max-w-[120px]">
                            <img src="../fac_1.png" alt="" className="object-cover" />
                        </a>
                    </div>
                    <div className="h-full mr-auto lg:flex justify-center">
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
                            className="text-xl flex items-center justify-center font-semibold leading-6 text-black w-[125px]"
                        >
                            Nhân sự
                        </Link>
                    </div>
                    <div className=" justify-end ">
                        <button className="flex bg-blue-600 rounded-lg px-1 py-1 w-36 space-x-2 items-center justify-center">
                            <FaDiscord className="text-white jutsify-center text-xl" />
                            <a
                                href="https://discord.gg/PMVTHDgerp"
                                className="text-lg font-semibold leading-6 text-white justify-center"
                            >
                                Join Discord
                            </a>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
