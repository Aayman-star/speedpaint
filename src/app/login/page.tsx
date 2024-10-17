import FormHeader from "@/components/FormHeader";
import LogInForm from "@/components/LogInForm";

const page = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,#000000_65%,#533EAD_100%)]"></div>

      <FormHeader />
      <div className="w-full h-full  flex flex-col items-center ">
        <LogInForm />
      </div>
    </div>
  );
};

export default page;
