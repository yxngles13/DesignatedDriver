'use client'; // only if using useState, useEffect, etc.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { faArrowLeft } from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";

export default function Location() {
  return (
    <div >
      <div>
        <Link href="/"><FontAwesomeIcon icon={faArrowLeft} className="text-xl text-gray-700 hover:text-blue-500 transition" /></Link>
      </div>
      <div className='px-4 space-y-3'>
        <div className='flex items-center space-x-3'>
          <div className="w-4 h-4 rounded-full bg-gray-400 "/>
          <input type="text" placeholder="Enter location" className="flex-1 p-2 rounded-md bg-gray-100 text-gray-700 placeholder-gray-400 outline-none"/>
          <button className="text-xl font-bold">+</button>
        </div>
      </div>
      <div className='px-4 space-y-3'>
        <div className='flex items-center space-x-3'>
          <div className="w-4 h-4 bg-black">
            <input type="text" placeholder="Where to?" className="flex-1 p-2 rounded-md bg-gray-100 text-gray-700 placeholder-gray-400 outline-none"/>        
          </div>
        </div>
      </div>
      <div>
        <label>Saved Places</label>
      </div>
    </div>
  );
}
