import Image from 'next/image';
import React, {useState} from 'react';
import Mj from '../../public/Images/Mj.jpg'
import Marquee from 'react-fast-marquee';
import ReactPlayer from 'react-player';

const Tutors = () => {

  return (
    <div>
       <div className='pt-20 font-Neue'>
        <Marquee className=' overflow-hidden' gradient={false} speed={20}>
        <h1 className='text-7xl md:text-10xl text-black leading-none border-t-4  border-analogColor-0 border-b-4 bg-analogColor-0 '>LEARN FROM TUTORS </h1>
        </Marquee>
        <div className='grid grid-cols-2 grid-flow-row m-20'>
          <div  className='pl-2 pr-2 hidden md:block'> 
          <ReactPlayer url='https://www.youtube.com/watch?v=0CDd22s3jec&t=68s'  muted={true}  height={500} width={800}   controls={true} loop={true}  /> 
          </div>
          <div className=' hidden md:block'>
          <ReactPlayer url='https://www.youtube.com/watch?v=1vuXskHlm_g' height={500} width={800}  muted={true} controls={true} loop={true}  /> 
          </div>
      
        </div>
      </div> 
    </div>
  )
};

export default Tutors;


export const Submitwork = () => {
  return(
    <div>
      <Marquee data-scroll data-scroll-direction='horizontal' data-scroll-speed="40" className=' overflow-hidden' gradient={false} speed={20}>
      <div className='flex space-x-5 bg-analogColor-0 text-black  text-center  '>
      <h1 className='text-6xl leading-none font-bold '>SUBMIT YOUR ART</h1>
      <h1 className='text-6xl leading-none font-bold '>SUBMIT YOUR ART</h1>
      <h1 className='text-6xl leading-none font-bold '>SUBMIT YOUR ART</h1>
      <h1 className='text-6xl leading-none font-bold '>SUBMIT YOUR ART</h1>
    </div>
      </Marquee>
    
    </div>
  )
}


