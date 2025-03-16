import HomeNavBar from "@/app/navbar"
import { useState } from "react"

export const Myclass = () =>{
  const [showReg, setShowReg] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const showRegPage = () =>{
    setShowReg(!showReg)
  }
  const showLoginPage = () =>{
    setShowLogin(!showLogin)
  }

    return(
        <>
        <HomeNavBar showRegPage={showRegPage} showLoginPage={showLoginPage}/>
        </>
    )
}