import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { SiCodestream } from "react-icons/si";
import { FaSearchengin } from "react-icons/fa";
import { FaMicrophoneLines } from "react-icons/fa6";
import { RiVideoAddFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className='flex justify-between px-14 h-14 items-center bg-[#2e2d2d] opacity-95 sticky'>
      <div className='flex gap-8 items-center text-2xl text-white'>
        <GiHamburgerMenu />
        <div className='flex gap-2 items-center'>
          <SiCodestream className='text-3xl text-purple-800' />
          <span className='text-2xl font-medium'>Streamertube</span>
        </div>
      </div>
      <form className='flex gap-5 items-center'>
        <div className='flex bg-zinc-900 items-center h-10 px-4 pr-2 rounded-3xl'>
          <input type='text' placeholder='Search' className='w-96 bg-zinc-900 focus:outline-none border-none' />
          <button className='h-10 w-17 flex items-center justify-center bg-zinc-900 rounded-r-3xl'>
            <FaSearchengin className='text-xl text-white' />
          </button>
        </div>
        <div className='text-xl p-3 bg-zinc-900 rounded-full'>
          <FaMicrophoneLines className='text-white' />
        </div>
      </form>
      <div className='flex gap-8 items-center text-xl text-white'>
        <RiVideoAddFill />
        <div className='relative'>
          <FaBell className='text-white' />
          <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>9+</span>
        </div>
        <img
          src="https://images.rawpixel.com/image_400/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yOV9kaWdpdGFsX2lsbHVzdHJhdGlvbl9vZl9hX2dpYW50X2RyYWdvbl9pbl9hX182MjEwN2FkMS0wYzM5LTQ2NWItOTc1Ni0yODJmNzkzNDc0ZTFfMS5qcGc.jpg"
          alt="profile logo"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
}