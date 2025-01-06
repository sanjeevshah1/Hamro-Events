'use client';
import { List, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    // Small delay to allow render before transition
    setTimeout(() => {
      setIsModalVisible(true);
    }, 10);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    // Wait for transition to complete before removing from DOM
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

  const NavLinks = () => (
    <>
      <li>
        <button
          className="text-gray-900 hover:text-white transform hover:scale-110 transition-transform duration-300"
        >
          Home
        </button>
      </li>
      <li>
        <button
          className="text-gray-900 hover:text-white transform hover:scale-110 transition-transform duration-300"
        >
          Dashboard
        </button>
      </li>
      <li>
        <button
          className="text-gray-900 hover:text-white transform hover:scale-110 transition-transform duration-300"
        >
          Services
        </button>
      </li>
    </>
  );
  

  return (
    <>
      <nav className="flex bg-mainColor flex-col lg:flex-row items-center justify-between py-5 px-8 md:pt-8 font-josefinSlab">
        {/* Logo and Menu Icon */}
        <div className="flex justify-between items-center w-full lg:w-auto mr-auto">
          <h1 className="text-white italic text-[26px]">Hamro Events</h1>
          <List
            className={`${isModalOpen ? "hidden" : "visible"} h-10 w-10 text-white cursor-pointer lg:hidden`}
            onClick={openModal}
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex flex-col md:flex-row items-center gap-8 my-8 sm:text-base md:my-0 md:text-lg lg:text-xl">
          <NavLinks />
        </ul>
      </nav>

      {/* Mobile Modal Navigation */}
      {isModalOpen && (
        <div 
          className={`
            fixed inset-0 z-50 bg-black/80  
            transition-all duration-500 ease-in-out
            ${isModalVisible ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={closeModal}
        >
          <div 
            className={` border-l-2 border-white/10
              flex flex-col items-start justify-center h-full bg-black/20
              w-[75%] ml-auto transform transition-transform duration-500 ease-in-out
              ${isModalVisible ? 'translate-x-0' : 'translate-x-full'}
              
            `}
            onClick={(event) => event.stopPropagation()}
          >
            <X 
              className="absolute top-5 right-7 h-10 w-10 text-white cursor-pointer"
              onClick={closeModal}
            />
            <ul className="flex flex-col ml-12 gap-14 text-2xl ">
              <NavLinks />
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;