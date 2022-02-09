import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import background from '../../public/Images/background.png'
import jeff from '../../public/Images/jeff.jpg'

import ReactPlayer from 'react-player/lazy'


const Banner = () => {
  
  const [isPlaying, setIsPlaying] = useState(true);
 
  return (
    <div>
      <div className=' pt-10  text-white'>
        <div className=' items-center text-center'>
          <h1 className='text-10xl font-Neue font-extrabold leading-none '>THE CREATIVES DOM & MUSEUM</h1>
        </div>

       
        {/* <div className='p-32 grid grid-cols-1 grid-flow-col gap-4 hidden md:block'>
          <div className=' row-start-2 row-span-2 hidden md:block'>
          <ReactPlayer url='videos/yr2.mp4' height={1000} width={1700}  playing={isPlaying}  muted={true} controls={true} loop={true}  /> 
          </div>
       
      </div> */}
    </div>

    </div>
  )
};

export default Banner;
