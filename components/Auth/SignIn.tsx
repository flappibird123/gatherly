import { AuthSocialButtons } from "./AuthSocialButtons"
import { SignInForm } from "./SignInForm"
import HR from "@/components/UI/HrText"
import LinkText from '@/components/UI/LinkText'
import { SignInProps } from '@/types/sign-in-props'




export default function SignIn({ changeMode, sendData }: SignInProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-md space-y-6 p-6 rounded-2xl shadow-2xl">
                <h1 className="text-2xl font-bold text-center">Welcome Back!</h1>
                <p className="text-1xl text-center">Sign in to your account to continue</p>
                <AuthSocialButtons />
                <HR text="Or continue with" />
                <SignInForm sendData={sendData} />
                <p onClick={() => changeMode("SignUp")} className="text-center text-1xl cursor-pointer">Don't have an account? Sign up <LinkText text="here" /></p>
         </div>
     </div>
    );
}