import React from 'react'
import { BiHelpCircle, BiHome, BiMessage, BiSolidReport, BiStats, BiTask } from 'react-icons/bi'
import { FaInstalod} from "react-icons/fa";
import { FaClipboardList } from 'react-icons/fa6';
import { IoCalendarNumberSharp } from 'react-icons/io5';
import { MdOutlineCompareArrows, MdSpaceDashboard } from 'react-icons/md';
import { FaUserCircle } from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className="flex flex-col gap-9 h-[94vh] ml-3 bg-gray-200 p-[8px] rounded-lg mt-3 border border-gray-400">
      
      {/* =====Logo==== */}
      <div className="text-center p-5 flex gap-5 items-center">
        <FaInstalod/>
        <h2 className="font-bold text-lg">Front-Desk</h2>
      </div>
      <div className='flex  items-center bg-gray-500 rounded-lg pl-3 text-white py-3 gap-3 hover:bg-gray-700'>
        <p>Location</p>
        <MdOutlineCompareArrows className='text-2xl' />
      </div>

      {/* ============Menu List======= */}
      <div className="flex flex-col gap-5">
        <a 
          href="" 
          className="flex items-center gap-5 text-16px font-semibold p-2.5 rounded-lg 
          transition duration-300 ease-in-out text-white bg-black hover:bg-gray">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.6667 8H10.6667L9.33337 10H6.66671L5.33337 8H1.33337" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.63337 3.40663L1.33337 7.99996V12C1.33337 12.3536 1.47385 12.6927 1.7239 12.9428C1.97395 13.1928 2.31309 13.3333 2.66671 13.3333H13.3334C13.687 13.3333 14.0261 13.1928 14.2762 12.9428C14.5262 12.6927 14.6667 12.3536 14.6667 12V7.99996L12.3667 3.40663C12.2563 3.18448 12.0862 2.99754 11.8753 2.86681C11.6645 2.73608 11.4214 2.66676 11.1734 2.66663H4.82671C4.57865 2.66676 4.33555 2.73608 4.12474 2.86681C3.91392 2.99754 3.74376 3.18448 3.63337 3.40663Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Order
        </a>
        <a 
          href="" 
          className="flex items-center gap-5 text-16px font-semibold p-2.5 rounded-lg 
          transition duration-300 ease-in-out text-black hover:bg-slate-800 hover:text-slate-200">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_12388)">
            <path d="M11.5 5H2.5C2.22386 5 2 5.22386 2 5.5V12.5C2 12.7761 2.22386 13 2.5 13H11.5C11.7761 13 12 12.7761 12 12.5V5.5C12 5.22386 11.7761 5 11.5 5Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 3H13.5C13.6326 3 13.7598 3.05268 13.8536 3.14645C13.9473 3.24021 14 3.36739 14 3.5V11" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.6875 8.625L6.1875 10.125L9.1875 7.125" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1_12388">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg>

          Subscription
        </a>
        <a 
          href="" 
          className="flex items-center gap-5 text-16px font-semibold p-2.5 rounded-lg
           transition duration-300 ease-in-out text-black hover:bg-slate-800 hover:text-slate-200">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.6666 1.33337V4.00004" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.33337 1.33337V4.00004" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 6.66663H14" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.33337 9.33337H5.34004" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 9.33337H8.00667" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.6666 9.33337H10.6733" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.33337 12H5.34004" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 12H8.00667" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.6666 12H10.6733" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          Calender
        </a>
        <a 
          href="" 
          className="flex items-center gap-5 text-16px font-semibold p-2.5 rounded-lg
           transition duration-300 ease-in-out text-black hover:bg-slate-800 hover:text-slate-200">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.33337 14.6667H12.6667M3.33337 1.33337H12.6667M11.3334 14.6667V11.8854C11.3333 11.5318 11.1928 11.1927 10.9427 10.9427L8.00004 8.00004M8.00004 8.00004L5.05737 10.9427C4.80731 11.1927 4.66678 11.5318 4.66671 11.8854V14.6667M8.00004 8.00004L5.05737 5.05737C4.80731 4.80738 4.66678 4.4683 4.66671 4.11471V1.33337M8.00004 8.00004L10.9427 5.05737C11.1928 4.80738 11.3333 4.4683 11.3334 4.11471V1.33337" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          Watchlist
        </a>
      </div>
        
       <a 
          href="" 
          className="mt-auto flex items-center gap-5 text-16px font-semibold p-3 rounded-lg
         transition duration-300 ease-in-out text-black hover:bg-slate-800 hover:text-slate-200">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66667 2H2V8H6.66667V2Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 2H9.33337V5.33333H14V2Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 8H9.33337V14H14V8Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66667 10.6667H2V14.0001H6.66667V10.6667Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          Dashboard
          
        </a>

        <div className='mt-auto flex items-center gap-5 font-semibold bg-gray-300 rounded p-2'>
          <FaUserCircle className='text-2xl' />
          
          <div className="flex flex-col leading-tight">
            <p className='font-semibold'>Admin name</p>
            <p className="text-sm font-normal text-gray-600">admin@gmail.com</p>
          </div>
    </div>


        
    </div>
  )
}

export default Sidebar
