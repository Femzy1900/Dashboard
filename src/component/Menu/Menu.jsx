import React from 'react'
import Cap from "../../assets/Cap.png"
import {MdSpaceDashboard} from "react-icons/md"
import {BsFillPenFill} from "react-icons/bs"

const Menu = () => {
  return (
    <div className='w-[223px] h-[960px] bg-[#925FE2] m-6 text-center justify-center rounded-2xl'>
        <div className="w-[128px] h-[128px] m-auto py-4 bg-[#925FE2]">
            <img className=' mt-7 rounded-[25px] bg-[#7b40da] p-4 ' src={Cap} alt="" />
        </div>
        <div className="bg-[#925FE2] mt-[100px]">
            <ul className='bg-[#925FE2] flex flex-col gap-[35px] font-extrabold font-serif text-white'>
                <li className='bg-[#925FE2] flex justify-center items-center text-[16px] gap-2'>< MdSpaceDashboard className='w-[35px] bg-[#925FE2]'/>Dashboard</li>
                <li className='bg-[#925FE2] flex justify-center items-center text-[16px] gap-2'>< BsFillPenFill className='w-[25px] bg-[#925FE2]'/>Payment Info</li>
                <li className='bg-[#925FE2] flex justify-center items-center text-[16px] gap-2'>< BsFillPenFill className='w-[35px] bg-[#925FE2]'/>Registration</li>
                <li className='bg-[#925FE2] flex justify-center items-center text-[16px] gap-2'>< MdSpaceDashboard className='w-[35px] bg-[#925FE2]'/>Courses</li>
                <li className='bg-[#925FE2] flex justify-center items-center text-[16px] gap-2'>< MdSpaceDashboard className='w-[35px] bg-[#925FE2]'/>Dashboard</li>
                <li className='bg-[#925FE2] flex justify-center items-center text-[16px] gap-2'>< MdSpaceDashboard className='w-[35px] bg-[#925FE2]'/>Dashboard</li>
                <li className='bg-[#925FE2] flex justify-center items-center text-[16px] gap-2'>< MdSpaceDashboard className='w-[35px] bg-[#925FE2]'/>Dashboard</li>
                <li className='bg-[#925FE2] flex justify-center items-center text-[16px] gap-2'>< MdSpaceDashboard className='w-[35px] bg-[#925FE2]'/>Dashboard</li>
            </ul>
        </div>
        <div className="flex justify-center mt-[100px] font-extrabold font-serif text-white">
            <li className='bg-[#925FE2] flex justify-center items-center text-[16px] gap-2'>< MdSpaceDashboard   className='w-[35px] bg-[#925FE2]'/>Dashboard</li>
        </div>
    </div>
  )
}

export default Menu
