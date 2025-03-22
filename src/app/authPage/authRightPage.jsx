import logo from "@/app/assets/Logo.svg";
import asideImage from "@/app/assets/reg.jpg";
import Image from "next/image";

export const AuthPage = () =>{
    return(
        <div className="relative md:flex w-full md:w-1/2 h-full ">
        <Image
          src={asideImage}
          alt="Education background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 rounded-t-lg md:rounded-t-none"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0F0F0FAD] rounded-t-lg md:rounded-t-none"></div>
        {/* Logo & Text */}
        <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
          <Image src={logo} alt="Citadel logo" width={100} height={30} />
          <p className="text-white text-xs">| Education is all we do</p>
        </div>
        {/* Quote */}
        <div className="absolute bottom-20 left-12 md:left-30 right-5 text-white md:text-md font-semibold z-10 w-7/10 md:w-1/2 ">
          <p className="text-left">“The beautiful thing about learning is that no one can take it away from you.”</p>
          <p className="text-xs text-right mt-10 right-0">– B.B. King</p>
        </div>
      </div>
    )
}