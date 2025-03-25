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
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import NavBar, { MobileNav } from "./navBar/navBar";

interface showPageprops{
    showRegPage:(param:any)=>void
    showLoginPage:(param:any)=>void
  
  }

export default function Header({showRegPage, showLoginPage}:showPageprops) {
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
    <header className=" flex  w-[100%] bg-[#FEF6E6] md:bg-[#FFFFFF]" >
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
                <span className="lg:flex md:hidden">
                  <Input
                    type="search"
                    className="border-r-0 border-[1px] lg:w-[300px] md:w-auto h-[41px] border-black"
                    placeholder="Search for class, topics, or anything..."
                  />
                  <Label className="bg-[#344054] w-[35px] text-white ml-[-35px] h-[41px] rounded-r-md border-r-[2px] flex justify-center items-center">
                    <FiSearch />
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
          <NavBar/>

          </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <MobileNav showRegPage={showRegPage} showLoginPage={showLoginPage}/>
        )}
      </nav>
    </header>
  );
}


