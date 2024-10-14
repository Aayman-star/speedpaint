import Image from "next/image";
import logo from "@/assets/logo.png";
import { LogInButton, SignUpButton, Blog } from "./Buttons";
const Header = () => {
  return (
    <div className="w-[90rem] h-[4.5rem] mx-auto px-8 py-[0.9rem] ">
      <div className="w-[95%] mx-auto flex items-center justify-between">
        <Image src={logo} alt="logo" />
        <div className="flex items-center gap-x-4">
          <Blog />
          <LogInButton />
          <SignUpButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
