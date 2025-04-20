"use client"
import React, { useEffect, useState} from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ChefHatIcon } from 'lucide-react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useParams } from 'next/navigation'; // ✅ Use this instead

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  type PQItem = {
    question: string;
    optA:string,
    optB:string,
    optC:string,
    optD:string,
    optE:string,
    subject:string,
    id:number
  };
  import { useSearchParams } from 'next/navigation';

export default function Page() {
  const params = useParams();
  let subject = params.subject as string; // if TypeScript complains
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>()
  const [totalPage, setTotalPage] = useState<number>()
console.log(params)
useEffect(() => {
  const fetchPQ = async () => {
    if (!subject) return;
    if(!currentPage) return 
    setError("");
  let offset;
  currentPage > 1 ? offset = (currentPage * 10)-10 : offset=0
    try {
      const response = await fetch(
        `https://citadel-i-project.onrender.com/api/v1/exam_prep/past-question/${subject}?page=${currentPage}&offset=${offset}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      setData(result);
      setTotalPage(result.pagination.totalPages)
    } catch (error) {
      console.error(error);
      setError("Error connecting to server");
    }
  };

  fetchPQ();
}, [subject, currentPage]);

  if(subject === "maths"){
    subject="Mathematics"
  }

    return (
<main className="md:px-[100px] py-3 px-[16px]">
<div className="flex items-center justify-between">

<span className="">  
<p className="text-[#FF5900] text-[16px]">{subject ? `${subject} Past Question` : "Loading..."}</p>
<p className="md:text-[32px] text-[12px] font-bold">{subject ? `${subject} Past Question` : "Loading..."}</p>
</span>
<Button className='bg-[#FF5900] text-[12px] md:text-white md:text-[18px]' variant='outline'><Link href='' className='flex gap-2 items-center'>
Study Saved questions
 <ChefHatIcon/></Link>  </Button>
</div>
<section className=" flex gap-[20px] md:flex-row flex-col pt-[50px] ">
<aside className="md:w-[836px] bg-[#FFFFFF] flex flex-col gap-[48px] md:px-[32px]  pb-[40px]">

<div className="grid grid-cols-2 gap-[24px] py-4">
<span className="flex flex-col gap-[12px]"> 
<Label className='tet-[18px] font-semibold'>Class Category</Label>

<Select>
  <SelectTrigger className="md:w-[350px] w-[100%]">
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
  <SelectTrigger className="md:w-[350px] w-[100%]">
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
  <SelectTrigger className="md:w-[350px] w-[100%]">
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
  <SelectTrigger className="md:w-[350px] w-[100%]">
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



<article className="flex flex-col gap-[24px]">
<span className="justify-end w-[40%] md:hidden flex">  
<Select >
  <SelectTrigger className="md:w-[350px] bg-[#3E414E] w-[100%]">
    <SelectValue placeholder="Subjects" className='text-white' />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select> </span>
<div className="flex flex-col gap-2.5">
{
  data ?
   data?.Questions?.length !==0 ?
  data?.Questions?.map((pq: PQItem, index: number) => (
    <>
    <span className="flex items-center gap-2" key={index}>
    <p className="h-[24px] w-[24px] bg-[#FFCCB0] text-[10px]
    border border-[#FF5900] text-[#FF5900] rounded-full flex items-center justify-center">{index+1}</p>
    <p key={index} className="font-semibold text-[18px]">
      {pq.question}
    </p>
    </span>
        <span className="">
        <p className="text-[18px]"> A) {pq.optA} </p>
        
        <p className="text-[18px]"> B) {pq.optB}</p>
        
        <p className="text-[18px]"> C) {pq.optC}</p>
        
        <p className="text-[18px]"> D) {pq.optD}</p>
       </span>
       <span className="flex justify-between w-[261px]">
<Button variant='outline' className='border border-[#FF5900] text-[#FF5900]'>
 <Link href={`/exam_preparation/${pq.subject}/exam_questions/${pq.id}/view_answer`}>      View Answer</Link>
    </Button>
<Button variant='outline' className='border border-[#FF5900] text-[#FF5900]'><ChefHatIcon/> Save Question</Button>

    </span>

   </>
    
  ))
  :"No Question yet"
  :"Loading Question..."
}
</div>
</article>


<span className="flex justify-between">
<Button variant='outline' className=' border border-[#FF5900]'><Link href=''>Go Back</Link>    </Button>
  
<span className="flex justify-between gap-[24px]">
  <Button variant='outline' className=' border border-[#FF5900]' disabled={currentPage === 1}>
    <Link href={`/exam_preparation/${subject}/exam_questions?page=${Math.max(currentPage - 1, 1)}`}>Previous</Link>
  </Button>

  <Button variant='outline' className=' border border-[#FF5900]' disabled={currentPage === totalPage}>
    <Link href={`/exam_preparation/${subject}/exam_questions?page=${currentPage + 1}`} >Next</Link>
  </Button>
</span>



</span>
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
