'use client'; 
import Link from 'next/link'
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Image from 'next/image'

import 'mapbox-gl/dist/mapbox-gl.css';
import './globals.css'; 

mapboxgl.accessToken = 'pk.eyJ1IjoieW9uZzEzMSIsImEiOiJjbWJvODRoZTUxeDAyMnBvZmlrNGRoMm9yIn0.RL3CSxplgyEto56ruBuyGA';

export default function Home() {
  useEffect(() => {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    const map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11', //can change the style of this afterwards
      center: [-122.4194, 37.7749],
      zoom: 10,
    });

    return () => map.remove();
  }, []);

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col h-screen">
        <div id="map" className=" flex-1" /> 
        <div className="flex-1">
          <header className="flex">
            <div className=''>Profile</div>
            <div className=''>Name</div>
            <img></img>
          </header>
          <div className="flex flex-row md:flex-row justify-center gap-y-6 p-6">            
              <Link href="/driver">
                <div className="bg-gray-200 w-24 h-24 rounded text-black flex items-center justify-center mx-2 ">
                  Driver
                </div>
              </Link>
              <Link href="/ride">
                <div className="bg-gray-200  w-24 h-24 rounded text-black flex items-center justify-center mx-2 ">
                  Ride
                </div>
              </Link>
              <Link href="/reserve">
                <div className="bg-gray-200  w-24 h-24 rounded text-black flex items-center justify-center mx-2">
                  Reserve
                </div>
              </Link>
          </div>
          <Link href='/location'>
            <div className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">Where to?</div>
          </Link>
          </div>
        </div>
      </div>
  );
}