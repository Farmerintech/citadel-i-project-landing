import Ben1 from "@/app/assets/bene1.png"
import four from "@/app/assets/four.png"
import Image from "next/image"
import ben3 from "@/app/assets/ben3.png"
import { useState } from "react"
import { FaChevronCircleLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa"
export const Beneficiaries = () =>{
    const beneficiaries = [
        {
            name:'--Gift Ofabo',
            image:Ben1,
            text:"I aspire to study linguistic in my advanced college and also go into public speaking.Onereason why I hope to be awarded such benevolent privilege is considering the fact that my mum is currently undergoing some financial setbacks which in turn can restrict her from paying for my SSCE exams and also restrict me from sitting for the exams with my mates. (I believe by God’s Grace that my mum will be financially stabled sonner).My mum has been and is still taking good care of me earnestly. My father died a week before my birth, I could imagine the pain my mum went through. Recently, I myself had some setbacks with being consistent in going to school. I got to realize over the weeks that she has been behind in her paying for my school fees of which the school hadn’t be kind enough to easy action against her for reasons best known to the management. (for me that is a great favour of the Lord) When the news got to my notice, I became so reluctant that I stopped going to school until very recently when I picked up"
        },
        {
            name:'',
            image:four,
            text:"These four (4) caught our attention while our team were scouting for prospective candidates to present to donors. Haven met with one of their tutors, who told us all about them and what they did with determination despite all odds: we were made to know that despite the difficulties being faced by these four financially, haven all came from middle class families; they took months to save money in order to sit for the December( 2021) GCE exams. They didn’t give excuses nor allow their background to give them reasons why they should not write the exams. This courageous effort enough endeared them to our selection team who went all out of their way to see to it that their JAMB-UTME REG. became a reality. We wish them the best in all their endeavours moving forward.1) MONSURU MISTURA 2) ALABI KHADIJAH 3) JIMOH AISHAT 4) ABDFATAI KABIRAH All students of As-Salam College, Ajegunle. Their courage is worth emulating and shall be Rewarded. They are presently schooling as undergraduates in Kwara State ."
        },
        {
            name:'--Adebayo Busayo Racheal',
            image:ben3,
            text:"My name is Adebayo Busayo Racheal.I am 16 years old,I am a student of Birrel Avenue Senior High school and i am presently in ss3.I have been living with my aunty since I was a little girl from age 5; One reason why I hope I should be given an award of sponsorship to sit for GCE, is that my aunty who was holding an selective post as a councillor of mainland is presently out of job, which make it difficult to get me one.However currently she have been facing some difficulties which is also one of the reasons stopping her from helping to get me registered for my external exams. In addition, most of the time, it is quite difficult to get some necessary basic necessities of life, but we have been managing and praying to God for Blessings. With the way things are for now, am only managing to ensure I do not lose attention in my studies and not get distracted. I do know that my dreams and aspirations academically, shan’t be cut short abruptly. So I look to God to get a sponsor and I know he would use someone like"
        }
    ]

const [imageIndex, setImageIndex] = useState<number>(0)
    const handleNext = () =>{
        setImageIndex(imageIndex+1);
        if(imageIndex === beneficiaries.length-(1)){
            setImageIndex(0);
        }
    }
    const handlePrev = () =>{
        setImageIndex(imageIndex-1);
        if(imageIndex === 0){
            setImageIndex(imageIndex+2);
        }
    }
    return (
        <section className="py-[48px] px-[16px] md:gap-[40px] flex flex-col bg-[#F3F3F3] rounded-[8px] w-full">
            <h2 className="font-[700] text-[40px] text-center">
            Let’s Hear from the Beneficiaries 
            </h2>
            <section className="flex justify-between">
            <div className="hidden md:block relative md:top-[150px] w-[36px] h-[36px] p-[12px] bg-[#F9D68A]  rounded-full flex  items-center"
            onClick={handlePrev}
            >
                <FaChevronLeft/>
            </div>
            {
                beneficiaries.map((bene, index)=>(
                    <div key={index} className={`${index === imageIndex ? "flex":"hidden"} justify-between items-center flex-col md:flex-row gap-[40px]`}>
                        <div className="w-full md:w-[312px] h-[419px] flex items-center justify-center">
                            <Image src={bene.image} alt={bene.name}/>
                        </div>
                        <div className="md:flex-1 xl:w-[601px] md:p-0 p-[16px]">
                            <p className="flex gap-[6px] flex-col">
                                {bene.text}
                                <span className="font-bold">
                                    {bene.name}
                                </span>
                            </p>
                        </div>
                    </div>
                ))
            }
            <div className=" hidden md:block relative top-[150px] w-[36px] h-[36px] p-[12px] bg-[#F9D68A] rounded-full flex items-center"
            onClick={handleNext}
            >
            <FaChevronRight/>
            </div>
            </section>
            <div className="md:hidden flex justify-between p-[12px]">
            <div className="w-[36px] h-[36px] p-[12px] bg-[#F9D68A]  rounded-full flex  items-center"
            onClick={handlePrev}
            >
                <FaChevronLeft/>
            </div>
            <div className=" top-[150px] w-[36px] h-[36px] p-[12px] bg-[#F9D68A] rounded-full flex items-center"
            onClick={handleNext}
            >
            <FaChevronRight/>
            </div>
            </div>

        </section>
    )
}