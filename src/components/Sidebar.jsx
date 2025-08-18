import React from 'react'

import { FaUserCircle } from "react-icons/fa";
import Order from "../assets/order.svg"
import MainLogo from "../assets/mainlogo.svg"
import Collapse from "../assets/collapse.svg"
import Location from "../assets/location.svg"
import Subscription from "../assets/subscription.svg"
import Calendar from "../assets/calendar.svg"
import Dashboard from "../assets/dashboard.svg"
import Dashboard2 from "../assets/dashboard2.svg"
import Help from "../assets/help.svg"
import Refresh from "../assets/refresh.svg"
import Download from "../assets/download.svg"
import Waitlist from "../assets/waitlist.svg"
import Web from "../assets/web.svg"
import CheckBoxfilter from "../assets/filter.svg"









const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3 h-[800px] w-[228px] ml-3 bg-slate-50 p-[8px] rounded-lg mt-3">
      
      {/* =====Logo==== */}
      <div className="text-center p-5 flex gap-3 items-center">
        <img src={MainLogo} alt="" />
        <h2 className="font-bold text-[18px] font-poppins">Front-Desk</h2>
        <img src={Collapse} alt="" />
      </div>

      <div className='gap-3'>

            <div className='flex items-center bg-white rounded-lg pl-3 gap-3 hover:bg-slate-50 justify-between p-2 mb-2'>
              <p className='text-slate-700 text-[12px] font-geist'>Location Namer</p>
              <img src={Location} alt="" />
            </div>

          <div className='flex items-center gap-5 font-semibold bg-slate-100 rounded p-2 shadow-lg'>
              <div className="flex flex-col leading-tight">
                  <p className='font-bold text-[16px] text-slate-700'>08:30 AM <span className='text-[14px] font-medium'>Tue 20 Jan</span></p>
                  <p className="text-sm font-normal text-gray-600 flex flex-row gap-3">
                   <img src={Web} alt="" />
                  <span className='text-[10px] text-slate-700 flex flex-row gap-[90px] font-geist'>UTS: +5hours 
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <img src={Order} alt="" />
          <p className='text-[12px] font-medium text-slate-700 font-geist'>Orders</p>
        </a>
        <a 
          href="" 
          className="flex items-center gap-5 text-16px font-semibold p-2.5 rounded-lg 
          transition duration-300 ease-in-out text-slate-700 hover:bg-white hover:shadow-lg">
          <img src={Subscription} alt="" />
              <p className='text-[12px] font-medium text-slate-700 font-geist'>Subscription</p>          
        </a>
        <a 
          href="" 
          className="flex items-center gap-5 text-16px font-semibold p-2.5 rounded-lg
           transition duration-300 ease-in-out text-slate-700 hover:bg-white hover:shadow-lg">
          <img src={Calendar} alt="" />
          <p className='text-[12px] font-medium text-slate-700 font-geist'>Calender</p>
        </a>

        <a 
          href="" 
          className="flex items-center gap-5 text-16px font-semibold p-2.5 rounded-lg
           transition duration-300 ease-in-out text-slate-700 hover:bg-white hover:shadow-lg">
          <img src={Waitlist} alt="" />
          <p className='text-[12px] font-medium text-slate-700 font-geist'>Waitlist</p>
        </a>
      </div>
        


       <div className='gap-3 mt-[190px]'>
        <a 
          href="" 
          className="flex items-center gap-5 text-16px font-semibold p-3 rounded-lg
         transition duration-300 ease-in-out text-slate-700 hover:bg-white hover:shadow-lg mb-[5px]">
          <img src={Dashboard} alt="" />
          <p className='text-[12px] font-medium text-slate-700 font-geist'>Dashboard</p>
          <div className='ml-[40px]'>
            <img src={Dashboard2} alt="" />
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
                  <img src={Help} alt="" />

                  
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
