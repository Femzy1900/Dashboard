import React from 'react'
import Header from '../Header/Header'
import Bodyhead from './Bodyhead'
import Finance from './FInance'
import Courses from './Courses'

const Body = () => {
  return (
    <div className='flex flex-col'>
        <Header />
        <Bodyhead />
        <div className="flex m-6">
            <div className="">
                <Finance />
            </div>
            <div className="basis-2/6">
                <Courses />
            </div>
        </div>
    </div>
  )
}

export default Body
