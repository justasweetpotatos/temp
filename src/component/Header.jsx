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
            <div className="container w-full min-h-20 max-h-20 flex justify-center pt-3 pb-1 mx-auto">
                <nav className="flex items-center justify-between p-2 lg:px-8 border-4 rounded-xl border-transparent bg-[#F9C791] w-full drop-shadow-lg">
                    <div className="justify-start max-w-[120px]">
                        <a href="/" className="max-w-[120px]">
                            <img src="../fac_1.png" alt="" className="object-cover" />
                        </a>
                    </div>
                    <div className="">
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
