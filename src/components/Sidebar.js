import React from 'react'
import { IoHome } from "react-icons/io5";
import { BiSolidVideos } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs";
import { LuFolderClock } from "react-icons/lu";
import { FaPersonDotsFromLine } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import { MdBugReport } from "react-icons/md";

export default function Sidebar() {
    const mainLinks = [
        {
            icon: <IoHome className='text-2xl'/>,
            name: 'Home'
        },
        {
            icon: <BiSolidVideos className='text-2xl' />,
            name: 'Mini'
        },
        {
            icon: <FaPersonDotsFromLine className='text-2xl' />,
            name: 'Subscriptions'
        }
    ];

    const otherLinks = [
        {
            icon: <BsClockHistory className='text-2xl' />,
            name: 'History'
        },
        {
            icon: <LuFolderClock className='text-2xl' />,
            name: 'Watch Later'
        },
        {
            icon: <IoMdSettings className='text-2xl'/>,
            name: 'Settings'
        },
        {
            icon: <FaHandsHelping className='text-2xl'/>,
            name: 'Help'
        },
        {
            icon: <MdBugReport className='text-2xl'/>,
            name: 'Report'
        }
    ];

    return (
        <div className='w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen'>
            <ul className='flex flex-col border-b-2 border-gray-700 '>
                {mainLinks.map(({ icon, name }) => (
                    <li key={name} className={`pl-6 text-white py-3 hover:-zinc-600 ${name === "Home" ? "bg-purple-900" : ""} rounded-xl`}>
                        <a href='#' className='flex items-center gap-5'>
                            {icon} 
                            <span className='text-sm tracking-wider'>{name}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className='flex flex-col border-b-1 border-gray-800'>
                {otherLinks.map(({ icon, name }) => (
                    <li key={name} className={`pl-6 text-white py-3 hover:-zinc-600 ${name === "Home" ? "bg-slate-600" : ""}`}>
                        <a href='#' className='flex items-center gap-5'>
                            {icon} 
                            <span className='text-sm tracking-wider'>{name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}