import { Button } from "./ui/button";
import { lato } from "@/lib/fonts";

export const Blog = () => {
  return (
    <Button
      className={`${lato.className} bg-transparent hover:bg-transparent text-white text-lg `}>
      Blog
    </Button>
  );
};
export const LogInButton = () => {
  return (
    <Button
      className={`${lato.className} bg-transparent hover:bg-transparent text-white text-lg border-[0.5px] rounded-xl`}>
      Log In
    </Button>
  );
};
export const SignUpButton = () => {
  return (
    <Button
      className={`${lato.className} text-lg bg-white text-gray-900 hover:bg-white rounded-xl`}>
      Sign Up
    </Button>
  );
};
