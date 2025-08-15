import Buttonsection from "./Buttonsection";


const Content = () => {
  return (
    <div className='flex flex-col m-2'>
        <div className=''>
            <p className="text-[20px] font-semibold text-slate-700">Waitlist</p>
        </div>

        <div className="grid grid-cols-3 justify-items-stretch gap-x-8 gap-y-4 mt-3">
            <div className="flex items-center gap-2 border border-gray-300 rounded-md bg-white px-7 py-1 text-gray-700 text-sm w-[359px] h-[40px]">
            <p className="font-semibold text-[12px] text-slate-700 font-geist">All Waitlists</p> <span className="text-gray-500 text-[10px] font-medium">100</span>
            </div>

            
            <div className="flex items-center gap-2 border border-gray-300 rounded-md bg-white px-7 py-1 text-gray-700 text-sm w-[359px] h-[40px]">
            <p className="font-semibold text-[12px] text-slate-700 font-geist">Newly Added</p> <span className="text-gray-500 text-[10px] font-medium">50</span>
            </div>

        
            <div className="flex items-center gap-2 border border-gray-300 rounded-md bg-white px-7 py-1 text-gray-700 text-sm w-[359px] h-[40px]">
            <p className="font-semibold text-[12px] text-slate-700 font-geist">Leads</p> <span className="text-gray-500 text-[10px] font-medium">20</span>
            </div>
        </div>
        <Buttonsection/>
    </div>
  );
};
export default Content