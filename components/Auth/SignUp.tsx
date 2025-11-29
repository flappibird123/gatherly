import { AuthSocialButtons } from "./AuthSocialButtons"
import { SignUpForm } from "./SignUpForm"
import HR from "../UI/HrText"
import Link from 'next/link'
import LinkText from '@/components/UI/LinkText'

export default function SignUp() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-md space-y-6 p-6 rounded-2xl shadow-2xl">
                <h1 className="text-2xl font-bold text-center">Create Account</h1>
                <p className="text-1xl text-center pb-2">Create an account to get started with Gatherly</p>
                <AuthSocialButtons />
                <HR text="Or continue with" />
                <SignUpForm />
                <Link href="/auth/sign-in">
                    <p className="text-center text-1xl">Already have an account? <LinkText text="Sign in" /></p>
                </Link>
            </div>
        </div>
    );
}