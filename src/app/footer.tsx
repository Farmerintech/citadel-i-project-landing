import React from "react";
import Logo from "@/app/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function footer() {
  return (
    <>
      <section className="bg-[#3E414A] h-auto md:flex flex-col gap-[32px] px-[24px]  py-[32px] lg:px-[100px] md:px-[48px]">
        <div className="md:flex justify-between grid grid-col-1 gap-[25px]">
          <aside className="fex flex-col gap-[16px] flex-1">
            <span className=" flex flex-col gap-[15px]  ">
              <span className="h-[43px] w-[235.64px]">
                {" "}
                <Image src={Logo} alt="" layout="responsive" />{" "}
              </span>
              <p className="text-[14px] text-white">Education is all we do</p>
            </span>
            <span className="">
              <p className="text-[14px] text-[#F1A500]">Address</p>
              <p className="text-[14px] text-white">
                20, Odofin street, Ijora lagos.
              </p>
            </span>

            <span className="">
              <p className="text-[14px] text-[#F1A500]">Phone Number</p>
              <p className="text-[14px] text-white">08069122739</p>
            </span>

            <span className="">
              <p className="text-[14px] text-[#F1A500]">Email</p>
              <p className="text-[14px] text-white">
                ayindebashir861@gmail.com
              </p>
            </span>
          </aside>

          <aside className="flex-1">
            <ul className="flex flex-col gap-[9px]">
              <p className="text-white font-bold text-[16px]">Quick Links</p>
              <li className="text-white text-[14px]">Classes</li>

              <li className="text-white text-[14px]">Admission Info</li>

              <li className="text-white text-[14px]">Counselling</li>

              <li className="text-white text-[14px]">Library</li>

              <li className="text-white text-[14px]">Holiday Coaching</li>
            </ul>
          </aside>

          <aside className="flex flex-col gap-[16px] flex-1">
            <p className="text-white font-bold text-[16px]">
              Send Us a Message
            </p>
            <Input placeholder="Name" className=""/>
            <Textarea placeholder="Your Message" className="" />
            <Button className="bg-[#FF5900] text-white">Submit</Button>
          </aside>
        </div>
        <div className="md:flex md:justify-between text-center mt-8">
          <p className="text-white text-[14px]">
            Copyright &copy; 2025 Citadel-i-Projects
          </p>
          <span className="text-white text-[14px] justify-center flex gap-[32px]">
            <p className="">Terms and Condition</p>
            <p className="">Privacy Policy</p>
          </span>
        </div>
      </section>
    </>
  );
}
