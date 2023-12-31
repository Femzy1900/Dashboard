import React from 'react'
import Bell from '../../assets/bell-ringing.png'

const Header = () => {
  return (
    <div className='items-center mx-6 mt-4 flex basis-9/12'>
      <div className="flex items-center">
        <input className='p-2 rounded-2xl text-end shadow-xl bg-white w-[395px]' type="search" placeholder='search' name="" id="" />
      </div>
      <div className="flex w-[45%] pb-2 items-center justify-end">
        <div className="m-1 rounded-full w-[60px] h-[48px] border-4 border-[#925FE2]"></div>
        <div className="flex flex-col ">
            <h2 className='text-black leading-none font-bold text-[16px]'>John Doe</h2>
            <h2 className='font-light  '>3rd year</h2>
        </div>
        <div className="w-[25%]">
            <img className='w-[25px] h-[25px]' src={Bell} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
