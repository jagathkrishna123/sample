import React from 'react'

const columns = [
    {id:"createdOn", label: "Order Created On", checked: true},
    {id:"payer", label: "Payer", checked: true},
    {id:"status", label: "Status", checked: true},
    {id:"email", label: "Email", checked: true},
    {id:"service", label: "Service", checked: true},
    {id:"scheduled", label: "Scheduled", checked: true},
    {id:"payerPhone", label: "Payer Phone", checked: true}
];
const Filterpop = () => {
  return (
        <div className='w-[320px] h-[472px] rounded-[12px] p-[16px] gap-[16px] bg-white'>

        <div className='w-[288px] h-[52px] gap-[8px] mb-4'>
            <p className='font-geist font-medium text-[16px]'>Edit Columns</p>
            <p className='font-normal text-[14px] font-geist text-slate-700'>
            Select the columns to rearrange
            </p>
        </div>

        <div className='w-[288px] h-[324px] gap-[12px] flex flex-col overflow-y-auto'>
            {columns.map((col)=> (
                <div key={col.id} className='w-[266px] h-[36px] gap-3 flex flex-row items-center'>
                    <input type="checkbox" name="" defaultChecked={col.checked} className='cursor-pointer' />
                    <button className='w-[242px] h-[36px] rounded-[6px] border text-[14px] font-medium font-geist text-slate-700 text-left px-2'>{col.label}</button>
                </div>
            ))}
        </div>

        <div className='w-[288px] h-[32px] gap-[12px] flex mt-4'>
            <button className='w-[138px] h-[32px] rounded-[6px] border font-medium font-geist text-[14px]'>Reset to Default</button>
            <button className='w-[138px] h-[32px] rounded-[6px] bg-slate-900 text-white text-[14px]'>Apply</button>
        </div>
    </div>
  )
}

export default Filterpop