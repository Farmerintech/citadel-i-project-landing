"use client"
import { useRouter } from "next/router"
import { toggle } from '@/lib/utils';
import { useEffect, useState } from "react";
import { ResourcesImages } from "@/app/components/resourcesImage";
import Image from "next/image";
import type {Metadata} from "next";


export default function Main(){
    // const router = useRouter()
    // const {role} = router.query
    const subjects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] 
    const [data, setData] = useState<any>()
    const [error, setError] = useState<any>()
    const [loading, setLoading] = useState<boolean>()
    useEffect(()=>{
      const fetchResources= async () => {
        setError("");
        setData(null);
  
        try {
          const res = await fetch(
            `https://citadel-i-project.onrender.com/api/v1/resources/`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({resourceFor:"Students"}),
            }
          );
  
          const result = await res.json();
  
          if (!res.ok) {
            throw new Error(result.message || "Failed to fetch class material");
            setError(result.message);
          }
  
          setData(result.data);
          console.log("Fetched:", result);
        } catch (err: any) {
          console.error(err);
          setError(err.message || "Error connecting to server");
        } finally {
          setLoading(false);
        }
      };
      fetchResources()
    }, [])
    type resourceItem = {
      source: string;
      description: string;
      link: string;
      filePath: any;
    };
  
    return(
           <>
          
             <div className="md:px-[100px] md:py-[16px] pb-[64px] pt-[16px] px-[16px] flex flex-col gap-[24px] ">
                <div className="flex gap-[8px] items-center">
                  <span className="text-[#8C3100] text-[16px] font-[500]">Resources</span>
                  <span>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L7 7L1 1" stroke="#1B1B1B" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-[#FF5900] text-[16px] font-[500]">Student</span>
                </div>
                <h3 className="text-[24px] font-[600] ">A curated list of all necessary resources to aid your learning</h3>
                {loading && (
              <p className="mt-[50px] md:mt-[0px] text-center w-full text-[18px] ">Loading material...</p>
            )}

          {!loading && error && (
           <p className="mt-[50px] md:mt-[0px] w-full text-center text-[18px] font-[500] text-black">
                {error}
            </p>
          )}
                <div className="md:gap-[48px] gap-[40px] grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 py-[32px]  ">
                       
                       { !loading &&
                        data && data.map((resources:resourceItem)=>(
                          <div className="">
                              <div className="flex items-center justify-center w-full h-[200px] ">
                                {ResourcesImages.map(image => image.name === resources.source ?
                                  <Image src={image.image} alt={image.name}/>:
                                  ''
                                )}
                              </div>
                            <div className="flex gap-[16px] flex-col">
                              <p className="font-[500] text-[16px]">{resources.source}</p>
                              <p className="font-[400] text-[14px]">{resources.description}</p>
                              <a className="text-[#002BAD] font-[400] text-[14px]">{resources.link}</a>
                            </div>
                          </div>
                        ))
                       }
                    </div>

                    </div>
        
            </>
    )
}