import React from 'react'
import Books from '@/app/assets/books.png'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
export default function unipage() {
  return (
    <>  
<article className=" md:gap-[56px] flex px-[24px] py-[32px] md:px-[100px] md:py-[47px]">

<div className="md:w-[431px] md:flex hidden w-[100%] md:h-[523.9px]">
<Image src={Books} alt='' layout='responsive'/>
</div>
 <div className="md:w-[666px] w-[100%] flex flex-col gap-[56px] md:h-[556px]">
  <span className="flex flex-col gap-[16px]">  
<h2 className="md:text-[32px] font-semibold md:leading-[38.73px]">University Admission Information</h2>
<p className="text-[18px] md:leading-[21.87px]  text-[#1D2939]">
  Navigating University admissions can be challenging but we are here to make it easier for you.Get access to accurate,
  up-to-date information on university entry requirements, application processes, and essential exams like JAMB.
</p>
</span>

<aside className="flex flex-col gap-[42px]">

<div className="md:flex grid grid-cols-2  gap-[20px]">  
<span className="bg-[#A6A8AC] rounded-none text-[16px] p-[10px] text-white" >
         <Link href='/' className='flex items-center justify-center text-[24px] bg-[#3E414A] px-[4px]'>UNILAG </Link>
          </span>




          <span className="bg-[#A6A8AC] rounded-none text-[16px] p-[10px] text-white" >
         <Link href='/' className='flex items-center justify-center text-[24px] bg-[#3E414A] px-[4px]'>LASU </Link>
          </span>




          <span className="bg-[#A6A8AC] rounded-none text-[16px] p-[10px]  text-white" >
         <Link href='/' className='flex items-center justify-center text-[20px] px-[4px]  bg-[#3E414A]'>UNILORIN </Link>
          </span>

          
          

<span className="bg-[#A6A8AC] rounded-none text-[16px]  p-[10px] text-white" >
         <Link href='/' className='flex items-center justify-center text-[24px] bg-[#3E414A] px-[4px]'>ABU </Link>
          </span>

          

<span className="bg-[#A6A8AC] rounded-none text-[16px] p-[10px]  text-white" >
         <Link href='/' className='flex items-center justify-center text-[24px] bg-[#3E414A] px-[4px]'>UI</Link>
          </span>
          </div>
          
          <div className="md:flex grid grid-cols-2  gap-[20px]"> 
<span className="bg-[#FFB38A] rounded-none text-[16px] p-[10px] text-white" > 
          
         <Link href='/' className='flex items-center justify-center text-[24px] bg-[#FF5900] px-[4px]'>FUTA</Link>
         </span>

          
          
         <span className="bg-[#FFB38A] rounded-none text-[16px] p-[10px] text-white" > 
         <Link href='/' className='flex items-center justify-center text-[24px] bg-[#FF5900] px-[4px]'>BUK</Link>
          </span>

          
          <span className="bg-[#FFB38A] rounded-none text-[16px] p-[10px] text-white" > 
         <Link href='/' className='flex items-center justify-center text-[24px] bg-[#FF5900] px-[4px]'>EKSU</Link>
          </span>

          <span className="bg-[#FFB38A] rounded-none text-[16px] p-[10px] text-white" > 
         <Link href='/' className='flex items-center justify-center text-[24px] bg-[#FF5900] px-[4px]'>TASUED</Link>
          </span>
          <span className="bg-[#FFB38A] rounded-none text-[16px] p-[10px] text-white" > 
         <Link href='/' className='flex items-center justify-center text-[24px] bg-[#FF5900] px-[4px]'>LASUED</Link>
          </span>
</div>
          <div className="md:flex grid grid-cols-2  gap-[20px]"> 


          <span className="bg-[#A6A8AC] rounded-none text-[16px] p-[10px]  text-white" >
         <Link href='/' className='flex items-center justify-center text-[24px] bg-[#3E414A] px-[4px]'>ABUAD</Link>
          </span>



<span className="bg-[#A6A8AC] rounded-none text-[16px] p-[10px] text-white" >
         <Link href='/' className='flex items-center justify-center text-[24px] bg-[#3E414A] px-[4px]'>KP</Link>
          </span>

          <span className="bg-[#A6A8AC] rounded-none text-[16px] p-[10px] text-white" >
         <Link href='/' className='flex items-center justify-center text-[24px] bg-[#3E414A] px-[4px]'>NOUN</Link>
          </span>

          
<span className="bg-[#A6A8AC] rounded-none text-[16px] p-[10px]  text-white" >
         <Link href='/' className='flex items-center justify-center text-[24px] bg-[#3E414A] px-[4px]'>UDUS</Link>
          </span>

          
<span className="bg-[#A6A8AC] rounded-none text-[16px] p-[10px]  text-white" >
         <Link href='/' className='flex items-center justify-center text-[24px] bg-[#3E414A] px-[4px]'>EDSU</Link>
          </span>
          </div>
</aside>
<Button variant='ghost' className='w-[301px] h-[48px] border-[1px] border-black hover:bg-black hover:text-white
 font-semibold text-[18px]' >Check out all school info
</Button>

 </div>


</article>
</>
  )
}
