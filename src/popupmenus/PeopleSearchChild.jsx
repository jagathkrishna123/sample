import React from 'react'
import SearchIcon from "../assets/search.svg"
const PeopleSearchChild = () => {
  return (
    <div className='w-[372px] h-[344px] bg-white rounded-sm p-[16px]'>
        <div className='w-[350px] h-[28px] flex flex-row items-center bg-slate-200 top-[4px] right-[12px] bottom-[4px] left-[12px] rounded-[6px] pl-2 gap-[8px] border-[1px] border-slate-100'>
            <p>
                <img src={SearchIcon} alt="" />
            </p>

            <input type="text" placeholder='Search Payer or attendee name' className='bg-slate-200 border-none outline-none text-gray-400 font-geist font-normal text-[14px] items-center justify-center' />
        </div>
    </div>
  )
}

export default PeopleSearchChild