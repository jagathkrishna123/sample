import React from 'react'
import Tablecalendar from "../assets/tablecalendar.svg"
import Status from "../assets/status.svg"
import Schedule from "../assets/schedule.svg"
import Phone from "../assets/phone.svg"
import Payer from "../assets/payer.svg"
import Services from "../assets/services.svg"
import Email from "../assets/email.svg"
import Footer from './Footer'







const ListItem = () => {
     const waitlistData = [
    {
      id: 1,
      createdOn: "Sun, 07 Jan 2024 2:42 PM",
      payer: "Theodore T.C. Calvin",
      status: "Lead",
      email: "theodore@gmail.com",
      phone: "+91 +966559186876",
      services: "Appointment Session",
      scheduled: "Sun, 07 Jan 2024 2:42 PM",
    },
    {
      id: 2,
      createdOn: "Mon, 08 Jan 2024 3:15 PM",
      payer: "Higgins Q. Malthus",
      status: "Active",
      email: "higgins@gmail.com",
      phone: "+91 +966559186877",
      services: "Fitness Session",
      scheduled: "Mon, 08 Jan 2024 4:15 PM",
    },
    {
      id: 3,
      createdOn: "Tue, 09 Jan 2024 11:10 AM",
      payer: "Rick Hunter",
      status: "Inactive",
      email: "rick.hunter@gmail.com",
      phone: "+91 +966559186878",
      services: "Therapy Session",
      scheduled: "Tue, 09 Jan 2024 12:00 PM",
    },
    {
      id: 4,
      createdOn: "Tue, 09 Jan 2024 11:10 AM",
      payer: "Rick Hunter",
      status: "Inactive",
      email: "rick.hunter@gmail.com",
      phone: "+91 +966559186878",
      services: "Therapy Session",
      scheduled: "Tue, 09 Jan 2024 12:00 PM",
    },
    {
      id: 5,
      createdOn: "Tue, 09 Jan 2024 11:10 AM",
      payer: "Rick Hunter",
      status: "Inactive",
      email: "rick.hunter@gmail.com",
      phone: "+91 +966559186878",
      services: "Therapy Session",
      scheduled: "Tue, 09 Jan 2024 12:00 PM",
    },
    {
      id: 6,
      createdOn: "Tue, 09 Jan 2024 11:10 AM",
      payer: "Rick Hunter",
      status: "Inactive",
      email: "rick.hunter@gmail.com",
      phone: "+91 +966559186878",
      services: "Therapy Session",
      scheduled: "Tue, 09 Jan 2024 12:00 PM",
    },
    {
      id: 7,
      createdOn: "Tue, 09 Jan 2024 11:10 AM",
      payer: "Rick Hunter",
      status: "Inactive",
      email: "rick.hunter@gmail.com",
      phone: "+91 +966559186878",
      services: "Therapy Session",
      scheduled: "Tue, 09 Jan 2024 12:00 PM",
    },
    {
      id: 8,
      createdOn: "Tue, 09 Jan 2024 11:10 AM",
      payer: "Rick Hunter",
      status: "Inactive",
      email: "rick.hunter@gmail.com",
      phone: "+91 +966559186878",
      services: "Therapy Session",
      scheduled: "Tue, 09 Jan 2024 12:00 PM",
    },
    {
      id: 9,
      createdOn: "Tue, 09 Jan 2024 11:10 AM",
      payer: "Rick Hunter",
      status: "Inactive",
      email: "rick.hunter@gmail.com",
      phone: "+91 +966559186878",
      services: "Therapy Session",
      scheduled: "Tue, 09 Jan 2024 12:00 PM",
    },
    {
      id: 10,
      createdOn: "Tue, 09 Jan 2024 11:10 AM",
      payer: "Rick Hunter",
      status: "Inactive",
      email: "rick.hunter@gmail.com",
      phone: "+91 +966559186878",
      services: "Therapy Session",
      scheduled: "Tue, 09 Jan 2024 12:00 PM",
    },
    {
      id: 11,
      createdOn: "Tue, 09 Jan 2024 11:10 AM",
      payer: "Rick Hunter",
      status: "Inactive",
      email: "rick.hunter@gmail.com",
      phone: "+91 +966559186878",
      services: "Therapy Session",
      scheduled: "Tue, 09 Jan 2024 12:00 PM",
    },
    {
      id: 12,
      createdOn: "Tue, 09 Jan 2024 11:10 AM",
      payer: "Rick Hunter",
      status: "Inactive",
      email: "rick.hunter@gmail.com",
      phone: "+91 +966559186878",
      services: "Therapy Session",
      scheduled: "Tue, 09 Jan 2024 12:00 PM",
    },
    {
      id: 13,
      createdOn: "Tue, 09 Jan 2024 11:10 AM",
      payer: "Rick Hunter",
      status: "Inactive",
      email: "rick.hunter@gmail.com",
      phone: "+91 +966559186878",
      services: "Therapy Session",
      scheduled: "Tue, 09 Jan 2024 12:00 PM",
    },
    {
      id: 14,
      createdOn: "Tue, 09 Jan 2024 11:10 AM",
      payer: "Rick Hunter",
      status: "Inactive",
      email: "rick.hunter@gmail.com",
      phone: "+91 +966559186878",
      services: "Therapy Session",
      scheduled: "Tue, 09 Jan 2024 12:00 PM",
    },
    {
      id: 15,
      createdOn: "Tue, 09 Jan 2024 11:10 AM",
      payer: "Rick Hunter",
      status: "Inactive",
      email: "rick.hunter@gmail.com",
      phone: "+91 +966559186878",
      services: "Therapy Session",
      scheduled: "Tue, 09 Jan 2024 12:00 PM",
    },
    {
      id: 16,
      createdOn: "Tue, 09 Jan 2024 11:10 AM",
      payer: "Rick Hunter",
      status: "Inactive",
      email: "rick.hunter@gmail.com",
      phone: "+91 +966559186878",
      services: "Therapy Session",
      scheduled: "Tue, 09 Jan 2024 12:00 PM",
    },
    {
      id: 17,
      createdOn: "Tue, 09 Jan 2024 11:10 AM",
      payer: "Rick Hunter",
      status: "Inactive",
      email: "rick.hunter@gmail.com",
      phone: "+91 +966559186878",
      services: "Therapy Session",
      scheduled: "Tue, 09 Jan 2024 12:00 PM",
    },
    {
      id: 18,
      createdOn: "Tue, 09 Jan 2024 11:10 AM",
      payer: "Rick Hunter",
      status: "Inactive",
      email: "rick.hunter@gmail.com",
      phone: "+91 +966559186878",
      services: "Therapy Session",
      scheduled: "Tue, 09 Jan 2024 12:00 PM",
    },
  ];

  const statusClasses = {
    Lead: "bg-blue-100 text-blue-600 text-[12px] font-medium font-geist",
    Active: "bg-green-100 text-green-600 text-[12px] font-medium font-geist",
    Inactive: "bg-gray-100 text-red-600 text-[12px] font-medium font-geist",
  };
  return (
     <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-3 ml-2 h-full overflow-y-auto flex flex-col">
      <div className='overflow-y-auto flex-1'>
      <table className="min-w-full text-left text-sm text-gray-700">
        {/* =============Header==================================================== */}
        <thead className="bg-gray-50 font-medium text-slate-500 text-[12px] sticky top-0 z-10">
          <tr>
            <th className="px-4 py-3">
              <input type="checkbox" className="cursor-pointer" />
            </th>
           <th className="px-4 py-3">
  <div className="flex items-center gap-1 whitespace-nowrap text-slate-500">
    <img src={Tablecalendar} alt="" />
    <span>Created On</span>
  </div>
</th>


<th className="px-4 py-3">
  <div className="flex items-center gap-1 whitespace-nowrap text-slate-500">
          <img src={Payer} alt="" />
    <span>Payers</span>
  </div>
</th>

<th className="px-4 py-3">
  <div className="flex items-center gap-1 whitespace-nowrap text-slate-500">
          <img src={Status} alt="" />
    <span>Status</span>
  </div>
</th>

<th className="px-4 py-3">
  <div className="flex items-center gap-1 whitespace-nowrap text-slate-500">
         <img src={Email} alt="" />
    <span>Email</span>
  </div>
</th>

<th className="px-4 py-3">
  <div className="flex items-center gap-1 whitespace-nowrap text-slate-500">
          <img src={Phone} alt="" />
    <span>Payer Phone</span>
  </div>
</th>

<th className="px-4 py-3">
  <div className="flex items-center gap-1 whitespace-nowrap text-slate-500">
          <img src={Services} alt="" />
    <span>Services</span>
  </div>
</th>

<th className="px-4 py-3">
  <div className="flex items-center gap-1 whitespace-nowrap text-slate-500">
          <img src={Schedule} alt="" />
    <span>Scheduled</span>
  </div>
</th>
          </tr>
        </thead>

        {/* ========Body================================================= */}
        <tbody className="divide-y divide-gray-200 text-gray-700 font-geist text-[12px] font-medium">
          {waitlistData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-4 py-3">
                <input type="checkbox" className="cursor-pointer" />
              </td>
              <td className="px-4 py-3">{item.createdOn}</td>
              <td className="px-4 py-3">{item.payer}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[item.status]}`}>
                  {item.status}
                </span>
              </td>
              <td className="px-4 py-3">{item.email}</td>
              <td className="px-4 py-3">{item.phone}</td>
              <td className="px-4 py-3">{item.services}</td>
              <td className="px-4 py-3">{item.scheduled}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {/* Footer.................................. */}
      
      <Footer/>
    </div>
  )
}

export default ListItem