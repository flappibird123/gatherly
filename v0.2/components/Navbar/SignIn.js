"use client"

import Link from 'next/link'

export default function SignIn() {
    return(
        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec] cursor-pointer transition-colors duration-300 ease-in-out">
            <Link href="/sign-in">
                Sign In
            </Link>
        </button>
    );
}