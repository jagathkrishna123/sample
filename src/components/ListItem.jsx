import React from 'react'

const ListItem = () => {
    const users = [
        {
            created: 'Sun, 07 Jan 2024',
            payer: 'Theadore cavilan',
            status: 'Lead',
            email:'theadorecav@gmail.com',
            phone: '6777839833',
            services:'Private language session',

        },
        {
            created: 'Sat, 06 Jan 2024',
            payer: 'Hannibal smith',
            status: 'Active',
            email:'hannibalsmith@gmail.com',
            phone: '9949499833',
            services:'sim bign session',

        },
        {
            created: 'Fri, 05 Jan 2024',
            payer: 'April Curus',
            status: 'Inactive',
            email:'aprilc@gmail.com',
            phone: '9949499833',
            services:'fitness private session',

        },
        {
            created: 'Thu, 06 Jan 2024',
            payer: 'Hannibal smith',
            status: 'Active',
            email:'hannibalsmith@gmail.com',
            phone: '9949499833',
            services:'sim bign session',

        },
        {
            created: 'Sun, 06 Jan 2024',
            payer: 'Hannibal smith',
            status: 'Active',
            email:'hannibalsmith@gmail.com',
            phone: '9949499833',
            services:'sim bign session',

        },
        {
            created: 'Sun, 06 Jan 2024',
            payer: 'Hannibal smith',
            status: 'Active',
            email:'hannibalsmith@gmail.com',
            phone: '9949499833',
            services:'sim bign session',

        },
        {
            created: 'Sun, 06 Jan 2024',
            payer: 'Hannibal smith',
            status: 'Lead',
            email:'hannibalsmith@gmail.com',
            phone: '9949499833',
            services:'sim bign session',

        },
        {
            created: 'Sun, 06 Jan 2024',
            payer: 'Hannibal smith',
            status: 'Lead',
            email:'hannibalsmith@gmail.com',
            phone: '9949499833',
            services:'sim bign session',

        },
        {
            created: 'Sun, 06 Jan 2024',
            payer: 'Hannibal smith',
            status: 'Lead',
            email:'hannibalsmith@gmail.com',
            phone: '9949499833',
            services:'sim bign session',

        },
        {
            created: 'Sun, 06 Jan 2024',
            payer: 'Hannibal smith',
            status: 'Lead',
            email:'hannibalsmith@gmail.com',
            phone: '9949499833',
            services:'sim bign session',

        },
        {
            created: 'Sun, 06 Jan 2024',
            payer: 'Hannibal smith',
            status: 'Lead',
            email:'hannibalsmith@gmail.com',
            phone: '9949499833',
            services:'sim bign session',

        },
    ]
  return (
    <div className='flex flex-col'>
        
        {users.map((user)=>(
            <div className='flex flex-row p-2 w-full gap-3'>
                <input type="checkbox"/>
                <span className='text-gray-800 bg-slate-50 p-2 shadow-lg'>{user.created}</span>
                <span className='text-gray-800 bg-slate-50 p-2 shadow-lg'>{user.payer}</span>
                <span className='text-gray-800 bg-slate-50 p-2 shadow-lg'>{user.status}</span>
                <span className='text-gray-800 bg-slate-50 p-2 shadow-lg'>{user.email}</span>
                <span className='text-gray-800 bg-slate-50 p-2 shadow-lg'>{user.phone}</span>
                <span className='text-gray-800 bg-slate-50 p-2 shadow-lg'>{user.services}</span>
                
            </div>
        ))}
    </div>
  )
}

export default ListItem