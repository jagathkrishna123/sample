import React from 'react'

import { FaUserCircle } from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3 h-[800px] w-[228px] ml-3 bg-slate-50 p-[8px] rounded-lg mt-3">
      
      {/* =====Logo==== */}
      <div className="text-center p-5 flex gap-3 items-center">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.48 0H3.52001C1.57596 0 0 1.57596 0 3.52001V18.48C0 20.424 1.57596 22 3.52001 22H18.48C20.424 22 22 20.424 22 18.48V3.52001C22 1.57596 20.424 0 18.48 0Z" fill="#262626"/>
        <path d="M17.7627 12.9381C18.8596 12.9381 19.7488 12.047 19.7488 10.9479C19.7488 9.84878 18.8596 8.95776 17.7627 8.95776C16.6658 8.95776 15.7766 9.84878 15.7766 10.9479C15.7766 12.047 16.6658 12.9381 17.7627 12.9381Z" fill="white"/>
        <path d="M4.17823 12.9578C5.27512 12.9578 6.16433 12.0668 6.16433 10.9677C6.16433 9.86856 5.27512 8.97754 4.17823 8.97754C3.08134 8.97754 2.19214 9.86856 2.19214 10.9677C2.19214 12.0668 3.08134 12.9578 4.17823 12.9578Z" fill="white"/>
        <path d="M6.12525 8.10188C7.22214 8.10188 8.11135 7.21086 8.11135 6.11173C8.11135 5.0126 7.22214 4.12158 6.12525 4.12158C5.02836 4.12158 4.13916 5.0126 4.13916 6.11173C4.13916 7.21086 5.02836 8.10188 6.12525 8.10188Z" fill="white"/>
        <path d="M10.97 6.15157C12.0669 6.15157 12.9561 5.26055 12.9561 4.16142C12.9561 3.06229 12.0669 2.17126 10.97 2.17126C9.87309 2.17126 8.98389 3.06229 8.98389 4.16142C8.98389 5.26055 9.87309 6.15157 10.97 6.15157Z" fill="white"/>
        <path d="M15.8165 8.10188C16.9134 8.10188 17.8026 7.21086 17.8026 6.11173C17.8026 5.0126 16.9134 4.12158 15.8165 4.12158C14.7196 4.12158 13.8304 5.0126 13.8304 6.11173C13.8304 7.21086 14.7196 8.10188 15.8165 8.10188Z" fill="white"/>
        <path d="M15.8165 17.6546C16.9134 17.6546 17.8026 16.7636 17.8026 15.6645C17.8026 14.5653 16.9134 13.6743 15.8165 13.6743C14.7196 13.6743 13.8304 14.5653 13.8304 15.6645C13.8304 16.7636 14.7196 17.6546 15.8165 17.6546Z" fill="white"/>
        <path d="M10.97 19.7244C12.0669 19.7244 12.9561 18.8334 12.9561 17.7343C12.9561 16.6352 12.0669 15.7441 10.97 15.7441C9.87309 15.7441 8.98389 16.6352 8.98389 17.7343C8.98389 18.8334 9.87309 19.7244 10.97 19.7244Z" fill="white"/>
        <path d="M6.12525 17.6546C7.22214 17.6546 8.11135 16.7636 8.11135 15.6645C8.11135 14.5653 7.22214 13.6743 6.12525 13.6743C5.02836 13.6743 4.13916 14.5653 4.13916 15.6645C4.13916 16.7636 5.02836 17.6546 6.12525 17.6546Z" fill="white"/>
        </svg>

        <h2 className="font-bold text-[18px] font-poppins">Front-Desk</h2>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z" stroke="#64748B" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 2V14" stroke="#64748B" stroke-width="0.666667" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="8" y="2" width="6" height="12" rx="1" fill="#64748B"/>
        </svg>

      </div>

      <div className='gap-3'>

            <div className='flex items-center bg-white rounded-lg pl-3 gap-3 hover:bg-slate-50 justify-between p-2 mb-2'>
              <p className='text-slate-700 text-[12px] font-geist'>Location Name</p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3334 7.33333L14 4.66667L11.3334 2" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 4.66663H6" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.66667 14L2 11.3333L4.66667 8.66663" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 11.3334H2" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>

          <div className='flex items-center gap-5 font-semibold bg-slate-100 rounded p-2 shadow-lg'>
              <div className="flex flex-col leading-tight">
                  <p className='font-bold text-[16px] text-slate-700'>08:30 AM <span className='text-[14px] font-medium'>Tue 20 Jan</span></p>
                  <p className="text-sm font-normal text-gray-600 flex flex-row gap-3"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.00004 12.4167C9.99158 12.4167 12.4167 9.99158 12.4167 7.00004C12.4167 4.0085 9.99158 1.58337 7.00004 1.58337C4.0085 1.58337 1.58337 4.0085 1.58337 7.00004C1.58337 9.99158 4.0085 12.4167 7.00004 12.4167Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1.58337 7H12.4167" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.00004 1.58337C8.3549 3.06665 9.12487 4.99156 9.16671 7.00004C9.12487 9.00852 8.3549 10.9334 7.00004 12.4167C5.64518 10.9334 4.87522 9.00852 4.83337 7.00004C4.87522 4.99156 5.64518 3.06665 7.00004 1.58337Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span className='text-[10px] text-slate-700 flex flex-row gap-[90px] font-geist'>UTS: +5hours <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 6L8.5 10L12.5 6" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </span>
                  </p>
              </div>
          </div>
      </div>

      {/* ============Menu List======= */}
    <div className='flex flex-col justify-between'>
      <div className="flex flex-col gap-1">
        <a 
          href="" 
          className="flex items-center gap-5 text-16px font-semibold p-2.5 rounded-lg 
          transition duration-300 ease-in-out bg-white text-slate-700 shadow-lg">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.6667 8H10.6667L9.33337 10H6.66671L5.33337 8H1.33337" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.63337 3.40663L1.33337 7.99996V12C1.33337 12.3536 1.47385 12.6927 1.7239 12.9428C1.97395 13.1928 2.31309 13.3333 2.66671 13.3333H13.3334C13.687 13.3333 14.0261 13.1928 14.2762 12.9428C14.5262 12.6927 14.6667 12.3536 14.6667 12V7.99996L12.3667 3.40663C12.2563 3.18448 12.0862 2.99754 11.8753 2.86681C11.6645 2.73608 11.4214 2.66676 11.1734 2.66663H4.82671C4.57865 2.66676 4.33555 2.73608 4.12474 2.86681C3.91392 2.99754 3.74376 3.18448 3.63337 3.40663Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p className='text-[12px] font-medium text-slate-700 font-geist'>Orders</p>
        </a>
        <a 
          href="" 
          className="flex items-center gap-5 text-16px font-semibold p-2.5 rounded-lg 
          transition duration-300 ease-in-out text-slate-700 hover:bg-white hover:shadow-lg">
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
              <p className='text-[12px] font-medium text-slate-700 font-geist'>Subscription</p>          
        </a>
        <a 
          href="" 
          className="flex items-center gap-5 text-16px font-semibold p-2.5 rounded-lg
           transition duration-300 ease-in-out text-slate-700 hover:bg-white hover:shadow-lg">
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
          <p className='text-[12px] font-medium text-slate-700 font-geist'>Calender</p>
          
        </a>
        <a 
          href="" 
          className="flex items-center gap-5 text-16px font-semibold p-2.5 rounded-lg
           transition duration-300 ease-in-out text-slate-700 hover:bg-white hover:shadow-lg">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.33337 14.6667H12.6667M3.33337 1.33337H12.6667M11.3334 14.6667V11.8854C11.3333 11.5318 11.1928 11.1927 10.9427 10.9427L8.00004 8.00004M8.00004 8.00004L5.05737 10.9427C4.80731 11.1927 4.66678 11.5318 4.66671 11.8854V14.6667M8.00004 8.00004L5.05737 5.05737C4.80731 4.80738 4.66678 4.4683 4.66671 4.11471V1.33337M8.00004 8.00004L10.9427 5.05737C11.1928 4.80738 11.3333 4.4683 11.3334 4.11471V1.33337" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p className='text-[12px] font-medium text-slate-700 font-geist'>Watchlist</p>
          
        </a>
      </div>
        


       <div className='gap-3 mt-[190px]'>
        <a 
          href="" 
          className="flex items-center gap-5 text-16px font-semibold p-3 rounded-lg
         transition duration-300 ease-in-out text-slate-700 hover:bg-white hover:shadow-lg mb-[5px]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66667 2H2V8H6.66667V2Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 2H9.33337V5.33333H14V2Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 8H9.33337V14H14V8Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66667 10.6667H2V14.0001H6.66667V10.6667Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          <p className='text-[12px] font-medium text-slate-700 font-geist'>Dashboard</p>
          
          <div className='ml-[40px]'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 2H14V6" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.66663 9.33333L14 2" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>

          
        </a>
       
        <div className='gap-2'>
            <div className='flex items-center gap-5 bg-gray-100 rounded p-2 shadow-xl mb-[3px] mt-[3px] w-[212px] h-[60px]'>
                  <FaUserCircle className='text-2xl' />
                  
                  <div className="flex flex-col leading-tight">
                    <p className='font-medium text-[12px] text-slate-900 font-geist'>Admin name</p>
                    <p className="text-[12px] font-geist text-slate-500">adminname@gmail.com</p>
                  </div>
            </div>
            <div className='flex items-center gap-5 font-semibold bg-gray-300 rounded p-2 shadow-xl w-[212px] h-[49px]'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1_12438)">
                          <path d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8.00004 1.33325C4.31814 1.33325 1.33337 4.31802 1.33337 7.99992C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M6.05994 6.00014C6.21667 5.55458 6.52604 5.17887 6.93324 4.93956C7.34044 4.70024 7.8192 4.61276 8.28472 4.69261C8.75024 4.77246 9.17248 5.01449 9.47665 5.37582C9.78083 5.73716 9.94731 6.19448 9.9466 6.6668C9.9466 8.00014 7.9466 8.6668 7.9466 8.6668" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M8 11.3333H8.00667" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_1_12438">
                          <rect width="16" height="16" fill="white"/>
                          </clipPath>
                          </defs>
                          </svg>

                  
                  <div className="flex flex-col leading-tight">
                    <p className='text-slate-700 text-[12px]'>Help center</p>
                    <p className="font-normal text-slate-500 text-[10px] font-geist">@2024 Omnify.Inc.</p>
                  </div>
            </div>
        </div>  
       </div>
      </div>

        
    </div>
  )
}

export default Sidebar
