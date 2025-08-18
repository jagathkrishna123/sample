import React, { useState } from 'react'
import Search from "../assets/search.svg"

const SearchServices = () => {
      const [searchType, setSearchType] = useState("name");
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchType === "name") {
      console.log("Searching services by name:", query);
      
    } else {
      console.log("Searching services by tags:", query);
      
    }
  };
  return (
    <div className='w-[382px] h-[348px] p-[16px] gap-[20px] flex flex-col bg-white'>
        <div className="flex gap-6">
            
        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="name"
            checked={searchType === "name"}
            onChange={(e) => setSearchType(e.target.value)}/>
          <p className="font-geist text-[14px] text-slate-700 font-normal">Search by name</p>
        </label>


        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="tags"
            checked={searchType === "tags"}
            onChange={(e) => setSearchType(e.target.value)}/>
          <p className="font-geist text-[14px] text-slate-700 font-normal">Search by Tags</p>
        </label>
      </div>

      <form onSubmit={handleSearch} className="flex gap-2 rounded-[4px] border w-[350px] h-[28px] pl-[12px] bg-gray-50">
        <img src={Search} alt="" />
        <input
          type="text"
          placeholder={
            searchType === "name" ? "Search service name" : "Search service tag"
          }
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" px-3 py-2 flex-1 bg-gray-50 "/>
      </form>
    </div>
  )
}

export default SearchServices