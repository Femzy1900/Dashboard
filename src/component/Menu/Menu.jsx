import React from 'react'
import Cap from "../../assets/Cap.png"

const Menu = () => {
  return (
    <div className='w-[223px] h-[960px] bg-[#925FE2] m-6 text-center justify-center rounded-2xl'>
        <div className="w-[128px] h-[128px] m-auto py-4 bg-[#925FE2]">
            <img className=' mt-7 rounded-[25px] bg-[#7b40da] p-4 ' src={Cap} alt="" />
        </div>
        <div className="bg-[#925FE2] mt-[150px]">
            <ul className='bg-[#925FE2] flex flex-col gap-[48px] font-bold font-serif text-white'>
                <li className='bg-[#925FE2]'>Sidebar</li>
                <li className='bg-[#925FE2]'>Sidebar</li>
                <li className='bg-[#925FE2]'>Sidebar</li>
                <li className='bg-[#925FE2]'>Sidebar</li>
                <li className='bg-[#925FE2]'>Sidebar</li>
                <li className='bg-[#925FE2]'>Sidebar</li>
            </ul>
        </div>
    </div>
  )
}

export default Menu
