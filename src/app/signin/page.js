"use client";
import { useState } from "react";
import { SignInForm } from "../signinForm";
import { AuthPage } from "../authRightPage";
import { handleForm } from "../utils/authApi"; // Import function

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [data, setData] = useState();
  const [isChecked, setIsChecked] = useState(false);

  const handleInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleCheck = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section className="flex items-start md:items-center justify-center h-screen bg-white ">
      <div className="md:flex w-full max-w-4xl h-[60vh] md:h-[90vh] bg-white rounded-lg shadow lg:overflow-hidden">
        {/* Left Side - Background Image */}
        <AuthPage />
        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-15 bg-color">
          <h3 className="text-xl font-bold text-left">Welcome Back</h3>
          <p className="text-gray-500 text-xs text-left mb-3">
            Login to your account
          </p>
          <SignInForm
            email={formData.email}
            password={formData.password}
            handleForm={(event) => handleForm(event, 'http://localhost:8000/api/v1/auth/student/signin', formData, setError, setMessage, setData, setFormData)}
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
