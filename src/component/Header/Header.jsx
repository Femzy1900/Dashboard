import React from 'react'

const Header = () => {
  return (
    <div className=' m-6 flex basis-9/12'>
      <div className="flex items-center">
        <input className='p-1 rounded-2xl text-end shadow-xl bg-white w-[300px]' type="search" placeholder='search' name="" id="" />
      </div>
      <div className="flex  justify-end">
        <div className=" rounded-full w-[50px] h-[50px] border-4 border-[#925FE2]"></div>
        <div className="flex flex-col">
            <h2>John Doe</h2>
            <h2>3rd year</h2>
        </div>
      </div>
    </div>
  )
}

export default Header
