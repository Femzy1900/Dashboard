import React from 'react'
import Header from '../Header/Header'
import Bodyhead from './Bodyhead'

const Body = () => {
  return (
    <div className='flex flex-col'>
        <Header />
        <Bodyhead />
        <div className="flex"></div>
    </div>
  )
}

export default Body
