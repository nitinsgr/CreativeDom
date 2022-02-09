import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import background from '../../public/Images/background.png'
import jeff from '../../public/Images/jeff.jpg'

import ReactPlayer from 'react-player/lazy'


const Banner = () => {
  
  const [isPlaying, setIsPlaying] = useState(true);
 
  return (
    <div className=''>
      <div className=' pt-10  text-white'>
        <div className='text-left'>
          <h1 className='text-8xl md:text-10xl  font-Neue text-center leading-none '>THE CREATIVES DOM & MUSEUM</h1>
        </div>

    </div>

    </div>
  )
};

export default Banner;
