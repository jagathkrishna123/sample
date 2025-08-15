import React from 'react'

const Buttonsection = () => {
  return (
    <div className='flex flex-row justify-between'>
        <div>
            <button className="bg-slate-100 text-xs p-2 rounded-lg flex items-center text-slate-700 font-geist mt-3 gap-[6px] pl-[12px] pr-[12px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 2H1.33337L6.66671 8.30667V12.6667L9.33337 14V8.30667L14.6667 2Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                Add filter
            </button>
        </div>
        <div className='flex flex-row gap-[16px]'>
            <input type="text" placeholder='Search client...' className='bg-white shadow-gray-400 outline-none shadow-sm rounded p-2 mt-3 text-[12px] font-geist w-[230px] h-[28px]'/>
            <div className='mt-2 flex flex-row gap-[16px]'>
                <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9.33337V13.3334H16" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24 16C23.9989 14.8422 23.6629 13.7095 23.0325 12.7384C22.4021 11.7673 21.5041 10.9993 20.447 10.5272C19.3899 10.055 18.2187 9.89873 17.0748 10.0773C15.9308 10.2558 14.863 10.7615 14 11.5334L12 13.3334" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24 22.6666V18.6666H20" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 16C12.0011 17.1578 12.3371 18.2905 12.9675 19.2616C13.5979 20.2327 14.4959 21.0007 15.553 21.4729C16.6101 21.9451 17.7813 22.1013 18.9252 21.9228C20.0692 21.7442 21.137 21.2385 22 20.4667L24 18.6667" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.6667 10H13.3333C12.597 10 12 10.597 12 11.3333V20.6667C12 21.403 12.597 22 13.3333 22H22.6667C23.403 22 24 21.403 24 20.6667V11.3333C24 10.597 23.403 10 22.6667 10Z" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 10V22" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 18V20.6667C24 21.0203 23.8595 21.3594 23.6095 21.6095C23.3594 21.8595 23.0203 22 22.6667 22H13.3333C12.9797 22 12.6406 21.8595 12.3905 21.6095C12.1405 21.3594 12 21.0203 12 20.6667V18M14.6667 14.6667L18 18M18 18L21.3333 14.6667M18 18V10" stroke="#334155" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>


        </div>
    </div>
  )
}

export default Buttonsection