import React from 'react'
import { IoNotifications, IoChatbubbleSharp, IoSearchSharp } from "react-icons/io5";
import Image from 'next/image';
import adminProfile from '../../assets/img/profile_admin.png'

export default function Navbar() {
  return (
    <div className="w-full h-20 bg-fuchsia-600 rounded-md justify-center items-center lg:sticky lg:top-0">
      <div className="flex justify-between items-center h-full">
        <div className="w-96 flex relative justify-center">
          <input type="input" name="search" id="search" placeholder='Type to search' className='ml-5 w-full px-3 py-2.5 rounded-lg bg-fuchsia-600 text-white outline-none placeholder:text-white placeholder:text-sm' />
          <button type="button" className='ml-2'>
            <IoSearchSharp className='w-10 h-auto rounded-full hover:bg-white p-2 hover:text-gray-600 text-white' />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <span>
            <IoNotifications className="ml-2 w-10 h-auto rounded-full hover:bg-white p-2 hover:text-gray-600 text-white" />
          </span>
          <span>
            <IoChatbubbleSharp className="ml-3 md:ml-5 lg:ml-8 w-10 h-auto rounded-full hover:bg-white p-2 hover:text-gray-600 text-white" />
          </span>
          <div className="ml-10 mr-5 flex justify-center items-center">
            <div className="hidden md:block min-w-[70px]">
              <p className='text-sm text-white font-medium'>Jane Doe</p>
              <p className='text-xs text-white font-light'>Event Owner</p>
            </div>
            <Image src={adminProfile} className='max-w-[50px] rounded-full border-2 border-white mx-2' />
          </div>
        </div>
      </div>
    </div >
  )
}