"use client";

import Image from "next/image";
import { Eye, EyeOff, ChevronsRight } from "lucide-react";
import { useState } from "react";
import googleLogo from "@/app/assets/google.svg";

interface SignUpFormProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleForm: (e: React.FormEvent<HTMLFormElement>) => void;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  message?: string;
  error?: string;
  isChecked: boolean;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({
  email,
  password,
  firstName,
  lastName,
  handleInput,
  handleForm,
  handleCheck,
  message,
  error,
  isChecked,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-3" onSubmit={handleForm}>
      <p className="text-green-500 text-sm">{message}</p>

      <div className="md:flex gap-3">
        <div className="md:flex-1">
          <label className="text-sm">First Name</label>
          <input
            value={firstName}
            type="text"
            name="firstName"
            onChange={handleInput}
            placeholder="First Name"
            className="w-full p-2 border outline-none rounded-[8px] text-sm border-gray-500 focus:border-black"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm">Last Name</label>
          <input
            value={lastName}
            type="text"
            name="lastName"
            onChange={handleInput}
            placeholder="Last Name"
            className="w-full p-2 border outline-none rounded-[8px] text-sm border-gray-500 focus:border-black"
          />
        </div>
      </div>

      <label className="text-sm">Email Address</label>
      <input
        value={email}
        type="email"
        name="email"
        onChange={handleInput}
        placeholder="Email Address"
        className="w-full p-2 border outline-none rounded-[8px] text-sm border-gray-500 focus:border-black"
      />

      <div className="relative">
        <label className="text-sm">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          name="password"
          onChange={handleInput}
          placeholder="Password"
          className="w-full p-2 border outline-none rounded-[8px] text-sm border-gray-500 focus:border-black"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-8 text-gray-500"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <div className="flex items-center text-xs">
        <input
          type="checkbox"
          className="mr-2"
          checked={isChecked}
          onChange={handleCheck}
        />
        <span>
          I agree to the citadel-i-project{" "}
          <a href="#" className="text-orange-500">
            Terms & Conditions
          </a>
        </span>
      </div>

      <button
        disabled={!isChecked}
        className={`w-full ${
          isChecked ? "bg-orange-500" : "bg-gray-400"
        } text-white py-2 rounded-[8px] text-sm flex gap-3 items-center justify-center`}
      >
        Create Account
        <ChevronsRight size={24} />
      </button>

      <p className="text-red-500 text-sm">{error}</p>

      <div className="flex items-center my-2">
        <hr className="flex-grow border-gray-300" />
        <span className="text-gray-500 text-xs px-2">Or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="flex items-center justify-center w-full">
        <button className="w-full rounded-[8px] border border-gray-300 py-2 flex items-center justify-center text-sm">
          <Image
            src={googleLogo}
            alt="Google"
            width={18}
            height={18}
            className="mr-2"
          />
          Continue with Google
        </button>
      </div>

      <p className="text-center text-xs text-gray-500 mt-2">
        Already have an account?{" "}
        <a href="/signin" className="text-orange-500">
          Log in
        </a>
      </p>
    </form>
  );
};
