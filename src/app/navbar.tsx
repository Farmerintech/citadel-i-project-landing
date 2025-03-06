"use client";
import { useState } from "react";
import Logo from '@/app/assets/Logo.png'
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FiSearch } from "react-icons/fi";
import { Button } from "@/components/ui/button"





export default function HomeNavBar() {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className=" flex  w-[100%]" >
      <nav className=" p-[24px] md:p-0  flex justify-between w-[100%] ">
        {/* Logo */}
        <div className="flex md:hidden bg-white items-center">
          <Image src={Logo} alt="" width={100} height={50} />
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
          
          <div className="flex flex-wrap  justify-between  items-center h-[100px] px-[100px] bg-[#F6C354]">
          <div className=" flex gap-[15px]   items-center">
            <span className="h-[43px] w-[235.64px]"> <Image src={Logo} alt="" layout="responsive"/> </span>
          <p className="text-[14px]">Education is all we do</p>
        </div>
        <span className="flex">   
        <Input type="search" className="border-r-0 border-[1px] w-[350px] h-[41px]  border-black"
         placeholder="serch for class, topics or anything..." />
        <Label className="bg-[#344054] w-[35px] text-white ml-[-35px] h-[41px] rounded-r-md border-r-[2px]
         flex justify-center items-center">
          <FiSearch/>    </Label>
        </span>

        <span className="flex items-center gap-[5px]">

        <Button className="bg-[#FF5900] w-[97px] h-[35px] text-[16px] text-white" variant="outline">
         <Link href='/'>  Register </Link>
          </Button>
        <Button className="border-[1px] text-[16px] bg-transparent w-[97px] h-[35px] text-black border-black " variant='default'>
        <Link href='/'>  Log in  </Link> 
          </Button>

        </span>
          </div>
          <div className="flex px-[100px] py-[16px] items-center border-b-[1px] border-[#F2F4F7]
           flex-wrap justify-between">  
          <ul className=" flex gap-[25px] items-center ">
            <li className="  text-[16px] border-b-[3px]
            border-[#FF5900] py-[3px] font-normal text-[#130F26]">
              <Link href="">Home</Link>
            </li>
            <li className=" text-[16px]  font-normal text-[#130F26]">
              <Link href="#">Classes</Link>
            </li>
            <li className=" text-[16px] font-normal text-[#130F26]">
              <Link href="#">Admission Info</Link>
            </li>
            
            <li className=" text-[16px] font-normal text-[#130F26]">
              <Link href="#">Counselling</Link>
            </li>
            
            
            <li className=" text-[16px] font-normal text-[#130F26]">
              <Link href="#">Holiday Coaching</Link>
            </li>
            
            
            <li className=" text-[16px] font-normal text-[#130F26]">
              <Link href="#">Exam Preparation</Link>
            </li>
            
            
            <li className=" text-[16px] font-normal text-[#130F26]">
              <Link href="#">Library</Link>
            </li>
            
            <li className=" text-[16px] font-normal text-[#130F26]">
              <Link href="#">Sponsor a student</Link>
            </li>
            
        
        
          </ul>

          <Button className="text-[#FF5900] text-[16px] bg-[#FFEEE6]" variant="outline">
         <Link href='/'>  Book a Tutor </Link>
          </Button>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute bg-white top-[80px] left-0 w-full flex-col  p-6  lg:hidden"
          >
            <ul className="flex flex-col  gap-4">
            <li className=" leading-[20.02px] text-[18px] font-normal text-[#130F26]">
              <Link href="">Home</Link>
            </li>
            <li className="leading-[20.02px] text-[18px] font-normal text-[#130F26]">
              <Link href="#">Classes</Link>
            </li>
            <li className="leading-[20.02px] text-[18px] font-normal text-[#130F26]">
              <Link href="#">Admission Info</Link>
            </li>
            
            <li className="leading-[20.02px] text-[18px] font-normal text-[#130F26]">
              <Link href="#">Counselling</Link>
            </li>
            
            
            <li className="leading-[20.02px] text-[18px] font-normal text-[#130F26]">
              <Link href="#">Holiday Coaching</Link>
            </li>
            
            
            <li className="leading-[20.02px] text-[18px] font-normal text-[#130F26]">
              <Link href="#">Exam Preparation</Link>
            </li>
            
            
            <li className="leading-[20.02px] text-[18px] font-normal text-[#130F26]">
              <Link href="#">Library</Link>
            </li>
            
            <li className="leading-[20.02px] text-[18px] font-normal text-[#130F26]">
              <Link href="#">Sponsor a student</Link>
            </li>
            
        
        
              
              <li>
                
              </li>
            </ul>
            

        <span className="flex justify-center items-center gap-[5px]">

<Button className="bg-[#FF5900] text-[16px] text-white" variant="outline">Register</Button>
<Button className="border-[1px] text-[16px] bg-transparent text-black border-black " variant='default'>Log in</Button>

</span>
          </div>
        )}
      </nav>
    </div>
  );
}

