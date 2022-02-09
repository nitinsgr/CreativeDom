import Link from 'next/link';
import Image from 'next/image'
import React, { useState } from 'react';
import 'custom-cursor-react/dist/index.css';
import { Projects } from '../Data/ProjectData';
import Tutors from '../tutors/Tutors';
import Marquee from "react-fast-marquee";

export const getStaticProps = async () => {
  return{
    props: {
      projectList : Projects,
    }
  }
}


const Work = ({ projectList}) => {
  return (
    <div >
      <div className='pt-20 pb-20'>
        <Marquee className=' overflow-hidden' gradient={false} speed={100} pauseOnHover={true}>
        <h1 className='text-3xl md:text-10xl text-black leading-none font-Neue border-t-4 border-analogColor-0 bg-analogColor-0 border-b-4'>MEET THE ARTISTS <span>MEET THE ARTIST</span></h1>
        </Marquee>
       
      </div>

      <div id='work' className='  grid grid-cols-1 md:grid-cols-5 overflow-hidden font-Neue gap-2 pl-10 pr-10'>
        {Projects.map(projectItem =>(
                <div key={projectItem.id}>
                  <div className=' relative'>
                  <Image src={projectItem.headerImg} objectFit="cover" width={500} height={500}  />
                  </div>
                  <div className='flex justify-between text-white'>
                  <h1>{projectItem.serial}</h1>
                  <h2>By {projectItem.name}</h2>
                  </div>
                
                  <Link href={projectItem.projectLink}>
                  <button className=' bg-[#004e92] text-white p-4 mt-4'>View Artwork</button>
                  </Link>
                </div>
        ))}
      </div>
     
      <Tutors/>
      
    </div>
  )
};

export default Work;


export const HoverText = () => {
  return(
    <div className=''>
      sdsdsd
    </div>
  )
}
