import React from 'react'
import Backpack from "../../assets/Backpack.png"
import Student from "../../assets/Student.png"
import Scholarcap from "../../assets/Scholarcap.png"

const Bodyhead = () => {
  return (
    <div className=' relative p-4 m-6 flex rounded-2xl w-[97%] h-[260px] bg-[#925FE2]'>
      <div className="items-center text-center  flex flex-col">
        <p className=''>September 4, 2023</p>
        <h1>Welcome back, John!</h1>
        <p>Always stay updated in your student portal</p>
      </div>
      <div className="relative gap-0">
        <img className='w-[350px] top-[40px] absolute left-[9%] bg-[#925FE2]' src={Scholarcap} alt="" />
        <img className='w-1/3 h-[243px] left-[40%] bg-transparent  absolute bg-[#925FE2]' src={Student} alt="" />
        <img className='w-[150px] top-[80px] left-[60%] absolute bg-transparent' src={Backpack} alt="" />
      </div>
    </div>
  )
}

export default Bodyhead
