import React from "react";
import { FaDiscord } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex justify-center">
            <div className="container w-full p-5">
                <nav className="mx-auto flex items-center justify-between p-2 lg:px-8">
                    <div className="justify-start">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span>MSOC</span>
                        </a>
                    </div>
                    <div className="hidden lg:flex flex-1 justify-center space-x-40">
                        <Link to="/home" className="text-xl font-semibold leading-6 text-black">
                            Trang Chủ
                        </Link>
                        <Link to="/info" className="text-xl font-semibold leading-6 text-black">
                            Thông Tin
                        </Link>
                        <Link to="/leaderboard" className="text-xl font-semibold leading-6 text-black">
                            Xếp hạng
                        </Link>
                        <Link to="/about" className="text-xl font-semibold leading-6 text-black">
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
