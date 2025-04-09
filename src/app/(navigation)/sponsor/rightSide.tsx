import Image from "next/image"
import counsel from "@/app/assets/student.jpg"
import chat from "@/app/assets/chat.svg"
export const RightSide = () =>{
    return(
        <aside className="flex flex-col gap-[94px] px-[16px]">
            <div className="w-full flex items-center justify-center ">
                <Image src={counsel} width={100} height={100} layout="responsive" className="rounded-[8px]" alt=""/>
            </div>
            <div className="lg:w-[462px] w-full h-[104px] gap-[32px] p-[16px] rounded-[9px] bg-[#F6C354]">
                <p className="font-[600]">Your giving as much as  $50 can keep hope alive for that student who desires to sit for UTME/GCE/IGCSE</p>
            </div>
            <div className="font-[600] text-[#0F0F0F] text-[24] flex flex-col gap-[24px]">
                <h4>You can also have a quick chat with us on whatsapp to make enquiries</h4>
            </div>
            <div className="md:w-[288px] md:h-[208px] w-full h-full flex justify-center items-center">
                <Image src={chat} width={100} height={100} layout="responsive" alt=""/>
            </div>
        </aside>
    )
}