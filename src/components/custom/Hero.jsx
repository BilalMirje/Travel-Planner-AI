import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[60px] text-center mt-16'>Welcome to the world of AI: <span className='text-[#f56551]'>you can find the best Plan for travel <br /></span></h1>
      <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom intineries tailored to your interest and budgets.</p>
      <Button>Get Started</Button>
    </div>
  )
}

export default Hero