"use client";
import { redhat, mulish, lato } from "@/lib/fonts";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import Image from "next/image";
import googlelogo from "@/assets/googlelogo.svg";

const SignUpForm = () => {
  return (
    <div className="w-[40%]">
      <div className="w-[480px] mb-12 mx-auto">
        {" "}
        <h1
          className={`text-white ${redhat.className} text-[4rem] leading-[5rem] text-center`}>
          Sign Up
        </h1>
        <p className={`text-[#878787] text-center text-lg ${mulish.className}`}>
          Create a new account
        </p>
      </div>

      <div className="w-[480px] mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col gap-y-2 mb-4">
          <Button className="h-[2.6875rem] border border-white rounded-[12px] bg-tranparent hover:bg-transparent">
            <Image src={googlelogo} alt="google-logo" className="mr-1" />
            <p className={`${lato.className} text-lg text-white`}>
              Sign Up with Google
            </p>
          </Button>
          <p
            className={`text-[#878787] text-center ${mulish.className} text-lg`}>
            Or,use your email instead
          </p>
        </div>
        <div className="w-full flex flex-col gap-y-2 mb-4">
          <Label htmlFor="Email" className="text-[#E6E6E6]">
            Email*
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Type here"
            className="bg-[#1F1F1F] border border-[#1F1F1F] rounded-lg h-[2.85rem] text-white"
          />
        </div>
        <div className="w-full flex flex-col gap-y-2 mb-4">
          <Label htmlFor="Password" className="text-[#E6E6E6]">
            Password*
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="Type here"
            className="bg-[#1F1F1F] border border-[#1F1F1F] rounded-lg h-[2.85rem] text-white"
          />
        </div>
        <div className="w-full flex flex-col gap-y-2 mb-4">
          <Label htmlFor="Repeat Password*" className="text-[#E6E6E6]">
            Repeat Password*
          </Label>
          <Input
            type="repeat password"
            id="repeat password"
            placeholder="Type here"
            className="bg-[#1F1F1F] border border-[#1F1F1F] rounded-lg h-[2.85rem] text-white"
          />
        </div>
        <div className="w-full flex flex-col gap-y-4 mb-4">
          <Button className="h-[2.945rem]  rounded-[12px]  bg-[#BC3CF8] hover:bg-[#BC3CF8] px-[0.65rem] py-5 border border-[#BC3CF8]">
            <p className={`${lato.className} text-lg text-white `}>Sign Up</p>
          </Button>
          <p className={`${mulish.className} text-center text-white `}>
            Already have an account?
            <span className={`text-[#BC3CF8] ${lato.className} text-lg ml-2`}>
              {" "}
              Log In.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
