import Image from "next/image"
import candidate1 from "@/app/assets/candidate1.jpg"
import candidate2 from "@/app/assets/candidate2.jpg"
import candidate3 from "@/app/assets/candidate3.jpg"
import partner1 from "@/app/assets/partner1.svg"
import partner2 from "@/app/assets/partner2.svg"
import partner3 from "@/app/assets/partner3.svg"
import partner4 from "@/app/assets/partner4.svg"

import chat from "@/app/assets/chat.png"

export const Bottom = ()=>{
    return(
        <aside className="pt-[48px] py-[40px] px-[16px]">
            <h2 className="font-[700] md:text-[40px] text-[24px] pb-[64px]">Meet the candidates</h2>
            <div className="flex flex-col md:flex-row gap-[48px] ">
            <div className="md:w-[267px] md:h-[417px] w-full">
                <Image src={candidate1}  layout="responsive" alt=""/>
            </div>
            <div className="md:w-[417px] md:h-[417px] w-full">
                <Image src={candidate2}  layout="responsive" alt=""/>
            </div>
            <div className="md:w-[417px] md:h-[417px] w-full ">
                <Image src={candidate3}  layout="responsive" alt=""/>
            </div>
            </div>
            <div className="flex flex-col md:gap-[48px] gap-[32px]">
                <h2 className="font-[600] md:text-[40px] text-[24px]">Our Partners and Sponsors</h2>
                <div className="md:flex flex justify-between gap-[20px]">
                    <div  className="md:w-[174px] md:h-[39px] w-[120px] h-[27px]">
                    <Image src={partner1} width={172} height={40}  layout="responsive" alt=""/>
                    </div>
                    <div  className="md:w-[177px] md:h-[41px] w-[120px] h-[27px] ">
                    <Image src={partner2} width={172} height={40} layout="responsive" alt=""/>
                    </div>
                    <div  className="md:w-[220px] md:h-[40px] w-[152px] h-[27px]">
                    <Image src={partner3} width={172} height={40} layout="responsive" alt=""/>
                    </div>
                    <div  className="md:w-[80px] md:h-[81px] w-[57px] h-[56px]">
                    <Image src={partner4} width={172} height={40} layout="responsive" alt=""/>
                    </div>                    

            </div>

            </div>
        </aside>
    )
}