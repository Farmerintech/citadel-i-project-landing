"use client";
import { useEffect, useState } from "react";
import Logo from '@/app/assets/Logo.png'
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FiSearch } from "react-icons/fi";
import { Button } from "@/components/ui/button"
import {getCurrentNav} from "@/app/utils/getCurrentNav"
import { useRouter, usePathname } from 'next/navigation';
interface showPageprops{
  showRegPage:(param:any)=>void
  showLoginPage:(param:any)=>void

}


export default function HomeNavBar({showRegPage, showLoginPage}:showPageprops) {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [currentNav, setCurrentNav] = useState(0);
  const pathname = usePathname(); 

  useEffect(() => {
    const navIndex = getCurrentNav(pathname);
    setCurrentNav(navIndex);
  }, [pathname]); 
  return (
    <div className=" flex  w-[100%] bg-[#FEF6E6] md:bg-[#FFFFFF]" >
      <nav className=" p-[24px] md:p-0  flex justify-between w-[100%] ">
        {/* Logo */}
        <div className="flex md:hidden items-center">
          <Image src={Logo} alt="" width={182} height={33.36} />
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-[#000] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className=" md:flex w-[100%] gap-5 flex-col hidden">
          
          <div className="flex justify-between  items-center md:gap-[16px] h-[100px] md:px-[50px] px-[100px] bg-[#FEF6E6]">
          <div className=" flex gap-[15px] md:gap-[8px]  items-center">
            <span className="lg:h-[43px] lg:w-[235.64px] md:w-[180px] "> 
              <Image src={Logo} alt="" layout="responsive"/> </span>
          <p className="text-[14px] ">Education is all we do</p>
        </div>
        <span className="lg:flex hidden ">   
        <Input type="search" className="border-r-0  border-[1px] lg:w-[350px] md:w-auto h-[41px]  border-black"
         placeholder="serch for class, topics or anything..." />
        <Label className="bg-[#344054] w-[35px] text-white ml-[-35px] h-[41px] rounded-r-md border-r-[2px]
         flex justify-center items-center">
          <FiSearch/>    
        </Label>
        </span>
        <span className="flex items-center gap-[5px]">
        <Button className="bg-[#FF5900] w-[97px] h-[35px] text-[16px] text-white"  onClick={()=>{showRegPage('')}}>
         Register 
          </Button>
        <Button className="border-[1px] text-[16px] bg-transparent w-[97px] h-[35px] text-black border-black " variant='default' onClick={()=>{showLoginPage('')}}>
        <Link href='/'>  Log in  </Link> 
          </Button>

        </span>
          </div>
          <div className="flex px-[100px] py-[16px] lg:items-center  border-b-[1px] border-[#F2F4F7]
            lg:justify-between ">  
          <ul className=" flex gap-[25px] items-center flex-wrap md:justify-center">
            <li className={`text-[16px] 
            border-[#FF5900] py-[3px]  font-normal text-[#130F26] hover:text-[#FF5900] hover:border-b-[3px] ${currentNav===0 ? "text-[#FF5900] border-b-[3px]": "text-black"}`} onClick={()=>{setCurrentNav(0)}}>
              <Link href="/">Home</Link>
            </li>
            <li className={`text-[16px] 
            border-[#FF5900] py-[3px] font-normal text-[#130F26] hover:text-[#FF5900] hover:border-b-[3px] ${currentNav===1 ? "text-[#FF5900] border-b-[3px]": "text-black"}`} onClick={()=>{setCurrentNav(1)}}>
              <Link href="/classes">Classes</Link>
            </li>
            <li className={`text-[16px] 
            border-[#FF5900] py-[3px] font-normal text-[#130F26] hover:text-[#FF5900] hover:border-b-[3px] ${currentNav===2 ? "text-[#FF5900] border-b-[3px]": "text-black"}`} onClick={()=>{setCurrentNav(2)}}>
              <Link href="/admission_info">Admission Info</Link>
            </li>
            
            <li className={`text-[16px] 
            border-[#FF5900] py-[3px] font-normal text-[#130F26] hover:text-[#FF5900] hover:border-b-[3px] ${currentNav ===3 ? "text-[#FF5900] border-b-[3px]": "text-black"}`} onClick={()=>{setCurrentNav(3)}}>
              <Link href="/counselling">Counselling</Link>
            </li>
            <li className={`text-[16px] 
            border-[#FF5900] py-[3px] font-normal text-[#130F26] hover:text-[#FF5900] hover:border-b-[3px] ${currentNav ===4 ? "text-[#FF5900] border-b-[3px]": "text-black"}`} onClick={()=>{setCurrentNav(4)}}>
              <Link href="/holiday_coaching">Holiday Coaching</Link>
            </li>
            <li className={`text-[16px] 
            border-[#FF5900] py-[3px] font-normal text-[#130F26] hover:text-[#FF5900] hover:border-b-[3px] ${currentNav ===5 ? "text-[#FF5900] border-b-[3px]": "text-black"}`} onClick={()=>{setCurrentNav(5)}}>
              <Link href="/exam_preparation">Exam Preparation</Link>
            </li>
            <li className={`text-[16px] 
            border-[#FF5900] py-[3px] font-normal text-[#130F26] hover:text-[#FF5900] hover:border-b-[3px] ${currentNav ===6 ? "text-[#FF5900] border-b-[3px]": "text-black"}`} onClick={()=>{setCurrentNav(6)}}>
              <Link href="/library">Library</Link>
            </li>
            <li className={`text-[16px] 
            border-[#FF5900] py-[3px] font-normal text-[#130F26] hover:text-[#FF5900] hover:border-b-[3px] ${currentNav ===7 ? "text-[#FF5900] border-b-[3px]": "text-black"}`} onClick={()=>{setCurrentNav(7)}}>
              <Link href="/sponsor">Sponsor a student</Link>
            </li>
          </ul>
          <Button className="md:hidden lg:block text-[#FF5900] text-[16px] bg-[#FFEEE6] hover:text-white" >
              <Link href='/'>  Book a Tutor </Link>
          </Button>
        </div>
        </nav>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute bg-[white] top-[80px] right-0 w-[215px] h-[662px] flex-col p-6 z-10  lg:hidden"
          >
            <ul className="flex flex-col   gap-[32px]">
            <li className=" leading-[20.02px] text-[18px] font-normal text-[#130F26]">
              <Link href="/">Home</Link>
            </li>
            <li className="leading-[20.02px] text-[18px] font-normal text-[#130F26]">
              <Link href="/classes">Classes</Link>
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
            <li className="leading-[20.02px] text-[18px] font-normal text-[#130F26]">
              <Link href="/library">Library</Link>
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
        )}
      </nav>
    </div>
  );
}

