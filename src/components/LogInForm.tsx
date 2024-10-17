"use client";
import { redhat, mulish, lato } from "@/lib/fonts";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import Image from "next/image";
import googlelogo from "@/assets/googlelogo.svg";

const LogInForm = () => {
  return (
    <div className="w-[40%] h-full ">
      <div className="w-[480px] mb-12 mx-auto  pt-[5rem]">
        {" "}
        <h1
          className={`text-white ${redhat.className} text-[4rem] leading-[5rem] text-center`}>
          Log In
        </h1>
        <p className={`text-[#878787] text-center text-lg ${mulish.className}`}>
          Log in to your account to continue
        </p>
      </div>

      <div className="w-[480px] mx-auto flex flex-col items-center pb-10">
        <div className="w-full flex flex-col gap-y-2 mb-4">
          <Button className="h-[2.6875rem] border border-white rounded-[12px] bg-tranparent hover:bg-transparent">
            <Image src={googlelogo} alt="google-logo" className="mr-1" />
            <p className={`${lato.className} text-lg text-white`}>
              Log In with Google
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
        <div className="w-full flex items-center justify-between  mb-4">
          {/* <input
            id="default-checkbox"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Default checkbox
          </label>
          <p className={`text-[#BC3CF8] text-lg ${lato.className}`}>
            Forgort your password
          </p> */}
        </div>

        <div className="w-full flex flex-col gap-y-4 mb-4">
          <Button className="h-[2.945rem]  rounded-[12px]  bg-[#BC3CF8] hover:bg-[#BC3CF8] px-[0.65rem] py-5 border border-[#BC3CF8]">
            <p className={`${lato.className} text-lg text-white `}>Log In</p>
          </Button>
          <p className={`${mulish.className} text-center text-white `}>
            Don't have an account?
            <span className={`text-[#BC3CF8] ${lato.className} text-lg ml-2`}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
