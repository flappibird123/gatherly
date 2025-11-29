"use client"

import Link from 'next/link'
import { Session } from '@/types/user-session'

export default function SignIn({ session }: {session: Session | null}) {
    return(
        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec] cursor-pointer transition-colors duration-300 ease-in-out">
            <Link href={session ? "/dashboard/" : "/auth/"}>
                {session ? "Dashboard" : "Sign In"}
            </Link>
        </button>
    );
}