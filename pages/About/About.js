import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Contact from '../../Components/Contact/Contact';
import { AboutUs } from '../../Components/Data/ProjectData';

export const getStaticProps = async() => {
  return{
    props: {
      aboutCreatives : AboutUs
    }
  }
}

const About = () => {
  return(
    <div className='bg-gradient-to-b  from-[#000428]  to-[#004e92] text-white max-w-10xl mx-atuo'>
      {AboutUs.map(AboutContent => (
        <>
        <div className='flex text-right text-8xl p-4 leading-none font-Neue font-normal pt-20 '>
            <h2 className=' text-right '>{AboutContent.Heading}</h2>
        </div>

        <div className='grid grid-cols-1 mt-52 mb-52'>
          <h1 className='text-8xl font-Neue text-left w-3/4'>Hello there! We're Group of individuals in fond of amazing art and visual representations.</h1>
        </div>
        <div className=' mt-20 text-3xl mb-52'>
          <Marquee className=' overflow-hidden pt-20 pb-20 border-t-4 border-white text-white ' direction='right' gradient={false}>
            <h1 className='text-9xl font-bold '>BRANDING</h1>
          </Marquee>
          <Marquee className='overflow-hidden pt-20 pb-20  font-light border-t-4 ' gradient={false}>
            <h1 className='text-9xl font-bold'>CONCEPT ART</h1>
          </Marquee>
          <Marquee className='overflow-hidden pt-20 pb-20  font-light border-t-4 border-white ' gradient={false} direction="right">
            <h1 className='text-9xl font-bold'>ILLUSTRATIONS</h1>
          </Marquee>
          <Marquee className='overflow-hidden pt-20 pb-20  font-light border-t-4 border-white border-b-4' gradient={false} direction="left">
            <h1 className='text-9xl font-bold'>DIGITAL ART</h1>
          </Marquee>
        </div>

        </> 
       
      ))}
      <Contact/>
    </div>

    
  )
};

export default About;
