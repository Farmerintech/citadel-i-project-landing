"use client";

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Homenav from '@/app/navbar'
import Unipage from '@/app/unipage'
import Home from '@/app/home'
import Footer from '@/app/footer'
import SignUpPage from "@/app/signup/signupPage"
import SignInPage from "@/app/signin/signinPage"
import { toggle } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import { Hero } from './homePage/hero';
import { Subjects, Ks } from './homePage/subjects';

export default function page() {
  const [showReg, setShowReg] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const showRegPage = () =>{
    toggle(setShowReg, showReg); // then toggle the registration page
  }
  const showLoginPage = () =>{
    setShowLogin(!showLogin)
  }
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleCloseOverlay = (event:MouseEvent)=>{
    if(overlayRef.current && !overlayRef.current?.contains(event.target as Node)){
      setShowReg(false)

    }
  }

  useEffect(()=>{
    overlayRef.current?.addEventListener('click', handleCloseOverlay)
    return ()=>{
      overlayRef.current?.removeEventListener('click', handleCloseOverlay)

    }
  }, [handleCloseOverlay])
  
  const searchParams = useSearchParams();

  const showLoginParam = searchParams.get('showLogin');
  const showRegParam = searchParams.get('showReg');

 

  useEffect(() => {
    if (showLoginParam === 'true') {
      setShowLogin(true);
    }
    if (showRegParam === 'true') {
      setShowReg(true);
    }
    if (showLoginParam || showRegParam) {
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [showLoginParam, showRegParam]);


  return (
    <main className={`${showReg || showLogin ? 'overflow-hidden bg-[#0000008F] md:bg-[white] bg-opacity-50 md:bg-opacity-50 h-[1154px] md:h-[732px]':''}`}>
      {showReg  && 
      <div className='md:fixed absolute pl-5 pr-5 pt-5 md:p-0 inset-0 bg-[#0000008F] bg-opacity-50  z-40' ref={overlayRef}>
        <SignUpPage setShowReg={setShowReg}/>
      </div>
      }
      {showLogin  && 
      <div className='md:fixed absolute p-10 md:p-0 inset-0 bg-[#0000008F] bg-opacity-50  z-40'>
        <SignInPage setShowLogin={setShowLogin}/>
      </div>
      }
      <Homenav showRegPage={showRegPage} showLoginPage={showLoginPage}/>
      <Hero/>
      <section className="md:px-[100px] px-[24px]">
        <Subjects/>
        <Ks/>
      </section>
      <Unipage />
      <Home/>
      <Footer/>
  </main>
  )
}