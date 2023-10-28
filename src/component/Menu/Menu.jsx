import React from 'react'
import Cap from "../../assets/Cap.png"
import {MdSpaceDashboard} from "react-icons/md"
import {BsFillPenFill} from "react-icons/bs"
import {FaMoneyBills} from "react-icons/fa6"
import {FaBook} from 'react-icons/fa6'
import {MdFreeCancellation} from "react-icons/md"
import {IoLogOut} from "react-icons/io5"
import {MdOutlineLibraryBooks} from 'react-icons/md'
import {MdCircleNotifications} from "react-icons/md"
import {BsCalendar3} from "react-icons/bs"

const Menu = () => {
  return (
    <div className='w-[223px] h-[960px] bg-[#925FE2] m-6 text-center justify-center rounded-2xl'>
        <div className="w-[128px] h-[128px] m-auto py-4 bg-[#925FE2]">
            <img className=' mt-7 rounded-[25px] bg-[#7b40da] p-4 ' src={Cap} alt="" />
        </div>
        <div className="bg-[#925FE2] mt-[100px]">
            <ul className='bg-[#925FE2] flex flex-col  gap-[40px] font-extrabold font-serif text-white'>
                <li className='bg-[#925FE2] pl-10 flex justify-start items-center text-[16px] gap-2'>< MdSpaceDashboard className='w-[28px] bg-[#925FE2]'/>Dashboard</li>
                <li className='bg-[#925FE2] pl-10 flex justify-start items-center text-[16px] gap-2'>< FaMoneyBills className='w-[25px] bg-[#925FE2]'/>Payment Info</li>
                <li className='bg-[#925FE2] pl-10 flex justify-start items-center text-[16px] gap-2'>< BsFillPenFill className='w-[25px] bg-[#925FE2]'/>Registration</li>
                <li className='bg-[#925FE2] pl-10 flex justify-start items-center text-[16px] gap-2'>< FaBook className='w-[25px] bg-[#925FE2]'/>Courses</li>
                <li className='bg-[#925FE2] pl-10 flex justify-start items-center text-[16px] gap-2'>< MdFreeCancellation className='w-[28px] bg-[#925FE2]'/>Drop Semester</li>
                <li className='bg-[#925FE2] pl-10 flex justify-start items-center text-[16px] gap-2'>< MdOutlineLibraryBooks className='w-[30px] bg-[#925FE2]'/>Results</li>
                <li className='bg-[#925FE2] pl-10 flex justify-start items-center text-[16px] gap-2'>< MdCircleNotifications className='w-[30px] bg-[#925FE2]'/>Notice</li>
                <li className='bg-[#925FE2] pl-11 flex justify-start items-center text-[16px] gap-2'>< BsCalendar3 className='w-[25px] bg-[#925FE2]'/>Schedule</li>
            </ul>
        </div>
        <div className="flex justify-center mt-[150px] font-extrabold font-serif text-white">
            <li className='bg-[#925FE2] pl-10 flex justify-start items-center text-[16px] gap-2'>< IoLogOut  className='w-[35px] bg-[#925FE2]'/>Logout</li>
        </div>
    </div>
  )
}

export default Menu
