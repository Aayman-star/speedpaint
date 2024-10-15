import FormHeader from "@/components/FormHeader";
import Form from "@/components/Form";

const page = () => {
  return (
    <div className="w-full relative h-[1024px]">
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#0A0A0A_65%,#533EAD_100%)]"></div>
      <FormHeader />
      <div className="w-full h-screen flex flex-col items-center mt-[6.75rem] ">
        <Form />
      </div>
    </div>
  );
};

export default page;
