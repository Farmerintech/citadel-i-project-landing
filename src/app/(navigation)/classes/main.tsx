import { useState } from "react";
import { MobileSideBar } from "./sideBar";

export const Main = () =>{

    const [index, setIndex] = useState(0)
    const subjects= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return(
        <section className="bg-white w-full min-h-screen  rounded-[2px] px-[16px] py-[16px] md:px-[40px] md:py-[32px] ">  
        <div className=" grid grid-cols-2 gap-[12px] absolute left-8 right-5">
        <MobileSideBar/>
        <div className="w-[95%] ">
            <button className="  w-full px-[16px] py-[12px]  items-center justify-between
             border-[1.5px] bg-orange-500 md:hidden block text-white">
                    <span>First term</span>
                    <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="#667085" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
     
                    </span>
            </button>
        </div>
        </div>          
            <div className="md:flex items-center justify-center gap-[24px] hidden ">
                <button className={` ${index === 0 ? " bg-[#FF5900] hover:bg-[#E85100] text-white": "bg-white border-[1.5px] border-black"} px-[16px] py-[12px] w-full border-[1.5px] hover:border-none hover:bg-[#E85100] hover:text-white:`} onClick={()=>{setIndex(0)}}>
                    First term
                </button>
                <button className={` ${index === 1 ? " bg-[#FF5900] hover:bg-[#E85100] text-white": "bg-white border-[1.5px] border-black"} px-[16px] py-[12px] w-full border-[1.5px] hover:border-none hover:bg-[#E85100] hover:text-white`} onClick={()=>{setIndex(1)}}>
                    Second term
                </button>
                <button className={` ${index === 2 ? " bg-[#FF5900] hover:bg-[#E85100] text-white": "bg-white border-[1.5px] border-black"} px-[16px] py-[12px] w-full border-[1.5px] hover:border-none hover:bg-[#E85100] hover:text-white`} onClick={()=>{setIndex(2)}}>
                    Third term
                </button>

            </div>
            <div className="mt-[50px] md:mt-[0px]  grid md:grid-cols-2 lg:grid-cols-4 gap-[32px] py-[32px]  ">
               {
                subjects.map((subject)=>(
                  <div className="w-full h-[177px] ">
                    <div className="bg-[#F3F3F3] w-full h-[137px]">
                      <div className="flex items-center justify-center py-[35px] px-[26px]">
                    
                      </div>
                    </div>
                    <div className="bg-[#3E414A] h-[40px] w-full text-center text-white flex items-center justify-center">
                      Maths
                    </div>
                  </div>
                ))
               }
            </div>
            <div className="md:flex-row flex-col flex flex-start gap-[32px] md:items-center">
                    <p className="font-[400] text-[18px] text-xl">Need help with understanding your subjects?</p>
                    <button className="text-white rounded-[8px] w-[200px] px-[16px] py-[8px]  bg-[#FF5900]">
                    Book a Tutor Now
                    </button>
                </div>
        </section>
    )
}