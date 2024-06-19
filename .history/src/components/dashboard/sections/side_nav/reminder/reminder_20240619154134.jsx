import { MdPerson } from "react-icons/md";

function Reminder() {
  return (
    <div>
      {/* container 1 */}
      <div className="mt-5 p-5 rounded-2xl flex flex-col md:flex-row md:justify-  items-start gap-4 text-start bg-white">
        {/* container 1 === */}
        <div className=" flex flex-col md:flex-row justify-start gap-3 bg-red-400 ">
          <div className="w-11">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm">Reminder : One o one course</p>
            <h2 className="text-md">
              UX-Strategy: How to Reach The Next Level
            </h2>
          </div>
        </div>

        {/* container 2===== */}
        <div className="flex items-center justify-end  gap-2.5 text-xs bg-green-300">
          <MdPerson />
          <p>by Rose Poole</p>
        </div>

        {/* container 3 ===== */}
        <div className="flex items-end  justify-end flex-col gap-1.5  bg-purple-500">
          <button className="p-1 py-2 px-3 bg-accent rounded-xl text-sm">
            Available at 7:30 AM
          </button>
          <h2 className="text-sm">00 : 06 : 23</h2>
        </div>
      </div>
    </div>
  );
}

export default Reminder;
