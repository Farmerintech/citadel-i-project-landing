import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ChefHatIcon } from 'lucide-react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function page() {
  return (
    <main className="md:px-[100px] py-3 px-[16px]">
<div className="flex items-center justify-between">

    <span className="">  
<p className="text-[#FF5900] text-[16px]">Biology Past question</p>
<p className="md:text-[32px] text-[12px] font-bold">Biology Past Question</p>
</span>
<Button className='bg-[#FF5900] text-[12px] md:text-white md:text-[18px]' variant='outline'><Link href='' className='flex gap-2 items-center'>
Study Saved questions
 <ChefHatIcon/></Link>  </Button>
</div>
<section className=" flex gap-[20px] md:flex-row flex-col pt-[50px] ">
<aside className="md:w-[836px] bg-[#FFFFFF] flex flex-col gap-[48px] md:px-[32px]  pb-[40px]">




<article className="flex flex-col gap-[24px]">

<div className="flex flex-col gap-2.5">
    <span className="flex items-center gap-2">
        <p className="h-[24px] w-[24px] bg-[#FFCCB0] text-[10px]
        border border-[#FF5900] text-[#FF5900] rounded-full flex items-center justify-center">1</p>
        <p className="font-semibold text-[18px]">The true stomach of the ruminants is called  </p>
    </span>
    <span className="">
     <p className="text-[18px]"> A) Omasun</p>
     
     <p className="text-[18px]"> B) Abomasun</p>
     
     <p className="text-[18px]"> C) Rumen</p>
     
     <p className="text-[18px]"> D) Reticulum</p>
    </span>
    <span className="flex flex-col w-[105px]">
<Button variant='outline' className='bg-[#0DAF64] text-white'>
       Answer
    </Button>
    <p className="text-[18px]"> D) Reticulum</p>
    </span>
    
    <span className="flex flex-col">
<Button variant='outline' className=' border border-[#0DAF64] w-[125px] text-black'>
       Explanation
    </Button>
    <p className="text-[14px]">Ruminant animals have four stomach that is found in their abdomen</p>
    </span>

<span className="flex justify-between">
<Button variant='outline' className=' border border-[#FF5900]'><Link href=''>Go Back</Link>    </Button>
  
  <span className="flex gap-2">
    
<Button variant='outline' className=' border border-[#FF5900]'><Link href=''>Previous</Link>    </Button>
<Button variant='outline' className=' border border-[#FF5900]'><Link href=''>Next</Link>    </Button>
  </span>



</span>


</div>



<div className="">
    <span className="flex flex-col gap-2">   
    <Label className='text-[18px]'>Post Your contributions</Label>
    <Textarea className='md:w-[772px] border border-[#919191] h-[123px]' placeholder='Type here...'/> </span>
    <Button className='bg-[#FF5900] mt-4'>Post comment</Button>
    <p className="pt-5 text-[18px]">No Contibutions yet</p>
  </div>

</article>

</aside>


<aside className="w-[370px] flex flex-col gap-[40px]">

    <div className="md:flex flex-col gap-2.5 hidden">
<h2 className="w-[338px] h-[54px] text-white p-[16px] text-[18px] rounded-[4px] bg-[#3E414A]">Subjects</h2>
 <span className="flex flex-col gap-[20px]">
<p className="text-[16px] text-[#OFOFOF]">Mathematics</p>
<p className="text-[16px] text-[#OFOFOF]">Mathematics</p>
<p className="text-[16px] text-[#OFOFOF]">Mathematics</p>
<p className="text-[16px] text-[#OFOFOF]">Mathematics</p>
<p className="text-[16px] text-[#OFOFOF]">Mathematics</p>
<p className="text-[16px] text-[#OFOFOF]">Mathematics</p>
<p className="text-[16px] text-[#OFOFOF]">Mathematics</p>
<p className="text-[16px] text-[#OFOFOF]">Mathematics</p>
<p className="text-[16px] text-[#OFOFOF]">Mathematics</p>
<p className="text-[16px] text-[#OFOFOF]">Mathematics</p>
 </span>

    </div>



    
<div className="bg-[#FFCCB0] p-[16px] flex flex-col gap-[24px]">
  
  <p className="text-[20px]">Start Free CBT Exam Simulation on WAEC and JAMB</p>
  <Button variant='outline' className='w-[50%] text-[#FF5900] border border-[#FF5900] bg-transparent'><Link href=''>Start Now </Link>   </Button>
  </div>
  
  
  <div className="bg-[#FBE3B0] p-[16px] flex flex-col gap-[24px] mb-[50px]">
    
  <p className="text-[18px]">Watch Video Lessons on various subjects and Topics to be better prepared for your Exams </p>
  <Button variant='outline' className='w-[50%] text-[#FF5900] border border-[#FF5900] bg-transparent'>
    <Link href=''>Watch Now </Link>   </Button>
  </div>
</aside>





</section>





    </main>
  )
}
