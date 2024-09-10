import React, { useEffect, useState } from "react";
import Data from "../../data/dataPlayer.json";
import Data1 from "../../data/DataSchool.json";
import DataRow from "./DataRow";

export default function DataTable({ isSingle }) {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        const fetchSchool = async () => {
            try {
                isSingle ? setListData(Data) : setListData(Data1);
            } catch (error) {
                console.log(error);
            }
        };
        fetchSchool();
    }, [isSingle]);

    return (
        <tbody style={{ display: "contents" }}>
            {listData && listData.length > 0 ? (
                listData.map((item, index) => <DataRow key={index} index={index} item={item} />)
            ) : (
                <tr>
                    <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                        {isSingle ? "No player data existed !" : "No school data existed !"}
                    </td>
                </tr>
            )}
        </tbody>
    );
}
