import React from 'react'
import Image from 'next/image'
import Link  from 'next/link' 
import Light from '@/app/assets/_ui-award-03.png'
import Homenav from '@/app/navbar'
import { Button } from "@/components/ui/button"
import Frame from '@/app/assets/Frame 15.png'
import Frame1 from '@/app/assets/Frame 24.png'
import Science from '@/app/assets/Metaverse 3D Icon Pack - 20 Free Download Science & Technology 3D Icons _ IconScout 1.png'
import PremiumV from '@/app/assets/Premium Vector _ 3d Books icon for web design isolated, Education and online class concept_ Eps 10 Vector_ 2.png'
import  Calculator  from '@/app/assets/3d open calculator stock illustration_ Illustration of isolated - 31101625 1.png'
import Images from '@/app/assets/Download free image of Globe, environment icon, 3D rendering illustration by Nunny about sticker, planet, design, 3d, and earth 6740065 1.png'
import Cyclopropane from '@/app/assets/Cyclopropane 1.png'
import PSD from '@/app/assets/Premium PSD _ 3d rendering mentor icon, mentor teaching in front of two student_ 1 (1).png'
import Studio from '@/app/assets/studio.png'
import Tech from '@/app/assets/3D illustrations - Maria Garaeva 1.png'
import KS1 from '@/app/assets/Frame 49 (3).png'
import KS3 from '@/app/assets/Frame 50 (3).png'
import College from '@/app/assets/Frame 51 (1).png'
import Tutor from '@/app/assets/Frame 52.png'
import Unipage from '@/app/unipage'
import Home from '@/app/home'
import Footer from '@/app/footer'




export default function page() {
  return (
    <main className="">
  
      
      <Homenav />
    
    <section className="md:px-[100px] px-[24px] py-[30px]">
      <article className=" rounded-2xl md:bg-[#FFEEE6]  flex flex-col justify-between  p-[47px] ">   
     <div className=" flex md:flex-row flex-col-reverse 
      items-center md:justify-between gap-[30px] ">
   <aside className="md:w-[55%] w-[100%] flex md:items-start items-center
    md:justify-center justify-center flex-col gap-[22px]">

    <span className="md:flex items-center p-1 rounded-md hidden   border-[1px] border-[#FF5900] gap-2.5">
      <Image src={Light} height={20} width={20} alt=''/>  <span className="text-[#FF5900]"> 
         Citadel-i-project  </span>
    </span>

  <h2 className="text-[48px] leading-[50px] md:max-w-[603px] font-semibold">Your Learning Companion For Academic
     Success!</h2>
  <p className="text-[18px] max-w-[547px] flex-col flex gap-[12px]">Access high-quality study materials, video lessons, and expert guidance
     to boost your academic success. Prepare fo exams, improve your skills, and take control of
      your learning-anytime, anywhere. <span className="text-[18px]">For Students, Teachers , and Parents</span>
  </p>
  
<span className="flex gap-2">
  
  <Button className="bg-[#FF5900] hover:bg-[#344054] hover:text-white text-[24px] h-[50px] text-white" variant="outline">
           <Link href='/'> Start Learning </Link>
            </Button>
            
          <Button className="border-[1px] text-[24px]
          hover:text-white hover:bg-black bg-transparent h-[50px] text-black border-black " variant='default'>
          <Link href='/'>  Book a Tutor  </Link> 
            </Button>
  </span>

   </aside>
<aside className="md:w-[40%] w-[100%]  md:max-w-[498px]">
  <Image src={Frame} alt='' layout='responsive'/>
</aside>



     </div>





     <div className=" flex md:flex-row py-[30px] flex-col-reverse gap-7
      items-center justify-between ">
   <aside className="md:w-[55%] w-[100%] flex 
      gap-[26px]">
   
<span className="">
  <p className="text-[24px] font-bold text-[#344054]">
    25+
  </p>
  <p className="text-[14px] text-[#344054]">Years of Experience</p>
</span>


<span className="">
  <p className="text-[24px] font-bold text-[#344054]">
    50+
  </p>
  <p className="text-[14px] text-[#344054]">Qualified Tutors</p>
</span>

   </aside>
<aside className="md:w-[40%] flex items-center gap-2 w-[100%] md:max-w-[498px]">
  <Image src={Frame1} alt='' width={100} height={10} />
  <p className="text-[14px] text-[#344054]">50+ Students registered</p>
</aside>



     </div>
     </article>

<div className="md:p-[47px] md:flex justify-between grid grid-cols-2 gap-[24px]">


<span className="flex flex-col items-center justify-center">
  <Image src={Science} alt='' width={70} height={70} />
  <p className="">Sciences</p>
</span>

<span className="flex flex-col items-center justify-center">
  <Image src={PremiumV} alt='' width={70} height={70} />
  <p className="">Arts and Humanities</p>
</span>

<span className="flex flex-col items-center justify-center">
  <Image src={Calculator} alt='' width={70} height={70} />
  <p className="">Business</p>
</span>


<span className="flex flex-col items-center justify-center">
  <Image src={Images} alt='' width={70} height={70} />
  <p className="">History</p>
</span>


<span className="flex flex-col items-center justify-center">
  <Image src={Cyclopropane} alt='' width={70} height={70} />
  <p className="">STEM</p>
</span>


<span className="flex flex-col items-center justify-center">
  <Image src={PSD} alt='' width={70} height={70} />
  <p className="">Coaching</p>
</span>


<span className="flex flex-col items-center justify-center">
  <Image src={Studio} alt='' width={70} height={70} />
  <p className="">Counselling</p>
</span>


<span className="flex flex-col items-center justify-center">
  <Image src={Tech} alt='' width={70} height={70} />
  <p className="">Tech</p>
</span>
</div>

<div className="flex md:flex-row flex-col gap-[40px]  justify-between py-[50px] items-center">

<figure className="h-[348px] w-[280px]">
<Image src={KS1} alt='' layout='responsive'/>
</figure>


<figure className="h-[348px] w-[280px]">
<Image src={KS3} alt='' layout='responsive'/>
</figure>


<figure className="h-[348px] w-[280px]">
<Image src={College} alt='' layout='responsive'/>
</figure>



<figure className="h-[348px] w-[280px]">
<Image src={Tutor} alt='' layout='responsive'/>
</figure>

</div>
    </section>
    <Unipage />
    <Home/>
    <Footer/>
      </main>
  )
}
