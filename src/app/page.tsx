import React from 'react'
import { Search} from 'lucide-react';
import FeaturedServices from '../Components/FeaturedServices';
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
      <div className="relative flex justify-center mx-auto w-[90%]">
        <input
          type="text"
          className="w-full md:w-[40%] rounded-full h-10 pl-4 pr-12 focus:outline-none focus:ring-4 focus:ring-secondColor"
          placeholder="Search..."
        />
        <button
          className="absolute right-4 md:right-[31.5%] top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        >
          <Search size={20} />
        </button>
    </div>
    </div>
    {/* Featured Services */}
    <FeaturedServices/>
  </div>
  )
}

export default Home