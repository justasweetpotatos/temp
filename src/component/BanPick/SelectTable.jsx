import SelectComponent from "./SelectComponent";

export default function SelectTable({ currentSlideRenderList, session, songList, setSongList }) {
  return (
    <div className="max-w-full">
      <div className="flex flex-col justify-between w-full h-full">
        {currentSlideRenderList.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row justify-start">
            {row.map((item) => (
              <SelectComponent
                key={item.id}
                songData={item}
                selectionMode={session.selectionMode}
                isSelectingBy={session.currentTeam}
                songList={songList}
                setSongList={setSongList}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
