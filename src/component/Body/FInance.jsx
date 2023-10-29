import React from 'react'
import Coins from "../../assets/Coins.png"
import Image1 from "../../assets/14.png"
import Image2 from "../../assets/15.png"
import Image3 from "../../assets/Frame17.png"
import Image4 from "../../assets/Frame20.png"

const Finance = () => {
  return (
    <div className='flex flex-col'>
        <h1 className='font-bold text-[32px]'>Finance</h1>
      <div className="flex gap-8">
        <div className="flex flex-col bg-white border px-[50px] py-[25px] rounded-2xl justify-center items-center">
            <div className="px-8 py-8 flex flex-col text-center  items-center bg-white">
                <img className='w-[100px] h-[80px] bg-white my-3' src={Coins} alt="" />
                <h1 className='bg-white font-bold text-[22px]'>$ 10,000</h1>
                <p className='bg-white font-thin text-[17px]'>Total Payable</p>
            </div>
        </div>
        <div className="flex flex-col bg-white border px-[60px] py-[25px] rounded-2xl justify-center items-center">
            <div className="px-8 py-8 flex flex-col text-center  items-center bg-white">
                <img className='w-[100px] h-[80px] bg-white my-3' src={Image1} alt="" />
                <h1 className='bg-white font-bold text-[22px]'>$ 5,000</h1>
                <p className='bg-white font-thin text-[17px]'>Total Paid</p>
            </div>
        </div>
        <div className="flex flex-col bg-white border px-[60px] py-[25px] rounded-2xl justify-center items-center">
            <div className="px-8 py-8 flex flex-col text-center  items-center bg-white">
                <img className='w-[100px] h-[80px] bg-white my-3' src={Image2} alt="" />
                <h1 className='bg-white font-bold text-[22px]'>$ 300</h1>
                <p className='bg-white font-thin text-[17px]'>Others</p>
            </div>
        </div>
      </div>
      <div className="">
        <div className="flex text-center justify-between m-4">
            <div className="flex flex-col">
                <div className="">
                    <h1 className='font-bold text-[22px]'>Enrolled Courses</h1>
                    <h1 className='text-[#925FE2] text-[20px] font-semibold'>See all</h1>
                </div>
                <div className=" flex  justify-between">
                    <img className='' src={Image3} alt="" />
                    <img className='' src={Image4} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Finance
