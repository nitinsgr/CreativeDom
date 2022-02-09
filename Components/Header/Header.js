import Link from 'next/link';
import {Link as LinkS} from 'react-scroll'
import React from 'react';


const Header = () => {

  return (
    <div  className=''>
      <div className='flex flex-col md:flex-row p-4 justify-between font-Neue fixed_target  bg-gradient-to-bl to-white  text-white w-full'>
        <div className='flex flex-col'>
        <h3 className='text-5xl font-extrabold '>THE CREATIVES DOM & MUSEUM</h3>
        <p>Meet the best artists around the globe.</p>
        </div>
        <Link  href={'About/About'}>
        <h2 className='text-4xl'>About us</h2>
        </Link>  
      </div>
    </div>
  )
};

export default Header;
