"use client"

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import React, { useEffect, useState} from 'react'
import { ChefHatIcon } from 'lucide-react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import { useParams } from 'next/navigation'
import { subjects } from "@/app/(navigation)/exam_preparation/page"
  

type PQItem = {
    question: string;
    optA:string,
    optB:string,
    optC:string,
    optD:string,
    optE:string,
    subject:string,
    id:number,
    correctOpt:string
    explanation:string
    // optionally add: id: string; or other fields if present
  };

export default function page() {
  const params = useParams();
  let subject = params.subject as string;
  const questionId = parseInt(params.questionId as string, 10);
    const [myData, setMyData] = useState<any>(null);
    const [error, setError] = useState<string>()
  
    useEffect(() => {
      const fetchPQ = async () => {
        if (!subject) return; // Wait until subject is available
  
        setError("");
    
        try {
          const response = await fetch(`https://citadel-i-project.onrender.com/api/v1/exam_prep/view-answer/${subject}/${questionId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          const result = await response.json();
          setMyData(result);
          console.log(myData)
        } catch (error) {
          console.error(error);
          setError("Error connecting to server");
        }
      };
    
      fetchPQ();
    }, [myData]);
  
    const matched = subjects.find(subj => subj.url === subject);

  return (
    <main className="md:px-[100px] py-3 px-[16px]">
<div className="flex items-center justify-between">

    <span className="">  
<p className="text-[#FF5900] text-[16px]">{ matched ? `${matched.name} Past Question` : "Loading..."}</p>
<p className="md:text-[32px] text-[12px] font-bold">{ matched ? `${matched.name} Past Question` : "Loading..."}</p>
</span>
<Button className='bg-[#FF5900] text-[12px] md:text-white md:text-[18px]' variant='outline'><Link href='' className='flex gap-2 items-center'>
Study Saved questions
 <ChefHatIcon/></Link>  </Button>
</div>
<section className=" flex gap-[20px] md:flex-row flex-col pt-[50px] ">
<aside className="md:w-[836px] bg-[#FFFFFF] flex flex-col gap-[48px] md:px-[32px]  pb-[40px]">




<article className="flex flex-col gap-[24px]">

<div className="flex flex-col gap-2.5">
{
  myData ?
  myData?.PQ ?
  
    <>
    <span className="flex items-center gap-2" key={myData.PQ.id}>
    <p className="h-[24px] w-[24px] bg-[#FFCCB0] text-[10px]
    border border-[#FF5900] text-[#FF5900] rounded-full flex items-center justify-center">{myData.PQ.id}</p>
    <p key= {myData.PQ.id} className="font-semibold text-[18px]">
      {myData?.PQ.question}
    </p>
    </span>
        <span className="">
        <p className="text-[18px]"> A) {myData?.PQ.optA} </p>
        
        <p className="text-[18px]"> B) {myData?.PQ.optB}</p>
        
        <p className="text-[18px]"> C) {myData?.PQ.optC}</p>
        
        <p className="text-[18px]"> D) {myData?.PQ.optD}</p>
       </span>
    <span className="flex flex-col w-[105px]">
<Button variant='outline' className='bg-[#0DAF64] text-white'>
       Answer
    </Button>
    <p className="text-[18px]"> {myData?.PQ.correctOpt}) {myData?.PQ.correctAns}</p>
    </span>
    
    <span className="flex flex-col">
<Button variant='outline' className=' border border-[#0DAF64] w-[125px] text-black'>
       Explanation
    </Button>
    <p className="text-[14px]">{myData?.PQ.explanation}</p>
    </span>

<span className="flex justify-between">
<Button variant='outline' className=' border border-[#FF5900]'><Link href={`/exam_preparation/${subject}/exam_questions/`}>Go Back</Link>    </Button>
</span>
</>
  
   :"No Question yet"
     :"Loading Question..."
}

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
