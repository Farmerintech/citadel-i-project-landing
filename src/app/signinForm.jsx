"use client";
import Image from "next/image";
import { Eye, EyeOff, ChevronsRight } from "lucide-react";
import { useState } from "react";
import googleLogo from "../app/assets/google.svg";

export const SignInForm = ({
  email,
  password,
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
      {/* Success & Error Messages */}
      {message && <p className="text-green-500 text-sm">{message}</p>}

      {/* Email Field */}
      <label className="text-sm">Email Address</label>
      <input
        type="email"
        className="w-full p-2 border outline-none rounded-lg text-sm border-gray-500 focus:border-black"
        placeholder="Email Address"
        value={email}
        name="email"
        onChange={handleInput}
      />

      {/* Password Field */}
      <div className="relative">
        <label className="text-sm">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          className="w-full p-2 border outline-none rounded-lg text-sm border-gray-500 focus:border-black"
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

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center text-xs">
        <input
          type="checkbox"
          className="mr-2 bg-gray-300 rounded"
          onChange={handleCheck}
          checked={isChecked}
        />
        <div className="flex justify-between w-full">
          <p>Remember me</p>
          <p>
            <a href="#" className="text-orange-500">
              Forgot password?
            </a>
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <button
        className={`w-full ${
          isChecked ? "bg-orange-500" : "bg-gray-400"
        } text-white py-2 rounded-lg text-sm flex gap-3 items-center justify-center`}
        disabled={!isChecked}
      >
        Login
        <ChevronsRight size={24} className="text-white" />
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* OR Divider */}
      <div className="flex items-center my-2">
        <hr className="flex-grow border-gray-300" />
        <span className="text-gray-500 text-xs px-2">Or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Google Sign-in */}
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

      {/* Register Link */}
      <p className="text-center text-xs text-gray-500 mt-2">
        Don't have an account?{" "}
        <a href="/signup" className="text-orange-500">
          Register now!
        </a>
      </p>
    </form>
  );
};
