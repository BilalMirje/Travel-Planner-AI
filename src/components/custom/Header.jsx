import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5 w-full gap-[1380px]'>
    <img src="/logo.svg" alt="Logo"/>
    <div>
        <Button>Sign In</Button>
    </div>
  </div>


  )
}

export default Header