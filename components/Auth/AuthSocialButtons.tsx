import { Button } from "@/components/UI/button";
import { Github, Mail } from "lucide-react";

export function AuthSocialButtons() {
  return (
    <div className="flex flex-col space-y-3">
      <Button
        className="w-full rounded-xl flex items-center gap-2 cursor-pointer bg-black text-white hover:bg-gray-800 transition-colors duration-300 ease-in-out"
      >
        <Github size={18} /> Continue with GitHub
      </Button>
      <Button
        className="w-full rounded-xl flex items-center gap-2 cursor-pointer bg-white text-black border border-gray-300 hover:bg-gray-100 transition-colors duration-300 ease-in-out"
      >
        <Mail size={18} /> Continue with Google
      </Button>
    </div>
  );
}
