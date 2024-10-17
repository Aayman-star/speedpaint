import { redhat } from "@/lib/fonts";
import Videos from "./Videos";
import UploadSection from "./UploadSection";
const Hero = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center mx-auto relative">
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#0A0A0A_40%,#63e_100%)]"></div> */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(131%_131%_at_50%_-12%,#0A0A0A_40%,#533EAD_41%)]"></div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(162%_162%_at_50%_100%,#0A0A0A_29%,#BC3CF8_30%,transparent_37.5%)] "></div>

      <h1
        className={`${redhat.className} text-white mt-[5.375rem] text-[4rem] max-w-[68.5rem] h-[15rem] text-center leading-[5rem]`}>
        Convert Any Image to a{" "}
        <span className=" bg-gradient-to-r from-[#B71DF6] via-[#5F0BE7] to-[#B71DF6] text-transparent bg-clip-text">
          Hand Drawing Video
        </span>{" "}
        or Whiteboard Animated Video Style
      </h1>
      <p className="text-white mt-8 text-center w-[45.125rem] text-[1.375rem] leading-[1.725rem]">
        Turn your image into a Hand-Drawn Video! Just upload your image then
        pick your options.
      </p>
      <UploadSection />
      <Videos />
    </div>
  );
};

export default Hero;
