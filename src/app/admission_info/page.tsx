"use client"

import HomeNavBar from "@/app/navbar"
import Footer from "@/app/footer"
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { toggle } from "@/lib/utils";
import { RightSide } from "./rightSide";
import { LeftSide } from "./leftSide";
import Header from "../header";
export default function AdmissionInfo (){
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
        <Header showRegPage={showRegPage} showLoginPage={showLoginPage}/>
        <section className=" md:bg-[#F3F3F3] md:px-6 py-2 flex flex-col-reverse md:flex-row items-start justify-between gap-2">
        <LeftSide/>
          <RightSide/>
        </section>
         <Footer/>
        </>
    )
}