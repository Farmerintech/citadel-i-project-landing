"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FiSearch } from "react-icons/fi";
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import {getCurrentNav} from "@/app/utils/getCurrentNav"
import { useRouter, usePathname } from 'next/navigation';

import Link from "next/link";


export default function NavBar() {
    const pathname = usePathname(); 

  const [currentNav, setCurrentNav] = useState(0);
  const [isClassesDropdownOpen, setIsClassesDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  useEffect(() => {
    const navIndex = getCurrentNav(pathname);
    setCurrentNav(navIndex);
  }, [pathname]); 

  return (
<nav className="px-[100px] md:px-[32px] over-flow-x-hidden py-[16px] bg-[#FFFFFF] flex xl:flex-row xl:gap-[24px] xl:justify-center flex-col gap-[24px] items-between justify-between">      {/* Left Section - Navigation Links */}
      <ul className="flex justify-center md:gap-[32px] xl:gap-[42px]">
        {/* Home */}
        <li
          className={`text-[16px] border-[#FF5900] py-[3px] font-normal hover:text-[#FF5900] hover:border-b-[3px] ${
            currentNav === 0 ? "text-[#FF5900] border-b-[3px]" : "text-black"
          }`}
          onClick={() => setCurrentNav(0)}
        >
          <Link href="/">Home</Link>
        </li>

        {/* Classes Dropdown */}
        <li
          className={`relative text-[16px] border-[#FF5900] font-normal flex items-center gap-[4px] hover:text-[#FF5900] hover ${
            currentNav === 1 ? "text-[#FF5900] border-b-[3px]" : "text-black"
          }`}
          onMouseEnter={() => setIsClassesDropdownOpen(true)}
          onMouseLeave={() => setIsClassesDropdownOpen(false)}
        >
          <Link href="/classes">Classes</Link>
          {isClassesDropdownOpen && (
            <div className="absolute -left-5 top-[100%] flex flex-col bg-white shadow-md w-[120px]">
              <Link href="/classes/ks1" className="px-4 py-2 hover:bg-[#FF5900] hover:text-white text-black">
                KS1
              </Link>
              <Link href="/classes/ks2" className="px-4 py-2 hover:bg-[#FF5900] hover:text-white text-black">
                KS2
              </Link>
              <Link href="/classes/ks3" className="px-4 py-2 hover:bg-[#FF5900] hover:text-white text-black">
                KS3
              </Link>
              <Link href="/classes/ssce" className="px-4 py-2 hover:bg-[#FF5900] hover:text-white text-black">
                SSCE/GCE
              </Link>
            </div>
          )}
        </li>

        {/* Other Navigation Items */}
        <li
          className={`text-[16px] border-[#FF5900] py-[3px] font-normal hover:text-[#FF5900] hover:border-b-[3px] ${
            currentNav === 2 ? "text-[#FF5900] border-b-[3px]" : "text-black"
          }`}
          onClick={() => setCurrentNav(2)}
        >
          <Link href="/admission_info">Admission Info</Link>
        </li>

        <li
          className={`text-[16px] border-[#FF5900] py-[3px] font-normal hover:text-[#FF5900] hover:border-b-[3px] ${
            currentNav === 3 ? "text-[#FF5900] border-b-[3px]" : "text-black"
          }`}
          onClick={() => setCurrentNav(3)}
        >
          <Link href="/counselling">Counselling</Link>
        </li>

        <li
          className={`text-[16px] border-[#FF5900] py-[3px] font-normal hover:text-[#FF5900] hover:border-b-[3px] ${
            currentNav === 4 ? "text-[#FF5900] border-b-[3px]" : "text-black"
          }`}
          onClick={() => setCurrentNav(4)}
        >
          <Link href="/holiday_coaching">Holiday Coaching</Link>
        </li>
        <li
            className={`relative text-[16px] border-[#FF5900] font-normal flex items-center gap-[4px] hover:text-[#FF5900] hover ${
              currentNav === 6 ? "text-[#FF5900] border-b-[3px]" : "text-black"
            }`}
            onMouseEnter={() => setIsResourcesDropdownOpen(true)}
            onMouseLeave={() => setIsResourcesDropdownOpen(false)}
          >
            Resources
            {isResourcesDropdownOpen && (
              <div className="absolute left-0 top-[100%] flex flex-col bg-white shadow-md  w-[120px]">
                <Link
                  href="/resources/teacher"
                  className="px-4 py-2 hover:bg-[#FF5900] hover:text-white text-black "
                  onClick={() => setCurrentNav(6)}

                >
                  Teacher
                </Link>
                <Link
                  href="/resources/student"
                  className="px-4 py-2 hover:bg-[#FF5900] hover:text-white text-black"
                  onClick={() => setCurrentNav(6)}
                >
                  Student
                </Link>
              </div>
            )}
          </li>
       
      </ul>

      {/* Right Section - Resources Dropdown, Sponsor, Search, Book a Tutor */}
      <div className="flex justify-center gap-[10px] xl:gap-[24px] items-center">
        <ul className="flex justify-center gap-[32px]">
          {/* Resources Dropdown */}
          <li
          className={`text-[16px] border-[#FF5900] py-[3px] font-normal hover:text-[#FF5900] hover:border-b-[3px] ${
            currentNav === 5 ? "text-[#FF5900] border-b-[3px]" : "text-black"
          }`}
          onClick={() => setCurrentNav(5)}
        >
          <Link href="/exam_preparation">Exam Preparation</Link>
        </li>
          

          {/* Sponsor a Student */}
          <li
            className={`text-[16px] border-[#FF5900] font-normal hover:text-[#FF5900] hover:border-b-[3px] ${
              currentNav === 7 ? "text-[#FF5900] border-b-[3px]" : "text-black"
            }`}
            onClick={() => setCurrentNav(7)}
          >
            <Link href="/sponsor">Sponsor a Student</Link>
          </li>
        </ul>

        {/* Search Input */}
        <span className="flex lg:hidden">
          <Input
            type="search"
            className="border-r-0 border-[1px] lg:w-[350px] md:w-auto h-[41px] border-black"
            placeholder="Search for class, topics, or anything..."
          />
          <Label className="bg-[#344054] w-[35px] text-white ml-[-35px] h-[41px] rounded-r-md border-r-[2px] flex justify-center items-center">
            <FiSearch />
          </Label>
        </span>

        {/* Book a Tutor Button */}
        <Button className="block text-[#FF5900] text-[16px] bg-[#FFEEE6] hover:text-white">
          <Link href="/">Book a Tutor</Link>
        </Button>
      </div>
    </nav>
  );
}

interface showPageprops{
    showRegPage:(param:any)=>void
    showLoginPage:(param:any)=>void
  
  }

export const MobileNav = ({showRegPage, showLoginPage}:showPageprops) =>{
  const [isClassesDropdownOpen, setIsClassesDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

    return(
        <div
        id="mobile-menu"
        className="absolute bg-[white] top-[80px] right-0 w-[215px] h-[662px] flex-col p-6 z-10  md:hidden"
      >
        <ul className="flex flex-col   gap-[32px]">
        <li className=" leading-[20.02px] text-[18px] font-normal text-[#130F26]">
          <Link href="/">Home</Link>
        </li>
        <li className="leading-[20.02px] text-[18px] font-normal text-[#130F26]"
         onMouseEnter={() => setIsClassesDropdownOpen(true)}
         onMouseLeave={() => setIsClassesDropdownOpen(false)}
        >
          <Link href="">Classes</Link>
          {isClassesDropdownOpen && (
            <div className="flex flex-col bg-white shadow-md w-[120px]">
              <Link href="/classes/ks1" className="px-4 py-2 hover:bg-[#FF5900] hover:text-white text-black">
                KS1
              </Link>
              <Link href="/classes/ks2" className="px-4 py-2 hover:bg-[#FF5900] hover:text-white text-black">
                KS2
              </Link>
              <Link href="/classes/ks3" className="px-4 py-2 hover:bg-[#FF5900] hover:text-white text-black">
                KS3
              </Link>
              <Link href="/classes/ssce" className="px-4 py-2 hover:bg-[#FF5900] hover:text-white text-black">
                SSCE/GCE
              </Link>
            </div>
          )}
        </li>
        <li className="leading-[20.02px] text-[18px] font-normal text-[#130F26]">
          <Link href="/admission_info">Admission Info</Link>
        </li>
        <li className="leading-[20.02px] text-[18px] font-normal text-[#130F26]">
          <Link href="/counselling">Counselling</Link>
        </li>
        <li className="leading-[20.02px] text-[18px] font-normal text-[#130F26]">
          <Link href="/holiday_coaching">Holiday Coaching</Link>
        </li>
        <li className="leading-[20.02px] text-[18px] font-normal text-[#130F26]">
          <Link href="/exam_preparation">Exam Preparation</Link>
        </li>
        <li className="leading-[20.02px] text-[18px] font-normal text-[#130F26]"
         onMouseEnter={() => setIsResourcesDropdownOpen(true)}
         onMouseLeave={() => setIsResourcesDropdownOpen(false)}
        >
          <Link href="">Resources</Link>
          {isResourcesDropdownOpen && (
              <div className="flex flex-col bg-white shadow-md  w-[120px] mt-[16px]">
                <Link
                  href="/resources/teacher"
                  className="px-4 py-2 hover:bg-[#FF5900] hover:text-white text-black "
                >
                  Teacher
                </Link>
                <Link
                  href="/resources/student"
                  className="px-4 py-2 hover:bg-[#FF5900] hover:text-white text-black"
                >
                  Student
                </Link>
              </div>
            )}

        </li>
        
        <li className="leading-[20.02px] text-[18px] font-normal text-[#130F26]">
          <Link href="/sponsor">Sponsor a student</Link>
        </li>
          <li>
          </li>
        </ul>
        <span className="flex justify-center flex-col items-center gap-[5px]">
          <Button className="bg-[#FF5900] text-[16px] text-white w-full" variant="outline" onClick={()=>{showRegPage('')}}>Register</Button>
          <Button className="border-[1px] text-[16px] bg-transparent text-black border-black w-full" variant='default' onClick={()=>{showLoginPage('')}}>Log in</Button>
        </span>
      </div>

    )
}

