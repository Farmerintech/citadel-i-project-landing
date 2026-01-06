"use client";

import { SignUpForm } from "@/app/authPage/signup/signupForm";
import { X } from "lucide-react";

interface SignUpPageProps {
  setShowReg: (show: boolean) => void;
}



export default function SignUpPage() {
  return (
     <section className="flex items-center justify-center w-full h-screen bg-[#FFEEE6]">
          <div className="w-full md:w-2/4 flex flex-col justify-center p-6 md:p-16 gap-3">
            <h3 className="text-xl font-bold text-left">Sign Up</h3>
            <p className="text-gray-500 text-xs text-left mb-3">
              Welcome back! Please sign in to your account.
            </p>
            <SignUpForm />
          </div>
        </section>
  );
}
