import { useEffect, useRef, useState } from "react";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import Header from "../Components/Header/Header";
import tutors from "../Components/tutors/Tutors";
import Work from "../Components/Work/Work";


export default function Home() {
  return (
    
    <div className="bg-gradient-to-b  from-[#000428]  to-[#004e92] ">
     <Header />
      <Banner/>
      <Work />
      <Contact />
    </div> 
   
  )
}