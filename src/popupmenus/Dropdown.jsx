import React, { useState } from 'react'
import ArrowDown from "../assets/arrowdown.svg"

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState('Select status')
    const options= ["All time", "Custom", "Last 30 days", "This month","Last month","This quarter","2 quarter ago", "This year", "Last year"];

    const handleSelect = (option)=> {
        setSelected(option)
        setIsOpen(false)
    }
  return (
    <div className='relative'>
        <button className='w-[350px] border-[1px] rounded-[3px] h-[36px] font-normal text-[14px] text-slate-700 shadow-sm flex items-center justify-between'
        onClick={()=> setIsOpen(!isOpen)}>
            <span className='pl-2 font-geist text-[14px]'>{selected}</span>
            <span className='pr-2'><img src={ArrowDown} alt="" /></span>
        </button>

        {isOpen && (
            <ul className='w-[350px] h-[232px] border-[1px] border-slate-200 rounded-[3px] shadow-lg cursor-pointer overflow-y-auto overflow-x-auto bg-white absolute top-full z-10'>
                {options.map((option)=>(
                    <li key={option} onClick={()=> handleSelect(option)} className='w-full h-[32px] text-slate-700 text-[14px] font-geist pl-[10px] hover:bg-slate-200 flex items-center'>
                        {option}
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default Dropdown