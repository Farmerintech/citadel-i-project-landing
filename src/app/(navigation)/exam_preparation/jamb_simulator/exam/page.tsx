"use client"

import { useUser } from "@/app/context/reducer"
import { useState } from "react"
import { FaCalculator, FaChevronLeft, FaChevronRight, FaClock, FaTimes } from "react-icons/fa"
import {FiClock} from "react-icons/fi"
export default function Page (){
    const [currentSubject, setCurrentSubject] = useState<string>('English Language');
    const [questionIndex, setqustionIndex] = useState(1)
    const {state} = useUser()
    const data = [
        {
            question:'The true stomach of ruminants is called',
            options:[
                {
                    A:'Omason',
                    B:'Abomason',
                    C:"Rumen",
                    D:"Reticulum"
                }
            ]
        },
        {
            question:'The true stomach of ruminants is called',
            options:[
                {
                    A:'Omason',
                    B:'Abomason',
                    C:"Rumen",
                    D:"Reticulum"
                }
            ]
        }
    ]

    const Next = (index:number)=>{
        setqustionIndex(index+1);
        if(index === data.length){
            setqustionIndex(index)
        }
    }
    const Prev = (index:number)=>{
        setqustionIndex(index-1)
        if(index ===1 ){
        setqustionIndex(1); 
        }
    }
    let answeredQuestion = []
    return(
        <section className="flex flex-col  gap-[12px] justify-between bg-[#F3F3F3] xl:px-[100px] px-[16px] py-[24px]">
           <aside className="bg-white py-[16px] px-[8px] flex gap-[24px] flex-col justify-between w-full">
             <div className="flex justify-between w-full">
                <p>{currentSubject} </p>
                <div className="flex gap-[24px] items-center">
                   <div className="p-[8px] bg-white border-1 border-[#E7E7E7] text-[#F1A500] rounded-[4px]">
                    <FiClock/>
                   </div>
                   <p className="text-[24px] font-600">00:00:33</p>
                   <button className="bg-[#FF5900] text-white px-[24px] py-[12px] gap-[8px] rounded-[8px]">Submit</button>
                </div>
             </div>
                
           <div className="flex justify-between">
            <div className="flex justify-between gap-[8px]">
                {
                    state.subjects.map((subject, index) =>(
                        <button key={index} 
                        onClick={()=>{setCurrentSubject(subject)}} 
                        className={`${currentSubject === subject ? 'bg-[#0DAF64] text-white':'bg-[#F2F4F7]'} rounded-[4px] gap-[8px] p-[8px]`}>{subject}</button>
                    ))
                }
             </div>
                   <div className="p-[8px] bg-white border-1 border-[#E7E7E7] text-black rounded-[4px] flex justify-center items-center">
                <FaCalculator/>
             </div>
             </div>
           </aside>
           <aside className="bg-white py-[16px] px-[8px] flex gap-[24px] flex-col justify-between w-full">
            <div>
                {
                    data.map((item, index)=>(
                       <div className={`p-[16px] ${questionIndex === index+1 ? 'block':'hidden'}` } >
                         <p className="py-[8px] font-[600]"><span>{index+1}. </span>{item.question}</p>
                        
                            {
                                item.options.map((option, index) =>(
                                    <ul className="flex flex-col gap-[8px]">
                                    <li className="flex gap-[4px]"><input type="radio"/> A. {option.A}</li>
                                    <li className="flex gap-[4px]"><input type="radio"/>B. {option.B}</li>
                                    <li className="flex gap-[4px]"><input type="radio"/>C. {option.C}</li>
                                    <li className="flex gap-[4px]"><input type="radio"/>D. {option.D}</li>
                                  </ul>
                                ))
                            }
                      
                       </div>
                    ))
                }
            </div>
            <div className="flex gap-[32px]">
                <button 
                onClick={()=>{Prev(questionIndex)}}
                className="bg-[#FFEEE6] py-[8px] flex text-[#FF5900] items-center px-[16px] gap-[16px] ">
                    <span><FaChevronLeft/></span>
                    previous
                </button>
                <button 
                onClick={()=>{Next(questionIndex)}}
                className="bg-[#FFEEE6] py-[8px] flex text-[#FF5900] items-center px-[16px] gap-[16px] ">
                    <span><FaChevronRight/></span>
                    Next
                </button>
            </div>
            <div className="flex gap-[8px]">
                {
                    data.map((data, index) =>(
                        <div className="flex gap-[8px]">
                            <button 
                            onClick={()=>{setqustionIndex(index+1)}}
                            className={`${index+1 === questionIndex ? 'bg-[#F1A500] text-white':'bg-[#D0D5DD] '} rounded-[4px] w-[24px] h-[24px] p-[4px] gap-[4px] flex justify-center items-center`}>{index+1}</button>
                        </div>
                    ))
                }
            </div>
           </aside>
        </section>
    )
}