import { BsSearch } from "react-icons/bs"
import { useState } from 'react'


const SearchBar = () => {
    return (
        <div className="search-bar px-4 ">

            <input className=" border shadow-3xl mt-4 rounded-lg p-4 w-full  hover:border-ag-green hover:border-2 outline-none" type="search" placeholder="search for a topic" />
        </div>
    )
}


export default SearchBar

{/* <div className="search-bar mx-4 border shadow-3xl mt-4 rounded-lg p-4 flex gap-4 items-center hover:cursor-pointer">
            <BsSearch style={{ color: 'green' }} />
            <p>Search for a topic</p>
            <input type="search" name="" id="" />
        </div> */}