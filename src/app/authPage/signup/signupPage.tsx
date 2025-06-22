"use client";

import { X } from "lucide-react";
import { SignUpForm } from "./signupForm";
import { AuthPage } from "../authRightPage";

interface SignUpPageProps {
  setShowReg: (show: boolean) => void;
}

export default function SignUpPage({ setShowReg }: SignUpPageProps) {
  return (
    <section className="flex items-start md:items-center justify-center h-screen bg-orange-50 px-4">
      <div className="md:flex w-full md:max-w-4xl h-auto md:h-[85vh] md:rounded-lg shadow-lg overflow-hidden bg-white relative">
        {/* Left Auth graphic/illustration section */}
        <div className="hidden md:block md:w-1/2 bg-orange-100">
          <AuthPage />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 bg-white relative flex flex-col justify-center">
          {/* Close button */}
          <button
            onClick={() => setShowReg(false)}
            className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow"
            aria-label="Close signup form"
          >
            <X size={20} />
          </button>

          <h2 className="text-2xl font-bold text-gray-800 mb-1">Register</h2>
          <p className="text-sm text-gray-500 mb-6">
            Let’s get you started by creating your account.
          </p>

          <SignUpForm />
        </div>
      </div>
    </section>
  );
}
