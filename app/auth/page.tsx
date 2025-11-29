"use client"

import SignInPage from "@/components/Auth/SignIn"
import SignUpPage from "@/components/Auth/SignUp"
import { useState } from 'react'
import { UserData } from '@/types/user-data'
import { signIn, signUp } from "@/lib/actions/auth-actions"


export default function SignIn() {
    const [mode, setMode] = useState("SignIn");
    async function handleData(data: UserData) {
        try {
            if (mode === "SignIn") {
                const result = await signIn(data.email, data.password);
                if (!result.user) {
                    console.log("invalid credetails");
                }
            } else {
                const result = await signUp(data.email, data.password, data.username!);
                if (!result.user) {
                    console.log("failed to create user");
                }
            }
        } catch (err: any) {
            if (err?.statusCode && err?.message) {
                console.error(`Error ${err.statusCode}: ${err.message}`);
            } else if (err instanceof Error) {
                console.error("Unexpected error:", err.message);
            } else {
                console.error("Unknown error:", err);
            }
        }
    }
    return(
        <> 
            {mode === "SignIn" ? 
                <SignInPage changeMode={setMode} sendData={handleData}/> : 
                <SignUpPage changeMode={setMode} sendData={handleData}/>
            } 
        </>
    );
}