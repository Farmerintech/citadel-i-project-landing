"use client";
import { useState, ChangeEvent } from "react";
import { SignInForm } from "./signinForm";
import { AuthPage } from "../authRightPage";
import { X } from "lucide-react";
import { handleForm } from "@/app/utils/authApi";
import { FormDataType } from "@/app/utils/authApi"; // import the interface

interface SignInPageProps {
  setShowLogin: (show: boolean) => void;
}

export default function SignInPage({ setShowLogin }: SignInPageProps) {
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | undefined>();
  const [message, setMessage] = useState<string | undefined>();
  const [data, setData] = useState<any>();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section className="flex items-start md:items-center justify-center h-screen">
      <div className="md:flex w-[311px] md:w-full md:max-w-4xl h-[60vh] md:h-[85vh] rounded-lg shadow md:overflow-hidden">
        {/* Left Side */}
        <AuthPage />

        {/* Close Button */}
        <div
          className="w-[50px] h-[50px] rounded-full flex items-center justify-center absolute md:right-0 top-6 md:top-12 right-[0%] lg:right-[10%] bg-white"
          onClick={() => setShowLogin(false)}
        >
          <X />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-15 bg-orange-50 rounded-b-lg md:rounded-b-none">
          <h3 className="text-xl font-bold text-left">Welcome Back</h3>
          <p className="text-gray-500 text-xs text-left mb-3">
            Login to your account
          </p>
          <SignInForm
             email={formData.email}
             password={formData.password}
             handleForm={(event) =>
              handleForm(
                event,
                "https://citadel-i-project.onrender.com/api/v1/user/auth/signin",
                formData,
                setError,
                setMessage,
                setData,
                setFormData,
                false
              )
            }
            handleInput={handleInput}
            handleCheck={handleCheck}
            message={message}
            error={error}
            isChecked={isChecked}
          />
        </div>
      </div>
    </section>
  );
}
