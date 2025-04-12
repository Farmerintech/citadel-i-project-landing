import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Maths from '@/app/assets/maths.png'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
export default function page() {
  const Schools = [
    {
      name:'UNILAG',
      bgColor1:'bg-[#A6A8AC]',
      bgColor2:'bg-[#3E414A] '
    },
    {
      name:'LASU',
      bgColor1:'bg-[#A6A8AC]',
      bgColor2:'bg-[#3E414A] '
    },
    {
      name:'UNILORIN',
      bgColor1:'bg-[#A6A8AC]',
      bgColor2:'bg-[#3E414A] '
    },
    {
      name:'ABU',
      bgColor1:'bg-[#A6A8AC]',
      bgColor2:'bg-[#3E414A] '
    },
    {
      name:'UI',
      bgColor1:'bg-[#A6A8AC]',
      bgColor2:'bg-[#3E414A] '
    },
    {
      name:'FUTA',
      bgColor1:'bg-[#FFB38A]',
      bgColor2:'bg-[#FF5900]'
    },
    {
      name:'BUK ',
      bgColor1:'bg-[#FFB38A]',
      bgColor2:'bg-[#FF5900]'
    },
    {
      name:'EKSU ',
      bgColor1:'bg-[#FFB38A]',
      bgColor2:'bg-[#FF5900]'
    },
    {
      name:'TASUED',
      bgColor1:'bg-[#FFB38A]',
      bgColor2:'bg-[#FF5900]'
    },
    {
      name:'LASUED',
      bgColor1:'bg-[#FFB38A]',
      bgColor2:'bg-[#FF5900]'
    },
    {
      name:'ABUAD ',
      bgColor1:'bg-[#A6A8AC] ',
      bgColor2:'bg-[#3E414A] '
    },
    {
      name:'KP',
      bgColor1:'bg-[#A6A8AC] ',
      bgColor2:'bg-[#3E414A] '
    },
    {
      name:'NOUN',
      bgColor1:'bg-[#A6A8AC] ',
      bgColor2:'bg-[#3E414A] '
    },
    {
      name:'UDUS',
      bgColor1:'bg-[#A6A8AC]',
      bgColor2:'bg-[#3E414A] '
    },
    {
      name:'EKSU',
      bgColor1:'bg-[#A6A8AC] ',
      bgColor2:'bg-[#3E414A] '
    },
  ]
  
  return (
    <section className="px-[100px] flex gap-[20px] ">
 <aside className="w-[836px] bg-[#FFFFFF] flex flex-col gap-[48px] px-[32px] pt-[16px] pb-[40px]">
    <span className="gap-[24px] flex flex-col">
<h2 className="text-[32px] font-bold">Exam Preparation & Practice: Get Ready to Succeed!</h2>
<p className="text-[18px] text-[#101828]">
    Preparing for Exams can be demanding, but with the ight resources,
     success is within reach! Our Exam Preparation & Practice section
      is designed to help students excel in their school exams and Major exams like SAT, TOEFL, IELTS, IGCSE, JAMB, WAEC
</p>
</span>

<div className="bg-[#FEF6E6] p-[16px]">
<span className="flex items-center gap-2"><p className="w-[20px] h-[20px] bg-[#FF5900]"></p>
<p className="text-[24px] font-semibold">How it Works</p>
</span>
<ul className=" list-disc pl-[16px]">
<li className="text-[16px]">
    Start by Searching For your Class, subject, term and exam type or select on the right side panel
</li>
<li className="text-[16px]">Solve the Practice Questions and vie results and answers</li>
<li className="text-[16px]">Practice SSCE, IGSCE, and UTME using CBT Simulator</li>


</ul>

</div>

<div className="grid grid-cols-2 gap-[24px]">
<span className="flex flex-col gap-[12px]"> 
<Label className='tet-[18px] font-semibold'>Class Category</Label>

<Select>
  <SelectTrigger className="w-[350px]">
    <SelectValue placeholder="All" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
</span>


<span className="flex flex-col gap-[12px]"> 
<Label className='tet-[18px] font-semibold'>Year</Label>

<Select>
  <SelectTrigger className="w-[350px]">
    <SelectValue placeholder="All" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
</span>
  

  
<span className="flex flex-col gap-[12px]"> 
<Label className='tet-[18px] font-semibold'>Subject</Label>

<Select>
  <SelectTrigger className="w-[350px]">
    <SelectValue placeholder="All" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
</span>



<span className="flex flex-col gap-[12px]"> 
<Label className='tet-[18px] font-semibold'>Term</Label>

<Select>
  <SelectTrigger className="w-[350px]">
    <SelectValue placeholder="All" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
</span>
<Input className='bg-[#FF5900] text-white text-center
 w-[148px] placeholder:text-white' placeholder='Search' />

</div>


<div className="flex flex-col gap-[12px]">

<Accordion type="single" className='' collapsible>
  <AccordionItem value="item-1" className='bg-[#FFEEE6]  px-[12px] h-[56px]'>
    <AccordionTrigger className='font-bold text-[20px]'>KS1</AccordionTrigger>
    <AccordionContent>
      
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" className='' collapsible>
  <AccordionItem value="item-2" className='bg-[#FFEEE6]  px-[12px] h-[56px]'>
    <AccordionTrigger className='font-bold text-[20px]'>KS2</AccordionTrigger>
    <AccordionContent>
      
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" className='' collapsible>
  <AccordionItem value="item-3" className='bg-[#FFEEE6]  px-[12px] h-[56px]'>
    <AccordionTrigger className='font-bold text-[20px]'>KS3</AccordionTrigger>
    <AccordionContent>
      
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>


<div className="flex flex-col gap-[32px]">
<article className="flex gap-[24px] items-center">
<span className="w-[140px] h-[120px]">
  <Image src={Maths} alt='' layout='responsive'/>
</span>
<span className="flex flex-col gap-[12px] w-[168px]">
  <p className="text-[18px] font-semibold">Mathematics</p>
  <Button variant="outline" className='w-[113px] border border-[#FF5900] text-[#FF5900]'>Go to Lesson</Button>
  <Button variant="outline" className='border border-[#FF5900] text-[#FF5900]'>Study Past Questions</Button>

</span>
</article>



<article className="flex gap-[24px] items-center">
<span className="w-[140px] h-[120px]">
  <Image src={Maths} alt='' layout='responsive'/>
</span>
<span className="flex flex-col gap-[12px] w-[168px]">
  <p className="text-[18px] font-semibold">English</p>
  <Button variant="outline" className='w-[113px] border border-[#FF5900] text-[#FF5900]'>Go to Lesson</Button>
  <Button variant="outline" className='border border-[#FF5900] text-[#FF5900]'>Study Past Questions</Button>

</span>
</article>


<article className="flex gap-[24px] items-center">
<span className="w-[140px] h-[120px]">
  <Image src={Maths} alt='' layout='responsive'/>
</span>
<span className="flex flex-col gap-[12px] w-[168px]">
  <p className="text-[18px] font-semibold">Civi Education</p>
  <Button variant="outline" className='w-[113px] border border-[#FF5900] text-[#FF5900]'>Go to Lesson</Button>
  <Button variant="outline" className='border border-[#FF5900] text-[#FF5900]'>Study Past Questions</Button>

</span>
</article>




<article className="flex gap-[24px] items-center">
<span className="w-[140px] h-[120px]">
  <Image src={Maths} alt='' layout='responsive'/>
</span>
<span className="flex flex-col gap-[12px] w-[168px]">
  <p className="text-[18px] font-semibold">Biology</p>
  <Button variant="outline" className='w-[113px] border border-[#FF5900] text-[#FF5900]'>Go to Lesson</Button>
  <Button variant="outline" className='border border-[#FF5900] text-[#FF5900]'>Study Past Questions</Button>

</span>
</article>



<article className="flex gap-[24px] items-center">
<span className="w-[140px] h-[120px]">
  <Image src={Maths} alt='' layout='responsive'/>
</span>
<span className="flex flex-col gap-[12px] w-[168px]">
  <p className="text-[18px] font-semibold">Chmistry</p>
  <Button variant="outline" className='w-[113px] border border-[#FF5900] text-[#FF5900]'>Go to Lesson</Button>
  <Button variant="outline" className='border border-[#FF5900] text-[#FF5900]'>Study Past Questions</Button>

</span>
</article>



<article className="flex gap-[24px] items-center">
<span className="w-[140px] h-[120px]">
  <Image src={Maths} alt='' layout='responsive'/>
</span>
<span className="flex flex-col gap-[12px] w-[168px]">
  <p className="text-[18px] font-semibold">Literature</p>
  <Button variant="outline" className='w-[113px] border border-[#FF5900] text-[#FF5900]'>Go to Lesson</Button>
  <Button variant="outline" className='border border-[#FF5900] text-[#FF5900]'>Study Past Questions</Button>

</span>
</article>



<article className="flex gap-[24px] items-center">
<span className="w-[140px] h-[120px]">
  <Image src={Maths} alt='' layout='responsive'/>
</span>
<span className="flex flex-col gap-[12px] w-[168px]">
  <p className="text-[18px] font-semibold">Physics</p>
  <Button variant="outline" className='w-[113px] border border-[#FF5900] text-[#FF5900]'>Go to Lesson</Button>
  <Button variant="outline" className='border border-[#FF5900] text-[#FF5900]'>Study Past Questions</Button>

</span>
</article>


<article className="flex gap-[24px] items-center">
<span className="w-[140px] h-[120px]">
  <Image src={Maths} alt='' layout='responsive'/>
</span>
<span className="flex flex-col gap-[12px] w-[168px]">
  <p className="text-[18px] font-semibold">Economics</p>
  <Button variant="outline" className='w-[113px] border border-[#FF5900] text-[#FF5900]'>Go to Lesson</Button>
  <Button variant="outline" className='border border-[#FF5900] text-[#FF5900]'>Study Past Questions</Button>

</span>
</article>


<article className="flex gap-[24px] items-center">
<span className="w-[140px] h-[120px]">
  <Image src={Maths} alt='' layout='responsive'/>
</span>
<span className="flex flex-col gap-[12px] w-[168px]">
  <p className="text-[18px] font-semibold">Accounting</p>
  <Button variant="outline" className='w-[113px] border border-[#FF5900] text-[#FF5900]'>Go to Lesson</Button>
  <Button variant="outline" className='border border-[#FF5900] text-[#FF5900]'>Study Past Questions</Button>

</span>
</article>


<article className="flex gap-[24px] items-center">
<span className="w-[140px] h-[120px]">
  <Image src={Maths} alt='' layout='responsive'/>
</span>
<span className="flex flex-col gap-[12px] w-[168px]">
  <p className="text-[18px] font-semibold">Computer Studies</p>
  <Button variant="outline" className='w-[113px] border border-[#FF5900] text-[#FF5900]'>Go to Lesson</Button>
  <Button variant="outline" className='border border-[#FF5900] text-[#FF5900]'>Study Past Questions</Button>

</span>
</article>


<article className="flex gap-[24px] items-center">
<span className="w-[140px] h-[120px]">
  <Image src={Maths} alt='' layout='responsive'/>
</span>
<span className="flex flex-col gap-[12px] w-[168px]">
  <p className="text-[18px] font-semibold">Commerce</p>
  <Button variant="outline" className='w-[113px] border border-[#FF5900] text-[#FF5900]'>Go to Lesson</Button>
  <Button variant="outline" className='border border-[#FF5900] text-[#FF5900]'>Study Past Questions</Button>

</span>
</article>


<article className="flex gap-[24px] items-center">
<span className="w-[140px] h-[120px]">
  <Image src={Maths} alt='' layout='responsive'/>
</span>
<span className="flex flex-col gap-[12px] w-[168px]">
  <p className="text-[18px] font-semibold">Government</p>
  <Button variant="outline" className='w-[113px] border border-[#FF5900] text-[#FF5900]'>Go to Lesson</Button>
  <Button variant="outline" className='border border-[#FF5900] text-[#FF5900]'>Study Past Questions</Button>

</span>
</article>


<article className="flex gap-[24px] items-center">
<span className="w-[140px] h-[120px]">
  <Image src={Maths} alt='' layout='responsive'/>
</span>
<span className="flex flex-col gap-[12px] w-[168px]">
  <p className="text-[18px] font-semibold">Agricultural Studies</p>
  <Button variant="outline" className='w-[113px] border border-[#FF5900] text-[#FF5900]'>Go to Lesson</Button>
  <Button variant="outline" className='border border-[#FF5900] text-[#FF5900]'>Study Past Questions</Button>

</span>
</article>
</div>

 </aside>

<aside className="w-[370px]">
<article className="flex flex-col gap-[24px]">    
<div className="grid grid-cols-5 pt-3 gap-[20px]">
  {
    Schools.map((school)=>(
        <div className={`rounded-none text-[12px]  lg:text-[10px] p-[2px] lg:p-[10px] text-white ${school.bgColor1}`}>
             <Link href='/' className={`flex   items-center justify-center lg:text-[9px] xl:text-[9px] 
                lg:px-[2px] ${school.bgColor2}`}>
                   {school.name}
             </Link>
        </div>
    ))
  }
</div>
 <Link href='' className='text-[#097C46] underline'>Access guide on
  how to get admission into your desired school and courses</Link>

  </article>

  
</aside>



    </section>
  )
}
