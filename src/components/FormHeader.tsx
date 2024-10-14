import Image from "next/image";
import logo from "@/assets/logo.png";

const FormHeader = () => {
  return (
    <div className="w-full border-b-[0.5px] border-[#424242]">
      <div className="w-[90rem] mx-auto grid place-content-center py-[1rem] ">
        <Image src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default FormHeader;
