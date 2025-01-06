import React from 'react'
import {List} from 'lucide-react'
const Navbar = () => {
  return (
    <nav>
        <div className='p-4 flex justify-between items-center'>
      <h1 className='text-[26px]'>Hamro Events</h1>
      <button><List className='w-10 h-10'/></button>
    </div>
    </nav>
  )
}

export default Navbar