import React from "react";
import { Button } from "@/components/UI/button"
import { Github, Mail } from "lucide-react"


export function AuthSocialButtons() {
    return (
        <div className="flex flex-col space-y-3">
            <Button className="w-full rounded-xl flex items-center gap-2 cursor-pointer" variant="outline">
            <Github size={18} /> Continue with GitHub
            </Button>
            <Button className="w-full rounded-xl flex items-center gap-2 cursor-pointer" variant="outline">
            <Mail size={18} /> Continue with Google
            </Button>
        </div>
);
}
