import { AuthSocialButtons } from "./AuthSocialButtons"
import { SignInForm } from "./SignInForm"
import Link from 'next/link'
import HR from "@/components/UI/HrText"


export default function SignIn() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-md space-y-6 p-6 rounded-2xl shadow-2xl">
                <h1 className="text-2xl font-bold text-center">Welcome Back!</h1>
                <p className="text-1xl text-center">Sign in to your account to continue</p>
                <AuthSocialButtons />
                <HR text="Or continue with" />
                <SignInForm />
                <Link href="/auth/sign-up">
                    <p className="text-center text-1xl">Don't have an account? Sign up <span className="underline text-blue-400 hover:text-blue-600 transition-colors duration-300 ease-in-out">here</span></p>
                </Link>
         </div>
     </div>
    );
}