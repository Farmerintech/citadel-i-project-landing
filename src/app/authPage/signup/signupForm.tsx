"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff, ChevronsRight } from "lucide-react";
import googleLogo from "@/app/assets/google.svg";

export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const { firstName, lastName, email, password } = formData;

    // Basic validation
    if (!firstName.trim()) return setError("First Name cannot be empty");
    if (!lastName.trim()) return setError("Last Name cannot be empty");
    if (!email.trim()) return setError("Email cannot be empty");
    if (password.length < 8) return setError("Password is too short");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.status === 201) {
        setMessage(result?.message || "Account created successfully");
        setFormData({ email: "", password: "", firstName: "", lastName: "" });
        setIsChecked(false);
      } else {
        setError(result?.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setError("Error connecting to server");
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <p className="text-green-500 text-sm">{message}</p>

      <div className="md:flex gap-3">
        <div className="md:flex-1">
          <label className="text-sm">First Name</label>
          <input
            value={formData.firstName}
            type="text"
            name="firstName"
            onChange={handleInput}
            placeholder="First Name"
            className="w-full p-2 border rounded-[8px] text-sm border-gray-500 outline-none focus:border-black"
          />
        </div>
        <div className="flex-1">
          <label className="text-sm">Last Name</label>
          <input
            value={formData.lastName}
            type="text"
            name="lastName"
            onChange={handleInput}
            placeholder="Last Name"
            className="w-full p-2 border rounded-[8px] text-sm border-gray-500 outline-none focus:border-black"
          />
        </div>
      </div>

      <label className="text-sm">Email Address</label>
      <input
        value={formData.email}
        type="email"
        name="email"
        onChange={handleInput}
        placeholder="Email Address"
        className="w-full p-2 border rounded-[8px] text-sm border-gray-500 outline-none focus:border-black"
      />

      <div className="relative">
        <label className="text-sm">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          value={formData.password}
          name="password"
          onChange={handleInput}
          placeholder="Password"
          className="w-full p-2 border rounded-[8px] text-sm border-gray-500 outline-none focus:border-black"
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
        type="submit"
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
        <button
          type="button"
          className="w-full rounded-[8px] border border-gray-300 py-2 flex items-center justify-center text-sm"
        >
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
