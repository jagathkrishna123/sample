import React, { useState } from 'react'
import Datepicking from "../assets/datepick.svg"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from './Dropdown';

const DatePickChild = () => {
        const [fromDate, setFromDate] = useState(null);
        const [toDate, setToDate] = useState(null);
  return (
    <div className='w-[382px] h-[348px] p-[16px] gap-[20px] flex flex-col'>
                    <div className='w-[350px] h-[62px] gap-[2px]'>
                        <p className='font-medium text-[12px] font-geist text-slate-700 h-[22px] w-[350px]'>Show orders for</p>
                          <Dropdown/>
                    </div>
                    <div className='w-[345px] h-[62px] gap-[19px] flex'>
                        <div className='reletive'>
                            <p className='font-medium text-[12px] font-geist text-slate-700'>From</p>
                            <div className='w-[163px] h-[36px] border-[1px] border-slate-200 rounded-[4px] shadow-sm blur-2 flex gap-[8px] items-center justify-center'>
                                <img src={Datepicking} alt="" />
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
                                <img src={Datepicking} alt="" />
                                <DatePicker 
                                    selected={toDate}
                                    onChange={(date)=> setToDate(date)}
                                    placeholderText='Pick a date'
                                    className='w-[107px] h-[20px] outline-none cursor-pointer font-geist font-normal text-[14px] text-slate-600'
                                />
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default DatePickChild