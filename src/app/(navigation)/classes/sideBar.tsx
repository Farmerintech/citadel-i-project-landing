"use client"

    const menuItems =[
        {
            id:0,
            name:"KS1",
            years:["Year1", "Year2"]
        },
        {
            id:1,
            name:"KS2",
            years:["Year1", "Year2", "Year3", "Year4", "Year5", "Year6"], 
        },
        {
            id:2,
            name:"KS3",
            years:["Year1", "Year2", "Year3", "Year4", "Year5", "Year6"], 
        },
        {
            id:3,
            name:"SSCE/GCE",
            years:[], 
        },
    ]

import { useState } from "react"
export const SideBar = () =>{
    const [yearIndex, setYearIndex] = useState(0)
    const [classIndex, setClassIndex] = useState(0)
    return(
        <section className="bg-white w-[164px] min-h-screen  rounded-[2px] hidden md:block">
            <ul className="flex items-center flex-col justify-center px-[32px] py-[16px] ">
                {
                    menuItems.map((menu)=>(
                        <li className="cursor-pointer" onClick={()=>{setClassIndex(menu.id)}} key={menu.id}>
                            <div >
                                <div className={`flex justify-between items-center ${classIndex == menu.id ? "bg-[#F6C354]":''} w-[132px] px-[8px] py-[12px]`} >
                                    <span>{menu.name}</span>
                                     <span>
                                    
                                     </span>
                                </div>                      
                                 <ul  className={` ${classIndex == menu.id ? 'block': 'hidden' }`}>
                                    {menu.years.map((year)=>(
                                    <li className={`${yearIndex === menu.years.indexOf(year) ? "bg-gray-200": "bg-gray-100"} px-[16px] py-[12px] text-center hover:bg-gray-200`} onClick={()=>{setYearIndex(menu.years.indexOf(year))}}>{year}</li>
                                    ))}
                                 </ul>
                            </div>
                        </li>
                    ))
                }
           </ul>

        </section>
    )
}


export const MobileSideBar = () =>{
    const [yearIndex, setYearIndex] = useState(0)
    const [classIndex, setClassIndex] = useState(0)
    const [showMenu, setShowMenu] = useState(false);
    return(
        <ul className="md:hidden w-[95%]" onClick={()=>{setShowMenu(true)}}>
            {
            showMenu &&    menuItems.map((menu)=>(
                    <li className="cursor-pointer z-[80px]  " onClick={()=>{setClassIndex(menu.id)}} key={menu.id}>
                        <div className=''>
                            <div className={`flex justify-between items-center ${menu.name === 'KS1' ? "bg-[#F6C354]":'bg-white'} px-[8px] py-[12px] `} >
                                <span>{menu.name}</span>
                                <span>
                                
                                </span>
                            </div>                      
                             <ul  className={` ${classIndex == menu.id ? 'block': 'hidden' }`}>
                                {menu.years.map((year)=>(
                                <li className={`${yearIndex === menu.years.indexOf(year) ? "bg-gray-200": "bg-gray-100"}  px-[16px] py-[12px] text-center hover:bg-gray-200`} onClick={()=>{setYearIndex(menu.years.indexOf(year))}}>{year}</li>
                                ))}
                                
                             </ul>
                        </div>
                    </li>
                ))
            }
            <li className={`w-full px-[8px] py-[12px] bg-[#F6C354] flex items-center justify-between ${!showMenu ? "block":"hidden"}`}>
                
                <span>KS1</span>
                <span className="text-black"></span>

            </li>
       </ul>

)
}
