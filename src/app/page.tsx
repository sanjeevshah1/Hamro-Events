import React from 'react'
import { List, Search} from 'lucide-react';
import Navbar from './Components/Navbar';
import FeaturedServices from './Components/FeaturedServices';
const Home = () => {
  return (
  <div className='bg-mainColor min-h-screen font-josefinSlab'>
    <div className='w-screen p-4 mt-10 mb-2'>
      <h2 className='text-[55px] text-center'>
        Welcome to your event hub
      </h2>
    </div>
    {/* search */}
    <div className='flex flex-col gap-4'>
      <p className='text-center text-[28px]'>Search for services</p>
      <div className='relative mx-auto w-[90%]'>
        <input 
          type="text" 
          className='w-full rounded-full h-10 pl-4 pr-12'
          placeholder='Search...'
        />
        <button 
          className='absolute right-3 top-1/2 -translate-y-1/2'
        >
          <Search size={20}/>
        </button>
      </div>
    </div>

    {/* Featured Services */}
    <FeaturedServices/>
  </div>
  )
}

export default Home