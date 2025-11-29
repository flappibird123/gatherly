"use client"

import { signOut } from '@/lib/actions/auth-actions';
import { useRouter } from 'next/navigation'


export default function SignOutButton() {
    const router = useRouter();
    async function handleSignOut() {
        await signOut();
        router.push("/auth");
    }
    return(<button className="cursor-pointer" onClick={handleSignOut}>Sign Out</button>);
}

