"use client"
import { useRouter } from "next/router"


import { toggle } from '@/lib/utils';
import { useState } from "react";



export default function Main(){
    // const router = useRouter()
    // const {role} = router.query
    const subjects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] 
  const [showReg, setShowReg] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const showRegPage = () =>{
    toggle(setShowReg, showReg); // then toggle the registration page
  }
  const showLoginPage = () =>{
    setShowLogin(!showLogin)
  }

    return(
           <>
      
             <div className="md:px-[100px] md:py-[16px] pb-[64px] pt-[16px] px-[16px] flex flex-col gap-[24px] ">
                <div className="flex gap-[8px] items-center">
                  <span className="text-[#8C3100] text-[16px] font-[500]">Resources</span>
                  <span>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L7 7L1 1" stroke="#1B1B1B" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-[#FF5900] text-[16px] font-[500]">Teacher</span>
                </div>
                <h3 className="text-[24px] font-[600]">A curated list of all necessary resources to aid your teaching</h3>
                <div className="md:gap-[48px] gap-[40px] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 py-[32px]  ">
                       {
                        subjects.map((subject)=>(
                          <div className="">
                              <div className="flex items-center justify-center w-full h-[200px] bg-[#FFCCB0] ">
                             
                              </div>
                            <div className="flex gap-[16px] flex-col">
                              <p className="font-[500] text-[16px]">The Ultimate guide to using Online tools for teaching students</p>
                              <p className="font-[400] text-[14px]">As earth aged, human beings evolve in the way the do things and solve problem...</p>
                              <a className="text-[#002BAD] font-[400] text-[14px]">www.teachingaid.com</a>
                            </div>
                          </div>
                        ))
                       }
                    </div>

                    </div>
        
            </>
    )
}