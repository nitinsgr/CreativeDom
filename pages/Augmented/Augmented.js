import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AugmentedData } from '../../Components/Data/ProjectData';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'


export const getStaticProps = async() => {
  return{
    props: {
      augmentedProject : AugmentedData
    }
  }
}



const Augmented = () => {
  return (
    <div>
      {AugmentedData.map(AugmentedList => (
        <div>
          <div key={AugmentedList.id}>
            <div className='flex justify-between'>
            <h1 className='text-4xl font-Neue p-4 m-4'>Artist Name : <Link href={AugmentedList.websiteLink}>
            <span className=' bg-analogColor-0 transform hover:border-b-2 hover:border-black hover:cursor-pointer'>{AugmentedList.span}</span></Link></h1>
           <Link href={'/'}>
           <button className='bg-black text-white p-4 text-2xl m-4 font-Neue'>Visit Another Artist</button>
           </Link>
            </div>
            
            <h1 className=' text-4xl m-4 p-4 font-Neue'>{AugmentedList.Heading}</h1>
          </div>
          <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 1000: 2}}
            >
                <Masonry className='m-10'>
                    <div className='relative w-[800px] h-[800px]'>
                      <Image src={AugmentedList.imageUrl1} layout='fill' objectFit='contain' />
                    </div>
                    <div className='relative w-[800px] h-[800px]'>
                      <Image src={AugmentedList.imageUrl2} layout='fill' objectFit='contain' />
                    </div>
                    <div className='relative w-[800px] h-[800px]'>
                      <Image src={AugmentedList.imageUrl3} layout='fill' objectFit='contain' />
                    </div>
                    <div className='relative w-[800px] h-[800px]'>
                      <Image src={AugmentedList.imageUrl4} layout='fill' objectFit='contain' />
                    </div>
                    <div className='relative w-[800px] h-[800px]'>
                      <Image src={AugmentedList.imageUrl5} layout='fill' objectFit='contain' />
                    </div>
                    <div className='relative w-[800px] h-[800px]'>
                      <Image src={AugmentedList.imageUrl6} layout='fill' objectFit='contain' />
                    </div>
                   
                </Masonry>
            </ResponsiveMasonry>
        </div>

        
      ))}
    </div>
  )
};

export default Augmented;
