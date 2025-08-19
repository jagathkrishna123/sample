import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-between items-center p-4 text-sm text-gray-600 w-full">
        <span>
          Displaying <strong>16</strong> out of{" "}
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
  )
}

export default Footer