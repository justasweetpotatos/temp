import React, { useState } from "react";

import ColumnHeader from "../component/Leaderboard/ColumnHeader";
import DataTable from "../component/Leaderboard/DataTable";

export default function Leaderboard() {
    const [isSingle, setIsSingle] = useState(false);

    return (
        <div className="w-[100%] max-w-[1360px] m-auto min-w-[672px]">
            <div className="px-32 py-20 pt-[40px]">
                {/* Individual Leaderboard */}
                <table className="w-full bg-white border border-gray-200">
                    <ColumnHeader></ColumnHeader>
                    <DataTable isSingle={isSingle}></DataTable>
                </table>
            </div>
            <div>
                <button
                    className="rounded-[15px] px-3 py-1 font-semibold border-[black] text-gray-600 bg-[#dbdbdb] block ml-auto mr-[125px] mt-[40px] mb-[0]"
                    onClick={() => setIsSingle(!isSingle)}
                >
                    {isSingle ? "Bảng xếp hạng cá nhân" : "Bảng xếp hạng trường"}
                </button>
            </div>
        </div>
    );
}
