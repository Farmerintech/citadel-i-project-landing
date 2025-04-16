"use client"

import React, { ChangeEvent, useState } from "react"
import { Eye, EyeOff, ChevronsRight } from "lucide-react";

export default function AdminLogin() {
const [data, setData] = useState<any>({
    email:"",
    password:""
});
const [error, setError] = useState <string>()
const [showPassword, setShowPassword] = useState <boolean>(false)
const handleInput = (event: ChangeEvent<HTMLInputElement>) =>{
    setData({
        ...data,
        [event.target.name]: event.target.value,
        
        })
}

const handleForm = async (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    if (!data.email || data.email.trim() === "") {
        setError("Email is not allowed to be empty");
        return;
      }
    
      if (!data.password || data.password.length < 8) {
        setError("Password is too short");
        return;
      }
    
      try {
        const response = await fetch("https://citadel-i-project.onrender.com/api/v1/admin/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        const result = await response.json();
        setData(result);
    
        if (result.status === 201) {
        } else {
          setError(result?.message || "Something went wrong");
        }
    
        setData({ email: "", password: "", firstName: "", lastName: "" });
      } catch (error) {
        console.error(error);
        setError("Error connecting to server");
      }
  
}
    return(
        <section className="flex items-center justify-center content-center min-h-screen mx-w-[448px] gap-[40px] flex-col bg-[#F3F3F3]">
            <div>
                
            </div>
            <div className="flex ">
                <h2 className="font-[500] text-[32px]">Login</h2>
            </div>
            <aside className="bg-[#FFFFFF] p-[24px] gap-[46px] rounded-[8px] flex flex-col">
            <form className="space-y-3" onSubmit={handleForm}>
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <label className="text-sm">Email Address</label>
      <input
        type="email"
        className="w-full p-2 border outline-none rounded-[8px] text-sm border-gray-500 focus:border-black"
        placeholder="Email Address"
        value={data.email}
        name="email"
        onChange={handleInput}
      />

      <div className="relative">
        <label className="text-sm">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          className="w-full p-2 border outline-none rounded-[8px] text-sm border-gray-500 focus:border-black"
          placeholder="Password"
          value={data.password}
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
      <button className={`w-full bg-orange-500 text-white py-2 rounded-lg text-sm flex gap-3 items-center justify-center`}>Login</button>
    </form>
    </aside>
</section>
    )
}