import FormHeader from "@/components/FormHeader";
import SignUpForm from "@/components/Form";
import Image from "next/image";
// import bg from "@/assets/bg-signup.png";

const page = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,#000000_65%,#533EAD_100%)]"></div>

      <FormHeader />
      <div className="w-full h-full  flex flex-col items-center ">
        <SignUpForm />
      </div>
    </div>
  );
};

export default page;
//h-lvh absolute inset-0 bg-[url('/bg-one.png')] bg-cover bg-bottom
{
  /* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */
}
{
  /* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#0A0A0A_65%,#533EAD_100%)]"></div> */
}
{
  /* <div className="  absolute w-full h-full inset-0 -z-10 bg-gradient-to-b from-black to-purple-900" /> */
}
{
  /* <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-black via-black to-transparent">
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-purple-900/50 to-transparent" />
        <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-gradient-to-tr from-purple-900/50 to-transparent" />
        <div className="absolute right-0 bottom-0 w-1/4 h-1/4 bg-gradient-to-tl from-purple-900/50 to-transparent" />
      </div> */
}
