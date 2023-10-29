import React from 'react'
import Ellipse19 from "../../assets/Ellipse19.png"
import Ellipse18 from "../../assets/Ellipse18.png"
import Ellipse16 from "../../assets/Ellipse16.png"

const Courses = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-[25px]'>Courses instructors</h1>
      <div className="flex">
        <img src={Ellipse16} alt="" />
        <img src={Ellipse18} alt="" />
        <img src={Ellipse19} alt="" />
      </div>
    </div>
  )
}

export default Courses
