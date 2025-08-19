import React, { useState } from 'react'
import Filterpop from '../popupmenus/Filterpop';
import AddFilterpop from '../popupmenus/AddFilterPop';
import Refresh from "../assets/refresh.svg"
import Download from "../assets/download.svg"
import CheckBoxfilter from "../assets/filter.svg"
import AddFilter from "../assets/addfilter.svg"


const Buttonsection = () => {
    const [showFilterPop, setShowFilterPop] = useState(false);
    const [showAddFilter, setShowAddFilter] = useState(false);


  return (
    <div className='flex flex-row justify-between'>
        <div className='relative inline-block'>
            <button onClick={()=>setShowAddFilter(!showAddFilter)} className="bg-slate-100 text-xs p-2 rounded-lg flex items-center text-slate-700 font-geist mt-3 gap-[6px] pl-[12px] pr-[12px]">
                <img src={AddFilter} alt="" />

                Add filter
            </button>
            {showAddFilter && (
                <div className='absolute left-0 mt-3 shadow-lg z-30'>
                    <AddFilterpop/>
                </div>
            )}
        </div>
        <div className='flex flex-row gap-[16px]'>
            <input type="text" placeholder='Search client...' className='bg-white shadow-gray-400 outline-none shadow-sm rounded p-2 mt-3 text-[12px] font-geist w-[230px] h-[28px]'/>
            <div className='mt-2 flex flex-row gap-[16px] items-center justify-center'>
                <img src={Refresh} alt="" className='w-[16px] h-[16px]'/>

            <div className='relative inline-block'>
                <button onClick={()=> setShowFilterPop(!showFilterPop)}>
                    <img src={CheckBoxfilter} alt="" className='w-[16px] h-[16px]'/>
                </button>
                {showFilterPop && (
                    <div className='absolute right-0 z-30'>
                        <Filterpop/>
                    </div>
                )}
            </div>

            <img src={Download} alt="" className='w-[16px] h-[16px]'/>
            </div>


        </div>
    </div>
  )
}

export default Buttonsection