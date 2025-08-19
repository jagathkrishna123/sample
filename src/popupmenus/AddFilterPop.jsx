import React, { useState } from 'react'

import CalenderDate from "../assets/Calenderdate.svg"
import People from "../assets/people.svg"
import Dashboard from "../assets/dashboard.svg"
import DatePickChild from './DatePickChild';
import PeopleSearchChild from './PeopleSearchChild';
import SearchServices from './SearchServices';




const AddFilterpop = () => {
 
    const [activeTab, setActiveTab] = useState("scheduled")
  return (
    <div className='w-[612px] h-[400px] rounded-sm bg-white border-[1px] border-gray-300'>
        <div className='w-[612px] h-[348px] flex flex-row'>
            <div className='w-[230px] h-[348px] border-[1px] p-[8px] border-slate-50 flex flex-col bg-slate-100 gap-2'>

                <button href='' onClick={()=> setActiveTab("scheduled")} className='w-[214px] h-[36px] bg-slate-200 rounded-[6px] p-[8px]  flex items-center gap-2 justify-start'>
                    <img src={CalenderDate} alt="" />
                    <p className='font-medium font-geist text-[14px] text-slate-700 w-[159px] h-[20px]'>Scheduled Date</p>
                </button>

                <button href='' onClick={()=> setActiveTab("people")}className='w-[214px] h-[36px] rounded-[6px] p-[8px] gap-[8px] flex items-start hover:bg-slate-200'>
                    <img src={People} alt="" />
                    <p className='font-medium font-geist text-[14px] text-slate-700 w-[159px] h-[20px]'>People</p>
                </button>

                <button href='' onClick={()=> setActiveTab("services")}className='w-[214px] h-[36px] rounded-[6px] p-[8px] gap-[8px] flex items-center hover:bg-slate-200'>
                    <img src={Dashboard} alt="" />
                    <p className='font-medium font-geist text-[14px] text-slate-700 w-[159px] h-[20px]'>Services / Products</p>
                </button>
            </div>
                        {/* ----------right----------- */}
            {/* <div className='w-[382px] h-[348px] p-[16px] gap-[20px] flex flex-col'>
                <div className='w-[350px] h-[62px] gap-[2px]'>
                    <p className='font-medium text-[12px] font-geist text-slate-700 h-[22px] w-[350px]'>Show orders for</p>
                      <select name="time" className='w-[350px] border-[1px] rounded-[3px] h-[36px] font-normal text-[14px] text-slate-700 shadow-sm'>
                        <option>All time</option>
                        <option>Custom</option>
                        <option>Last 30 days</option>
                        <option>This month</option>
                        <option>Last month</option>
                        <option>This quarter</option>
                        <option>2 quarter ago</option>
                    </select>
                </div>
                <div className='w-[345px] h-[62px] gap-[19px] flex'>
                    <div className='reletive'>
                        <p className='font-medium text-[12px] font-geist text-slate-700'>From</p>
                        <div className='w-[163px] h-[36px] border-[1px] border-slate-200 rounded-[4px] shadow-sm blur-2 flex gap-[8px] items-center justify-center'>
                            <img src={CalenderDate} alt="" />
                            <DatePicker 
                                selected={fromDate}
                                onChange={(date)=> setFromDate(date)}
                                placeholderText='Pick a date'
                                className='w-[107px] h-[20px] outline-none cursor-pointer font-geist font-normal text-[14px] text-slate-600'
                            />
                        </div>
                    </div>
                    <div className='reletive'>
                        <p className='font-medium text-[12px] font-geist text-slate-700'>To</p>
                        <div className='w-[163px] h-[36px] border-[1px] border-slate-200 rounded-[4px] shadow-sm blur-2 flex gap-[8px] items-center justify-center'>
                           <img src={CalenderDate} alt="" />
                            <DatePicker 
                                selected={toDate}
                                onChange={(date)=> setToDate(date)}
                                placeholderText='Pick a date'
                                className='w-[107px] h-[20px] outline-none cursor-pointer font-geist font-normal text-[14px] text-slate-600'
                            />
                        </div>
                    </div>
                </div>
            </div> */}
            {activeTab === "scheduled" && <DatePickChild/>}
            {activeTab === "people" && <PeopleSearchChild/>}
            {activeTab === "services" && <SearchServices/>}
        </div>
        <div className='items-center bg-gray-200 w-[612px] h-[52px] shadow-blr border-l-1 border-r-1 border-b-1'>
            <div className='w-[228px] h-[36px] gap-[24px] flex flex-row top-[8px] right-[16px] bottom-[8px] left-[16px] ml-auto justify-center items-center p-[5px] mr-3'>
            <button className='w-[141px] h-[36px] rounded-[6px] border-[1px] top-[4px] right-[12px] bottom-[4px] left-[12px] gap-[12px] mt-4 border-slate-300 font-geist text-[14px] font-medium'>Reset to Default</button>
            <button className='w-[71px] h-[36px] rounded-[6px] top-[4px] right-[12px] bottom-[4px] left-[12px] gap-[10px] bg-slate-900 text-white mt-4 font-geist font-medium text-[14px]'>Apply</button>
            </div>
        </div>
    </div>
  )
}

export default AddFilterpop