import Link from "next/link"
import { Schools } from "../homePage/unipage"
import Image from "next/image"
import exam from "@/app/assets/exam.jpg"
export const RightSide = ()=>{
    return(
        <aside className="p-[16px] bg-[#F9D68A] lg:rounded-[4px] w-full md:w-1/3 flex-col flex gap-[24px] lg:h-[1024px]">
            <div className="bg-[#FFFFFF] p-[16px] rounded-[4px] flex flex-col gap-[24px]">
            <div className="grid grid-cols-5 gap-[20px]">
               {
                   Schools.map((school)=>(
                       <div className={`rounded-none text-[12px]   p-[3px]  text-white ${school.bgColor1}`}>
                             <Link href='/' className={`flex   items-center justify-center text-[12px]  ${school.bgColor2}`}>
                                 {school.name}
                             </Link>
                      </div>
                      ))
                }
            </div>
            <p className="text-[16px] text-[#097C47] font-[500] text-underline">
            Access guide on how to get admission into your desired school and courses
            </p>
            </div>
            <div className="bg-[#FEF6E6] p-[16px] rounded-[4px] flex flex-col gap-[24px]">
                <h3 className="text-[24px] font-[600] px-[16px] py-[8px]">📞 Need Help? Book a one-on-one Tutor</h3>
                <p className="font-[400] text-[16px] px-[8px]">Need extra help with your studies? Connect with experienced tutors for one-on-one or group lessons tailored to your needs.</p>
            </div>
            <div className="flex items-center justify-center ">
                <Image src={exam} alt='' height={469}/>
            </div>
        </aside>
    )
}