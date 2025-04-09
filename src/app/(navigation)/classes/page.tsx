"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { toggle } from "@/lib/utils";
import { ClassNav } from "./classNav";
import { SideBar } from "./sideBar";
import { Main } from "./main";

export default function Myclass (){
  const [showReg, setShowReg] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const router = useRouter()
  const showRegPage = () =>{
    router.push('/?showReg=true'); // navigate to home page
    toggle(setShowReg, showReg); // then toggle the registration page
  }
  const showLoginPage = () =>{
    router.push('/?showLogin=true'); // navigate to home page
    setShowLogin(!showLogin)
  }

    return(
        <>
  
        <section className="lg:px-[100px] md:px-[50px] py-[16px] px-[16px] bg-[#F3F3F3] ">
          <ClassNav/>
          <div className="flex gap-[12px] mt-[16px]">
            <SideBar/>
            <Main/>
          </div>
        </section>
        
        </>
    )
}