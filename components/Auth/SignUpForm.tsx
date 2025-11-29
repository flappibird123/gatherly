"use client"

import { Input } from "@/components/UI/Input";
import { Button } from "@/components/UI/Button";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { UserDataProps } from '@/types/user-data-props'
import { InputOnChange, ButtonOnClick } from "@/types/react-events";


export function SignUpForm({ sendData }: UserDataProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    function handleChangeEmail(e: InputOnChange) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e: InputOnChange) {
        setPassword(e.target.value);
    }
    
    function handleChangeUsername(e: InputOnChange) {
        setUsername(e.target.value);
    }

    function handleSubmit(e: ButtonOnClick) {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
            username: username,
        };
        sendData(data);
  }

    return (
        <form className="space-y-4 mt-4">
            <div>
                <label className="text-sm font-medium">Username</label>
                <Input type="text" placeholder="Enter a username" value={username} onChange={handleChangeUsername} required/>
            </div>
            <div>
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="Enter your email" value={email} onChange={handleChangeEmail} required/>
            </div>      
            <div>
                <label className="text-sm font-medium">Password</label>
                <div className="relative mt-1">
                    <Input
                       type={showPassword ? "text" : "password"}
                       placeholder="••••••••"
                       className="pr-10" 
                       value={password}
                       onChange={handleChangePassword}
                       required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-2 flex items-center px-1 text-gray-400 hover:text-gray-600 cursor-pointer"
                    >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
            </div>
            <Button type="button" onClick={handleSubmit} className="w-full rounded-xl mt-2 cursor-pointer">Sign Up</Button>
        </form>
);
}