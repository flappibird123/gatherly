"use client"

import { useState } from "react";
import { Input } from "@/components/UI/input";
import { Button } from "@/components/UI/button";
import { Eye, EyeOff } from "lucide-react";

export function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-4 mt-4">
      {/* Email Field */}
      <div>
        <label className="text-sm font-medium">Email</label>
        <Input
          type="email"
          placeholder="Enter your email"
        />
      </div>

      {/* Password Field with Toggle */}
      <div>
        <label className="text-sm font-medium">Password</label>
        <div className="relative mt-1">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="pr-10" 
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

      {/* Sign In Button */}
      <Button className="w-full rounded-xl mt-2 cursor-pointer">Sign In</Button>
    </form>
  );
}
