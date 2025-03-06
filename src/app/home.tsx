import React from 'react'
import Image from 'next/image'
import Mother from '@/app/assets/mother-spending-time-with-her-child 1.png'
import { Button } from '@/components/ui/button'
import Waec from '@/app/assets/Frame 70.png'
import { Checkbox } from '@/components/ui/checkbox'
import Client from '@/app/assets/Attending the Client 1.png'
import Whatsapp from '@/app/assets/WhatsApp Image 2025-02-16 at 10.40.54_70d95c85.png'
import Frame from '@/app/assets/Frame 99.png'
import Frame7 from '@/app/assets/Frame 97.png'
import Star from '@/app/assets/glowing-star.png'
export default function home() {
  return (
    <>  
    <main className="py-[32px] flex  md:flex-row flex-col  md:px-[100px] px-[24px]  bg-[#F4B733] ">
<div className="md:w-[585px] flex flex-col gap-[32px] md:h-[286px]">
<h2 className="text-[32px] max-w-[585px] font-semibold leading-[38.73px]">Are 
You a Parent looking to Home School Your Child?
</h2>
<span className="flex flex-col gap-[56px]">  
<p className="text-white text-[18px]">
    Give your child the best education from the comfort 
    of your home with our comprehensive home schooling support. We provide
    top-quality learning materials, structured lesson plans, and expert guidance
     to help your child excel academically.
</p>

<Button className='w-[197px] h-[48px] text-[18px] bg-[#FF5900]' >
Register Now
</Button>
</span>
</div>

<div className="md:w-[481px] md:h-[365.48px] md:py-0 py-[32px]">
    <Image src={Mother} alt='' layout='responsive' />
</div>


    </main>



<main className="flex md:flex-row md:px-[100px] md:py-0 py-[32px] px-[24px] flex-col gap-[56px] md:justify-between">

<div className="md:w-[486px] flex flex-col gap-[20px] md:h-[467px]">
<h2 className="text-[32px] font-semibold">Our Services</h2>
    <Image src={Waec} alt='' layout='responsive' />
</div>

<div className="md:w-[581px] md:mt-[56px]  flex flex-col gap-[32px] md:h-[467px]">
    <h2 className="font-semibold text-[24px]">Exam Peparation, Guidance and Tutoring</h2>
    <span className="flex flex-col gap-[10px]">
        <h3 className="text-[18px] font-semibold">Pass your Exams with Confidence!</h3>
        <p className="text-[18px] leading-[21.78px]">
            We provide expert tutoring and resources to help you ace your exams.
             From standardized interntaional tests to national entrance exams,
              we equip you with the right knowledge, strategies and practice 
             materials
        </p>
    </span>
    <span className="flex flex-col gap-[10px]">
        <h3 className="text-[18px] font-semibold">Exams We Prepare You For:</h3>
        
        <p className="flex gap-3 items-center"><Checkbox className=''/> 
        SAT, TOEFL, IELTS, IGCSE (for interntaional students)     </p>
    
    
        <p className="flex gap-3 items-center"><Checkbox className=''/> 
        JAMB, WAEC (for Nigeria students)     </p>
    
    </span>

    
    <span className="">
        
        
        <p className="flex gap-3 items-center"><Checkbox className=''/> 
        1-on-1 & Group Tutoring Sessions </p>
    
    
        <p className="flex gap-3 items-center"><Checkbox className=''/> Comprehensive Study Plans & Past Questions
         </p>
         
        <p className="flex gap-3 items-center"><Checkbox className=''/> Mock Exams and Personalized Feedback
         </p>
    
    </span>


    
    
    <span className=" flex  gap-[20px]">
        
<Button className='md:w-auto w-[200px] md:text-[18px] text-[12px]  bg-[#FF5900]' >
Access Guide and Past Questions
</Button>
        
 
<Button variant='outline' className='hover:bg-black md:w-auto w-[150px] md:text-[18px] text-[12px]
 hover:text-white border-[1px] border-black' >
Book a free consultation
</Button>
               
    
    </span>
    
</div>

</main>




<main className="flex md:flex-row flex-col-reverse   md:px-[100px] md:py-[100px] py-[32px] gap-[56px]">

<div className="md:w-[581px] w-[100%] md:px-0 px-[24px] flex flex-col gap-[32px] md:h-[455px]">
    <h2 className="font-semibold text-[24px]">Educational & Career Counselling</h2>
    <span className="flex md:w-[541px] md:h-[194px] rounded-[8px]   flex-col bg-[#F6C354] p-[16px]
     gap-[8px]">
        <h3 className="text-[18px] font-semibold">Unlock Your Potential with Guidance Expert</h3>
        <p className="text-[18px] leading-[21.78px]">
Not sure about your academic or career move? Our expert counsellors are here to guide you
 through school admissions,
 career paths, and exam Preparation. Whether you need advise on choosing the right course,
  applying to local or international schools, or preparing for an important exam, we've got you covered!
        </p>
    </span>
    <span className="flex flex-col gap-[10px]">
    
        
        <p className="flex gap-3 items-center"><Checkbox className=''/> 
        Personalized Career Guidance  </p>
    
    
        <p className="flex gap-3 items-center"><Checkbox className=''/> 
        Admission Support for Local And International Schools  </p>
    
        <p className="flex gap-3 items-center"><Checkbox className=''/> 
        Exam Preparation And Study Plans </p>
    
    </span>
    
    <span className=" flex gap-[20px]">
      
        
 
<Button variant='outline' className='hover:bg-black hover:text-white border-[1px] border-black' >
Book a Free Counselling Session Today
</Button>
               
    
    </span>
    
</div>

<div className="md:w-[486px] flex flex-col gap-[20px] md:px-0 px-[24px] md:h-[395.21px]">
    <Image src={Client} alt='' layout='responsive' />
</div>


</main>




<main className="flex md:px-[100px] md:flex-row flex-col  px-[24px] justify-center md:pt-[100px] gap-[56px]">


<div className="md:w-[471px]  md:h-[514.96px]">
    <Image src={Whatsapp} alt='' layout='responsive' />
</div>
<div className="md:w-[581px]   flex flex-col gap-[38px] md:h-[455px]">
    <h2 className="font-semibold text-[24px]">Holiday Coaching for Kids & Teens</h2>
    <span className="flex flex-col gap-[10px]">
        <h3 className="text-[18px] font-semibold">Make the Holidays Count- Learn and Grow!</h3>
        <p className="text-[18px] leading-[21.78px]">
Turn your scool breaks into an opportunity for growth with our fun and engaging holiday coaching programs 
whether you want to improve Science, Mathematics, and English or explore new skills in Graphic Design and Coding, 
Our expert tutors are here to help.
        </p>
    </span>
    <p className="">Subject Offered:</p>
    <span className=" bg-[#F6C354] rounded-md grid grid-cols-4 gap-[10px] p-[10px]">
<p className="p-[5px] border-gray-400 border-r-[1px]">Science</p>

<p className="p-[5px] border-gray-400 border-r-[1px]">Mathematics</p>

<p className="p-[5px] border-gray-400 border-r-[1px]">Engslih</p>

<p className="p-[5px] border-gray-400 border-r-[1px]">Graphic Design</p>


<p className="p-[5px] border-gray-400 border-r-[1px]">Coding</p>


    </span>
    <span className="flex flex-col gap-[10px]">
    
        
        <p className="flex gap-3 items-center"><Checkbox className=''/> 
        Taught By Experience Instructors
 </p>
    
    
        <p className="flex gap-3 items-center"><Checkbox className=''/> 
        Fun & Interactive Learning
          </p>
    
        <p className="flex gap-3 items-center"><Checkbox className=''/> 
        100% Online & Accessible </p>
    
    </span>
    
    <span className=" flex gap-[20px]">
      
        
 
<Button variant='outline' className='hover:bg-black h-[48px] text-[18px] hover:text-white
  bg-[#FF5900] text-white' >
Register Now to Secure a Spot
</Button>
    </span>
    
</div>
</main>



<main className="flex md:px-[100px] px-[24px] md:flex-row flex-col py-[32px]  justify-center items-center md:py-[100px] gap-[56px]">
<div className="md:w-[471px]  md:h-[456px]">
    <Image src={Frame} alt='' layout='responsive' />
</div>
<div className="md:w-[581px]  flex flex-col gap-[16px] md:h-[455px]">
    <h2 className="font-semibold text-[24px]">Book a Tutor</h2>
    <span className="flex flex-col gap-[10px]">
        <h3 className="text-[18px] font-semibold">Peronalized Learning at Your Fingertips</h3>
        <p className="text-[18px] leading-[21.78px]">Need Extra help with your studies? Connect with experienced tutors
            for one-on-one or group lesons tailored to your needs. Whether you're prepaing for an exam, struggling with 
            a Subject, or want to improve your skills, our expert tutors are here to guide you.
        </p>
    </span>

    <span className="">
    <p className="">Why chose Our Tutors</p>
    <span className="flex flex-col gap-[10px]">    
    <p className="flex gap-3 items-center"><Checkbox className=''/> 
    Taught By Experience Instructors
</p>
    <p className="flex gap-3 items-center"><Checkbox className=''/> 
    Fun & Interactive Learning
      </p>
    <p className="flex gap-3 items-center"><Checkbox className=''/> 
    100% Online & Accessible </p>

</span>

    </span>
  
    
    <span className=" flex gap-[20px]">
      
        
 
<Button variant='outline' className='hover:bg-black h-[48px] text-[18px] hover:text-white
  bg-[#FF5900] text-white' >
Become a Tutor Now!
</Button>
              
<Button variant='outline' className='hover:bg-black h-[48px] text-[18px] hover:text-white
  bg-[#FFEEE6] text-[#FF5900]' >
Become a Tutor
</Button>
               
    
    </span>
    
</div>


</main>



<main className="flex md:flex-row flex-col-reverse md:px-[100px] px-[24px] pb-[100px] justify-center gap-[56px]">
    
<div className="md:w-[719px]  flex flex-col gap-[16px] md:h-[577px]">
    <h2 className="font-semibold text-[40px]">Sponsor A  Candidate</h2>
    <span className="flex flex-col gap-[24px] rounded-[8px] bg-[#3E414A] p-[24px] text-white">
        <h3 className="text-[18px] font-semibold">Give the Gift Education!</h3>
        <p className="text-[18px] leading-[21.78px]">Many Student lack access to quality education due to
            to financial constraints. Through Our Sponsor a student Campaign, you can hel provide a tuition, learning materials 
            and academic support to students in need.
        </p>
        <p className="">How You can Help:</p>
        <span className="md:flex grid grid-cols-2 gap-[8px]">

 <h2 className="md:p-[16px] p-[5px] text-black rounded-[8px] bg-[#FFEEE6]">
 <Checkbox className=''/>
 <p className=""> 
Sponsor Tuition Fee For A Child
      </p>   </h2>


      <h2 className="md:p-[16px] p-[5px] text-black rounded-[8px] bg-[#FFEEE6]">
 <Checkbox className=''/>
 <p className=""> 
Provide Learning Materials & Examination Registration Support
      </p>   </h2>


      <h2 className="md:p-[16px] p-[5px] text-black flex flex-col gap-[10px] rounded-[8px] bg-[#FFEEE6]">
 <Checkbox className=''/>
 <p className=""> 
Empowwer A Future Leader with Quality Education
      </p>   </h2>

        </span>
    <h2 className="flex items-center gap-[10px] md:text-[40px] text-[20px]"> <Image src={Star} alt='' width={35} height={35} /> 
      Be A Changemaker            </h2>
      
<Button variant='outline' className='hover:bg-[#3E414A] h-[48px] w-[305px] text-[18px] hover:text-white
  bg-[#FF5900] text-white' >
Sponsor A Student Today!
</Button>
    </span>

    </div>

<div className="w-[313px]  h-[600.12px]">
    <Image src={Frame7} alt='' layout='responsive' />
</div>

</main>






    </>    
  )
}




