"use client";

import React, { useEffect, useRef, useState } from 'react'

import Unipage from '@/app/homePage/unipage'
import Home from '@/app/homePage/home'
import Footer from '@/app/footer'
import SignUpPage from "@/app/authPage/signup/signupPage"
import SignInPage from "@/app/authPage/signin/signinPage"
import { toggle } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import { Hero } from './homePage/hero';
import { Subjects, Ks } from './homePage/subjects';
import Header from '@/app/navbar';

export default function page() {



  return (
    <main className={` bg-white`}>
     
      {/* <Homenav showRegPage={showRegPage} showLoginPage={showLoginPage}/> */}
      <Header />
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