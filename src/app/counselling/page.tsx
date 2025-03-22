"use client"

import HomeNavBar from "@/app/navbar"
import Footer from "@/app/footer"
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { toggle } from "@/lib/utils";
import { RightSide } from "./rightSide";
import { LeftSide } from "./leftSide";
export default function Counselling (){
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
        <HomeNavBar showRegPage={showRegPage} showLoginPage={showLoginPage}/>
        <section className=" bg-[#FFFBF9] lg:px-[100px] px-[32px] py-[16px] flex flex-col md:flex-row items-start justify-between gap-[32px] md:gap-[12px]">
          <RightSide/>
          <LeftSide/>
        </section>
         <Footer/>
        </>
    )
}