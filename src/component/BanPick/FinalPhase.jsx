import { useOutletContext } from "react-router-dom";
import img18 from "../../assets/BanPick/image 18.png";
import banPickImage from "../../assets/BanPick/pickingComponentHeader.png";
import SelectTable from "./SelectTable";

export default function FinalPhase() {
  const { currentSession, selectedList, setSelectedList } = useOutletContext();

  // Kiểm tra xem selectedList có hợp lệ không
  if (!selectedList || selectedList.length === 0) {
    return <div>No items selected.</div>;
  }

  // Lọc danh sách đã bị cấm
  const onlyBannedList = selectedList.filter((item) => item.banned);

  // Chia dữ liệu thành 2 hàng
  const rows = [];
  for (let i = 0; i < onlyBannedList.length; i += 4) {
    const row = onlyBannedList.slice(i, i + 4);
    rows.push(row);
  }

  return (
    <div className="w-full h-fit">
      <div className="p-4 w-full h-[40%] flex flex-row">
      <div className="w-[50%] px-8 h-full flex flex-col justify-end">
          <div className="relative h-full flex justify-start">
            <div className="h-full w-[70%] shadow-[20px_20px_2px_-5px_rgba(0,0,0,0.4)]">
              <div className="w-full">
                <img src={banPickImage} alt="Header" />
              </div>
              <div className="relative W-full aspect-square">
                <img className="W-full aspect-square" src={img18} alt="Description" />
                <div className="absolute bottom-0 right-[-45%] w-[45%] h-fit px-2 flex flex-row bg-[#aa61de] text-white shadow-[15px_15px_2px_0px_rgba(0,0,0,0.4)]">
                  <div className="flex items-end">
                    <h1 className="text-end text-2xl leading-12">LVL.</h1>
                  </div>
                  <div className="flex items-end">
                    <h1 className="text-5xl font-bold leading-12">12.5</h1>
                  </div>
                </div>
              </div>

              <div className="h-fit w-full bottom-0 flex flex-col items-center bg-[#aa61de] font-semibold text-md text-white">
                Name
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] px-8 h-full flex flex-col justify-end">
          <div className="relative h-full flex justify-start">
            <div className="h-full w-[70%] shadow-[20px_20px_2px_-5px_rgba(0,0,0,0.4)]">
              <div className="w-full">
                <img src={banPickImage} alt="Header" />
              </div>
              <div className="relative W-full aspect-square">
                <img className="W-full aspect-square" src={img18} alt="Description" />
                <div className="absolute bottom-0 right-[-45%] w-[45%] h-fit px-2 flex flex-row bg-[#aa61de] text-white shadow-[15px_15px_2px_0px_rgba(0,0,0,0.4)]">
                  <div className="flex items-end">
                    <h1 className="text-end text-2xl leading-12">LVL.</h1>
                  </div>
                  <div className="flex items-end">
                    <h1 className="text-5xl font-bold leading-12">12.5</h1>
                  </div>
                </div>
              </div>

              <div className="h-fit w-full bottom-0 flex flex-col items-center bg-[#aa61de] font-semibold text-md text-white">
                Name
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[50%] p-4 px-8">
        <SelectTable currentSlideRenderList={rows} session={currentSession} songList={selectedList} />
      </div>
    </div>
  );
}
