"use client"

import SignInPage from "@/components/Auth/SignIn"
import SignUpPage from "@/components/Auth/SignUp"
import { useState } from 'react'
import { UserData } from '@/types/user-data'
import { signIn, signInSocial, signUp } from "@/lib/actions/auth-actions"
import { useEffect } from "react"


export default function AuthPage() {
    const [mode, setMode] = useState("SignIn");
    const [error, setError] = useState("");

    useEffect(() => {
        setError("");
    }, [mode]);


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
                setError(`Error ${err.statusCode}: ${err.message}`)
            } else if (err instanceof Error) {
                setError("Unexpected error: "+ err.message)
            } else {
                setError("Unknown Error: " + err)
            }
        }
    } 
    
    async function handleSocialAuth(provider: "google" | "github") {
        try {
            await signInSocial(provider);
        } catch (err: any) {
            if (err?.statusCode && err?.message) {
                setError(`Error ${err.statusCode}: ${err.message}`)
            } else if (err instanceof Error) {
                setError("Unexpected error: "+ err.message)
            } else {
                setError("Unknown Error: " + err)
            }
        }
    }

    return(
        <> 
            {mode === "SignIn" ? 
                <SignInPage changeMode={setMode} sendData={handleData} error={error} sendSocialAuth={handleSocialAuth}/> : 
                <SignUpPage changeMode={setMode} sendData={handleData} error={error} sendSocialAuth={handleSocialAuth}/>
            } 
        </>
    );
}