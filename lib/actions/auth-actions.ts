"use server"

import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export async function signUp(email: string, password: string, name: string) {
    const result = await auth.api.signUpEmail({
        body: {
            email,
            password, 
            name,
            callbackURL: "/dashboard"
        }
    });

    return result;
}

export async function signIn(email: string, password: string) {
    const result = await auth.api.signInEmail({
        body: {
            email,
            password,
            callbackURL: "/dashboard",
        },
    });

    return result;
}

export async function signOut() {
    const result = await auth.api.signOut({
        headers: await headers()
    });

    return result;
}