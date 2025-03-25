import Image from "next/image"
import counsel from "@/app/assets/counsel.jpg"
import chat from "@/app/assets/chat.svg"
export const RightSide = () =>{
    return(
        <aside className="flex flex-col gap-[24px] px-[16px] py-[16px] justify-center items-center">
            <div className="w-full flex items-center justify-center">
                <Image src={counsel} width={100} height={100} sizes="300"  layout="responsive" alt=""/>
            </div>
            <div className="font-[600] text-[#0F0F0F] text-[24] flex flex-col gap-[24px]">
                <h4>You can also have a quick chat with us on whatsapp</h4>
            </div>
            <div className="md:w-[288px] md:h-[208px] w-full">
                <Image src={chat} width={100} height={100} layout="responsive" alt=""/>
            </div>
        </aside>
    )
}