"use client"
import React, { ChangeEvent, useEffect, useState} from 'react'
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
  import { useSearchParams, useRouter } from 'next/navigation';
import { subjects } from '../../page'

export default function Page() {
  const params = useParams();
  let subject = params.subject as string; // if TypeScript complains
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string>()
  const [totalPage, setTotalPage] = useState<number>(1)
  const [loading, setIsLoading] = useState<boolean>(true);
  const matched = subjects.find(subj => subj.url === subject);

  const [formData, setFormData] = useState<any>({
    
    subject:`${matched?.name}`,
    examType:"",
    questionTypes:""
  });
 
  const handleSelectExamType = (value:string) =>{
    setFormData({...formData, examType:value})
  }
  const handleSelectSubject = (value:string) =>{
    setFormData({...formData, subject:value});
    const matched = subjects.find(subj => subj.name === value);
    const subjectUrl = matched?.url
    router.push(`/exam_preparation/${subjectUrl}/exam_questions`)
  }
  const handleSelectQuestionType = (value:string) =>{
    setFormData({...formData, questionTypes:value})
  }

  const [isManualSubmit, setIsManualSubmit] = useState(false);
   
  const fetchPQ = async () => {
    if (!subject || !currentPage) return;
    setError("");
    setIsLoading(true);
    let offset = (currentPage * 10) - 10;
  
    try {
      const res = await fetch(
        `https://citadel-i-project.onrender.com/api/v1/past-question?page=${currentPage}&offset=${offset}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      const result = await res.json();
      console.log(result)
      if (!res.ok) {
        throw new Error(result.message || "Failed to fetch question");
      }
  
      setData(result);
      console.log("Fetched:", result);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Error connecting to server");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isManualSubmit) {
      fetchPQ();
      setIsManualSubmit(false); // reset after manual fetch
      return;
    }
  
    // Auto-fetch only when there's no manual submit in progress
    fetchPQ();
  }, [subject, currentPage]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsManualSubmit(true); // mark manual submit
    fetchPQ();
  };
  

  

  const router = useRouter()


  

 
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

<form className="grid grid-cols-2 gap-[24px] py-4" onSubmit={handleSubmit} >
<span className="flex flex-col gap-[12px]"> 
<Label className='tet-[18px] font-semibold'>Subject</Label>

<Select onValueChange={handleSelectSubject}>
  <SelectTrigger className="md:w-[350px] w-[100%]">
    <SelectValue placeholder={matched?.name} />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="English Language">English Language</SelectItem>
    <SelectItem value="Mathematics">Mathematics</SelectItem>
    <SelectItem value="Biology">Biology</SelectItem>
    <SelectItem value="Chemistry">Chemistry</SelectItem>
    <SelectItem value="Physics">Phyics</SelectItem>
    <SelectItem value="Literature">Literature</SelectItem>
    <SelectItem value="Government">Government</SelectItem>
    <SelectItem value="Accounting">Accounting</SelectItem>
    <SelectItem value="Commerce">Commerce</SelectItem>
    <SelectItem value="Agricultural Science">Agricultural Science</SelectItem>
    <SelectItem value="Civic Education">Civic Education</SelectItem>
    <SelectItem value="Economics">Economics</SelectItem>
    <SelectItem value="Marketting">Marketting</SelectItem>
    <SelectItem value="Computer science">Computer science</SelectItem>
    <SelectItem value="Christian Religion Studies">Christian Religion Studies</SelectItem>
    <SelectItem value="Islamic Religion Studies">Islamic Religion Studies</SelectItem>

  </SelectContent>
</Select>
</span>

<span className="flex flex-col gap-[12px]"> 
<Label className='tet-[18px] font-semibold'>Exam Type</Label>

<Select onValueChange={handleSelectExamType} >
  <SelectTrigger className="md:w-[350px] w-[100%]">
    <SelectValue placeholder={formData.examType ? formData.examType: "All"} />
  </SelectTrigger>
  <SelectContent >
    <SelectItem value="JAMB" >JAMB</SelectItem>
    <SelectItem value="WAEC">WAEC</SelectItem>
    <SelectItem value="NECO">NECO</SelectItem>
    <SelectItem value="POST UTME">POST UTME</SelectItem>

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
<Label className='tet-[18px] font-semibold'>Question Type</Label>

<Select onValueChange={handleSelectQuestionType} >
  <SelectTrigger className="md:w-[350px] w-[100%]">
    <SelectValue placeholder={formData?.questionTypes ?formData?.questionTypes: "All"} />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Objective">Objective</SelectItem>
    <SelectItem value="Theory">Theory</SelectItem>
  </SelectContent>
</Select>
</span>
<Input className='bg-[#FF5900] text-white text-center
 w-[148px] placeholder:text-white' placeholder='Search' type='submit'/>

</form>



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
{loading && (
    <p className="mt-6 text-center w-full text-[18px] ">Loading Question...</p>
)}

{!loading && error && (
  <p className="mt-6 w-full text-center text-[18px] font-[500] text-black">{error}</p>
 )}
{
  !loading  && data?.Questions?.length > 0 && !error &&
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
}
</div>
</article>


<span className="flex justify-between">
<Button variant='outline' className=' border border-[#FF5900]'><Link href='/exam_preparation'>Go Back</Link>    </Button>
  
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
