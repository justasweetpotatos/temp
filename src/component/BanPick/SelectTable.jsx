import SelectComponent from "./SelectComponent";

export default function SelectTable({ currentSlideRenderList, currentBannedList, setCurrentBannedList }) {
    return (
        <div className="max-w-full">
            <div className="flex flex-col justify-between w-full h-full">
                {currentSlideRenderList.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-row justify-between">
                        {row.map((item) => (
                            <SelectComponent
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                isPicked={currentBannedList.find((id) => id === item.id) ?? false}
                                currentBannedList={currentBannedList}
                                setCurrentBannedList={setCurrentBannedList}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
