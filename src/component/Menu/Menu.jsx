import React from 'react'
import Cap from "../../assets/Cap.png"

const Menu = () => {
  return (
    <div className='w-[223px] h-[960px] bg-[#925FE2] m-6 text-center justify-center rounded-2xl'>
        <div className="w-[128px] h-[128px] m-auto py-4 bg-[#925FE2]">
            <img className=' mt-7 rounded-2xl bg-[#7b40da] p-4 ' src={Cap} alt="" />
            side bar
        </div>
    </div>
  )
}

export default Menu
