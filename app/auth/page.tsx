"use client"

import SignInPage from "@/components/Auth/SignIn"
import SignUpPage from "@/components/Auth/SignUp"
import { useState } from 'react'
import { UserData } from '@/types/user-data'


export default function SignIn() {
    const [mode, setMode] = useState("SignIn");
    function handleData(data: UserData) {
        console.log(data);
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