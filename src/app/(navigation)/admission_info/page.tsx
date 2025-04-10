"use client"
import { RightSide } from "./rightSide";
import { LeftSide } from "./leftSide";

export default function AdmissionInfo (){
    return(
        <>
        
        <section className=" md:bg-[#F3F3F3] md:px-6 lg:px-[100px] py-2 flex flex-col-reverse md:flex-row items-start justify-between gap-2">
        <LeftSide/>
          <RightSide/>
        </section>
      
        </>
    )
}