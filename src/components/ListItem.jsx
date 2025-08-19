import React from 'react'

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
  ];

  const statusClasses = {
    Lead: "bg-blue-100 text-blue-600",
    Active: "bg-green-100 text-green-600",
    Inactive: "bg-gray-100 text-gray-600",
  };
  return (
     <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-3 ml-2 h-full overflow-y-auto">
      <table className="min-w-full text-left text-sm text-gray-700">
        {/* =============Header==================================================== */}
        <thead className="bg-gray-50 font-medium text-slate-500 text-[12px]">
          <tr>
            <th className="px-4 py-3">
              <input type="checkbox" className="cursor-pointer" />
            </th>
           <th className="px-4 py-3">
  <div className="flex items-center gap-1 whitespace-nowrap text-slate-500">
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    ><path
        d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z"
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
      /><path
        d="M8 1V3"
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
      /><path
        d="M4 1V3"
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
      /><path
        d="M1.5 5H10.5"
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span>Created On</span>
  </div>
</th>


<th className="px-4 py-3">
  <div className="flex items-center gap-1 whitespace-nowrap text-slate-500">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 10.5V9.5C9.5 8.96957 9.28929 8.46086 8.91421 8.08579C8.53914 7.71071 8.03043 7.5 7.5 7.5H4.5C3.96957 7.5 3.46086 7.71071 3.08579 8.08579C2.71071 8.46086 2.5 8.96957 2.5 9.5V10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 5.5C7.10457 5.5 8 4.60457 8 3.5C8 2.39543 7.10457 1.5 6 1.5C4.89543 1.5 4 2.39543 4 3.5C4 4.60457 4.89543 5.5 6 5.5Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

    <span>Payers</span>
  </div>
</th>

<th className="px-4 py-3">
  <div className="flex items-center gap-1 whitespace-nowrap text-slate-500">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_18317)">
          <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 6.5C6.27614 6.5 6.5 6.27614 6.5 6C6.5 5.72386 6.27614 5.5 6 5.5C5.72386 5.5 5.5 5.72386 5.5 6C5.5 6.27614 5.72386 6.5 6 6.5Z" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_1_18317">
          <rect width="12" height="12" fill="white"/>
          </clipPath>
          </defs>
          </svg>
    <span>Status</span>
  </div>
</th>

<th className="px-4 py-3">
  <div className="flex items-center gap-1 whitespace-nowrap text-slate-500">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 7.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 1.5L4 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 1.5L7 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    <span>Email</span>
  </div>
</th>

<th className="px-4 py-3">
  <div className="flex items-center gap-1 whitespace-nowrap text-slate-500">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 7.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 1.5L4 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 1.5L7 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    <span>Payer Phone</span>
  </div>
</th>

<th className="px-4 py-3">
  <div className="flex items-center gap-1 whitespace-nowrap text-slate-500">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 7.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 1.5L4 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 1.5L7 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    <span>Services</span>
  </div>
</th>

<th className="px-4 py-3">
  <div className="flex items-center gap-1 whitespace-nowrap text-slate-500">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 7.5H10" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 1.5L4 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 1.5L7 10.5" stroke="#64748B" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
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
                  className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[item.status]}`}
                >
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

      {/* Footer.................................. */}
      <div className="flex justify-between items-center p-4 text-sm text-gray-600 border-t">
        <span>
          Displaying <strong>{waitlistData.length}</strong> out of{" "}
          <strong>104</strong>
        </span>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded">Previous</button>
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">Next</button>
        </div>
      </div>
    </div>
  )
}

export default ListItem