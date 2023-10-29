import React from 'react'
import Ellipse18 from "../../assets/Ellipse18.png"
import Ellipse17 from "../../assets/Ellipse17.png"
import Ellipse16 from "../../assets/Ellipse16.png"

const Courses = () => {
  return (
    <div className='flex flex-col p-8'>
      <h1 className='font-bold items-center text-[25px]'>Courses instructors</h1>
      <div className="flex justify-start items-center gap-4 mt-2">
        <img className='w-[130px] h-[130px]' src={Ellipse16} alt="" />
        <img className='w-[130px] h-[130px]'  src={Ellipse17} alt="" />
        <img className='w-[130px] h-[130px]'  src={Ellipse18} alt="" />
      </div>
      <div className="flex items-center gap-[180px] justify-between py-2">
        <h1 className='font-bold items-center text-[20px]'>Daily notice</h1>
        <h1 className='font-bold items-center text-[#925FE2] text-[20px]'>See all</h1>
      </div>
      <div className="bg-white py-10 px-[40px] rounded-2xl ">
        <div className="">
          <h1 className='font-bold text-[22px]'>Prelim payment due</h1>
          <p className='font-thin text-[18px]'>Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h2 className='text-[#925FE2] font-semibold'>See more</h2>
        </div>
        <div className="mt-8  ">
          <h1 className='font-bold text-[22px]'>Exam schedule</h1>
          <p className='font-thin text-[18px]'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <h2 className='text-[#925FE2] font-semibold'>See more</h2>
        </div>
      </div>
    </div>
  )
}

export default Courses
