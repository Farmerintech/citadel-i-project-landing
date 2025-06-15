"use client";

import { useState } from "react";
import { SignUpForm } from "./signupForm";
import { AuthPage } from "../authRightPage";
import { handleForm as handleSignupForm } from "@/app/utils/authApi";
import { X } from "lucide-react";
import { FormDataType } from "@/app/utils/authApi"; // import the interface

interface SignUpPageProps {
  setShowReg: (show: boolean) => void;
}

export default function SignUpPage({ setShowReg }: SignUpPageProps) {
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState<string | undefined>();
  const [message, setMessage] = useState<string | undefined>();
  const [data, setData] = useState<any>();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section className="flex items-start md:items-center justify-center md:h-screen h-auto">
      <div className="md:flex w-full md:max-w-4xl h-[100vh] md:h-[85vh] md:rounded-lg shadow md:overflow-hidden">
        <AuthPage />
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-15 bg-orange-50 rounded-b-lg md:rounded-b-none gap-3">
          <div
            className="w-[50px] h-[50px] rounded-full flex items-center justify-center absolute md:right-0 top-6 md:top-12 right-[0%] lg:right-[10%] bg-white"
            onClick={() => setShowReg(false)}
          >
            <X />
          </div>

          <h3 className="text-xl font-bold text-left">Register</h3>
          <p className="text-gray-500 text-xs text-left mb-3">
            Let’s get you started by first creating your account
          </p>

          <SignUpForm
             email={formData.email}
             password={formData.password}
             firstName={formData.firstName || ""}
             lastName={formData.lastName || ""}
            handleInput={handleInput}
            handleForm={(e) =>
              handleSignupForm(
                e,
                "https://citadel-i-project.onrender.com/api/v1/user/auth/signup",
                formData,
                setError,
                setMessage,
                setData,
                setFormData,
                true
              )
            }
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
