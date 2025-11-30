import { Button } from "@/components/UI/Button";
import { Github, Mail } from "lucide-react";
import { ButtonOnClick } from "@/types/react-events";


export function AuthSocialButtons({ sendSocialAuth }: any) {
  
  function handleButtonClick(value: string, e: ButtonOnClick) {
      e.preventDefault();
      sendSocialAuth(value);
  }
  return (
    <div className="flex flex-col space-y-3">
      <Button type="button"
        onClick={(e) => handleButtonClick("github", e)}
        className="w-full rounded-xl flex items-center gap-2 cursor-pointer bg-black text-white hover:bg-gray-800 transition-colors duration-300 ease-in-out"
      >
        <Github size={18} /> Continue with GitHub
      </Button>
      <Button
        type="button"
        onClick={(e) => handleButtonClick("google", e)}
        className="w-full rounded-xl flex items-center gap-2 cursor-pointer bg-white text-black border border-gray-300 hover:bg-gray-100 transition-colors duration-300 ease-in-out"
      >
        <Mail size={18} /> Continue with Google
      </Button>
    </div>
  );
}
