import React, { useState } from "react";

const SimpleDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select status");

  const options = ["Lead", "Active", "Inactive"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-48">
      {/* Button */}
      <div
        className="flex items-center justify-between px-4 py-2 border rounded-lg bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        <span>{selected}</span>
        <span className="text-gray-500">▼</span>
      </div>

      {/* Dropdown list */}
      {isOpen && (
        <ul className="absolute mt-1 w-full bg-white border rounded-lg shadow-md z-10">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SimpleDropdown;
