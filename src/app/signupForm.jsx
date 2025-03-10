"use client";
import Image from "next/image";
import { Eye, EyeOff, ChevronsRight } from "lucide-react";
import { useState } from "react";
import googleLogo from "../app/assets/google.svg";

export const SignUpForm = ({
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
    {/* Name Fields */}
    <p className="text-green-500 text-sm">{message}</p>
    <div className="md:flex gap-3">
      <div className="md:flex-1">
        <label className="text-sm">First Name</label>
        <input 
        value={firstName}
        type="text" className="w-full p-2 border outline-none rounded-[8px] text-sm  border-gray-500 focus:border-black" 
        placeholder="First Name" name='firstName'
        onChange={handleInput}
        />
      </div>
      <div className="flex-1">
      <label className="text-sm">Last name</label>
        <input 
        value={lastName}
        type="text" 
        className="w-full p-2 border outline-none rounded-[8px] text-sm border-gray-500 focus:border-black" 
        placeholder="Last Name" name="lastName" 
        onChange={handleInput}
        />
      </div>
    </div>
    <label className="text-sm">Email Adress</label>
    <input 
    value={email}
    type="email" 
    className="w-full p-2 border outline-none rounded-[8px] text-sm border-gray-500 focus:border-black" 
    placeholder="Email Address" name="email"
    onChange={handleInput}

    />
    <div className="relative">
    <label className="text-sm">Password</label>
      <input
        type={showPassword ? "text" : "password"}
        className="w-full p-2 border outline-none rounded-[8px] text-sm border-gray-500 focus:border-black"
        placeholder="Password"
        value={password}
        name="password"
        onChange={handleInput}
      />
      <button
        type="button"
        className="absolute right-3 top-8 text-gray-500"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
    
    <div className="flex items-center text-xs">
      <input type="checkbox" className="mr-2 bg-" onChange={handleCheck} checked={isChecked}/>
      <span>
        I agree to the citadel-i-project <a href="#" className="text-orange-500">Terms & Conditions</a>
      </span>
    </div>

    {/* Submit Button */}
    <button className={`w-full ${isChecked ? "bg-orange-500":"bg-gray-400"}  text-white py-2 rounded-[8px] text-sm flex gap-3 items-center justify-center`} disabled={!isChecked}>
      Create Account  
      <ChevronsRight size={24} className="text-white" />
    </button>
    <p className="text-red-500 text-sm">{error}</p>
    {/* OR Divider */}
    <div className="flex items-center my-2">
      <hr className="flex-grow border-gray-300" />
      <span className="text-gray-500 text-xs px-2">Or</span>
      <hr className="flex-grow border-gray-300" />
    </div>

    {/* Google Sign-in */}
    <div className="flex items-center justify-center w-full">
         <button className=" w-full rounded-[8px] border border-gray-300 border py-2  rounded-[8px] flex items-center justify-center text-sm">
            <Image src={googleLogo} alt="Google" width={18} height={18} className="mr-2" />
                Continue with Google
         </button>
    </div>

    {/* Already have an account? */}
    <p className="text-center text-xs text-gray-500 mt-2">
      Already have an account? <a href="/signin" className="text-orange-500">Log in</a>
    </p>
  </form>
);
};
