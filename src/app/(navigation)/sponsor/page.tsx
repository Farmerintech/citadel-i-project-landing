"use client"

import HomeNavBar from "@/app/navbar"

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { toggle } from "@/lib/utils";
import { RightSide } from "./rightSide";
import { LeftSide } from "./leftSide";
import { Bottom } from "./bottom";
export default function Counselling (){
     
    return(
        <>
        
        <section className=" bg-[#FFFBF9] lg:px-[100px] px-[32px] py-[64px]">
         <div className=" flex flex-col md:flex-row items-center md:items-start justify-between gap-[32px] md:gap-[12px]">
         <LeftSide/>
         <RightSide/>
         </div>
         <Bottom/>

        </section>
         
        </>
    )
}