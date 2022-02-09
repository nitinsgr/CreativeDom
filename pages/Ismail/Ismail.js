import React from 'react';
import { IsmailData } from '../../Components/Data/ProjectData';
import Link from 'next/link';
import Image from 'next/image';
import Masonry,{ ResponsiveMasonry } from 'react-responsive-masonry';

export const getStaticProps = async() => {
  return {
    props : {
      IsmailProject : IsmailData
    }
  }
}


const Ismail = () => {
  return (
    <div>
      {IsmailData.map(IsmailItem => (
        <div>
          <div className='flex justify-between'>
          <h1 className='text-4xl font-Neue p-4 m-4'>Artist Name : <Link href={IsmailItem.websiteLink}>
            <span className=' bg-analogColor-0 transform hover:border-b-2 hover:border-black hover:cursor-pointer'>{IsmailItem.span}</span></Link></h1>
           <Link href={'/'}>
           <button className='bg-black text-white p-4 text-2xl m-4 font-Neue'>Visit Another Artist</button>
           </Link>
          </div>
            <h1 className='text-4xl p-4 m-4'>{IsmailItem.Heading}</h1>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 1000: 2}}
            >
                <Masonry className='m-10'>
                    <div className='relative w-[800px] h-[800px]'>
                      <Image src={IsmailItem.imageUrl1} layout='fill' objectFit='contain' />
                    </div>
                    <div className='relative w-[800px] h-[800px]'>
                      <Image src={IsmailItem.imageUrl2} layout='fill' objectFit='contain' />
                    </div>
                    <div className='relative w-[800px] h-[800px]'>
                      <Image src={IsmailItem.imageUrl3} layout='fill' objectFit='contain' />
                    </div>
                    <div className='relative w-[800px] h-[800px]'>
                      <Image src={IsmailItem.imageUrl4} layout='fill' objectFit='contain' />
                    </div>
                   
                </Masonry>
            </ResponsiveMasonry>
        </div>
      ))}
    </div>
  )
};

export default Ismail;
