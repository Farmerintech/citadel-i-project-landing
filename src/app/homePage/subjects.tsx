import Science from '@/app/assets/Metaverse 3D Icon Pack - 20 Free Download Science & Technology 3D Icons _ IconScout 1.png'
import PremiumV from '@/app/assets/Premium Vector _ 3d Books icon for web design isolated, Education and online class concept_ Eps 10 Vector_ 2.png'
import  Calculator  from '@/app/assets/3d open calculator stock illustration_ Illustration of isolated - 31101625 1.png'
import Images from '@/app/assets/Download free image of Globe, environment icon, 3D rendering illustration by Nunny about sticker, planet, design, 3d, and earth 6740065 1.png'
import Cyclopropane from '@/app/assets/Cyclopropane 1.png'
import PSD from '@/app/assets/Premium PSD _ 3d rendering mentor icon, mentor teaching in front of two student_ 1 (1).png'
import Tech from '@/app/assets/3D illustrations - Maria Garaeva 1.png'
import Image from 'next/image'
import KS1 from '@/app/assets/Frame 49 (3).png'
import KS3 from '@/app/assets/Frame 50 (3).png'
import College from '@/app/assets/Frame 51 (1).png'
import Tutor from '@/app/assets/Frame 52.png'


export const Subjects = () =>{
    const subjects = [
        {
            name:'Sciences',
            image:Science
        },
        {
            name:'Arts and Humanities',
            image:PremiumV
        },
        {
            name:'Business',
            image:Calculator
        },
        {
            name:'History',
            image:Images
        },
        {
            name:'STEM',
            image:Cyclopropane
        },
        {
            name:'Coaching',
            image:PSD
        },
        {
            name:'Counselling',
            image:PSD
        },
        {
            name:'Tech',
            image:Tech
        }

    ]
    return(
        <div className="lg:p-[47px] hidden md:flex justify-between grid grid-cols-2 gap-[24px]">
            {
                subjects.map((subject)=>(
                    <span className="flex flex-col items-center justify-center">
                       <Image src={subject.image} alt='' width={70} height={70} />
                       <p className="">{subject.name}</p>
                    </span>
                ))
            }
        </div>
    )
}

export const Ks = ()=>{
    const ksData = [
        {
            image:KS1,
        },
        {
            image:KS3,
        },
        {
            image:College,
        },
        {
            image:Tutor,
        },
    ]
    return(
        <div className="grid justify-center grid-cols-2 lg:flex md:flex-row flex-col gap-[40px] py-[36px]  md:justify-between items-center">
            {
               ksData.map((data)=>(
                 <figure className="md:h-[348px] w-full  md:w-[280px]">
                    <Image src={data.image} alt='' layout='responsive'/>
                </figure>
               ))
            }
        </div>


    )
}