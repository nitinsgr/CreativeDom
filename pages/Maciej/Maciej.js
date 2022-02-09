import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MaciejData } from '../../Components/Data/ProjectData';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export const getStaticProps = async() => {
  return{
    props: {
      maciejProject : MaciejData
    }
  }
}

const Maciej = () => {
  return (
    <div>
      {MaciejData.map(MaciejItem => (
        <div key={MaciejItem.id}>
          <div className='flex justify-between'>
          <h1 className='text-4xl font-Neue p-4 m-4'>Artist Name :  <Link href={'https://sidre.bigcartel.com/'}><span className=' bg-analogColor-0 cursor-pointer transform hover:border-b-2 hover:border-black'>{MaciejItem.span}</span></Link></h1>
         <Link href={'/'}>
         <button className='bg-black text-white p-4 m-4 text-2xl font-Neue'>Visit Another Artist</button>
         </Link>
          </div>
         
          <h1 className='text-4xl p-4 m-4 font-Neue'>{MaciejItem.Heading}</h1>
          <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 1000: 2}}
            >
                <Masonry className='m-10'>
                    <div className='relative w-[800px] h-[800px]'>
                      <Image src={MaciejItem.imageUrl1} layout='fill' objectFit='contain' />
                    </div>
                   
                    <div className='relative w-[800px] h-[800px]'>
                      <Image src={MaciejItem.imageUrl2} layout='fill' objectFit='contain' />
                    </div>
                   
                    <div className='relative w-[800px] h-[800px]'>
                      <Image src={MaciejItem.imageUrl3} layout='fill' objectFit='contain' />
                    </div>
                   
                    <div className='relative w-[800px] h-[800px]'>
                      <Image src={MaciejItem.imageUrl4} layout='fill' objectFit='contain' />
                    </div>
                    <div className='relative w-[800px] h-[800px]'>
                      <Image src={MaciejItem.imageUrl5} layout='fill' objectFit='contain' />
                    </div>
                   
                   
                </Masonry>
            </ResponsiveMasonry>
        </div>
      ))}

    </div>

  )
};

export default Maciej;
