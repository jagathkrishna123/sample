
import { BiSearch } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";

const Content = () => {
  return (
    <div className="flex items-center justify-between w-full bg-gray-300 max-w-full p-3 rounded">
      
      <p className="text-xl font-semibold text-gray-800">Waitlist</p>

      
      <div className="gap-3 grid grid-cols-3 ">
        
        <div className="flex items-center gap-2 border border-gray-300 rounded-md bg-white px-7 py-1 text-gray-700 text-sm w-64">
          All Waitlists <span className="text-gray-500 text-xs">100</span>
        </div>

        
        <div className="flex items-center gap-2 border border-gray-300 rounded-md bg-white px-7 py-1 text-gray-700 text-sm">
          Newly Added <span className="text-gray-500 text-xs">50</span>
        </div>

       
        <div className="flex items-center gap-2 border border-gray-300 rounded-md bg-white px-7 py-1 text-gray-700 text-sm">
          Leads <span className="text-gray-500 text-xs">20</span>
        </div>
      </div>
      <div className="flex">
        <button className="bg-gray-400 text-xs p-2 rounded-lg flex items-center hover:bg-gray-700 transition-all duration-300 hover:text-gray-100"><CiFilter className="text-xl"/>Add filter</button>
        <div className="flex flex-row">
          <input type="text" placeholder='Search anything...' className="rounded-lg ml-4 p-2 " />
        {/* <BiSearch className='text-xl'/> */}
        </div>
                
      </div>
    </div>
  );
};
export default Content