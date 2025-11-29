import { AuthSocialButtons } from "./AuthSocialButtons"
import { SignUpForm } from "./SignUpForm"
import HR from "../UI/HrText"
import LinkText from '@/components/UI/LinkText'
import { SignInProps } from '@/types/sign-in-props'

export default function SignUp({ changeMode, sendData, error }: SignInProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-md space-y-6 p-6 rounded-2xl shadow-2xl">
                <p className="text-red-600">{error}</p>
                <h1 className="text-2xl font-bold text-center">Create Account</h1>
                <p className="text-1xl text-center pb-2">Create an account to get started with Gatherly</p>
                <AuthSocialButtons />
                <HR text="Or continue with" />
                <SignUpForm sendData={sendData}/>
                <p onClick={() => changeMode("SignIn")} className="text-center text-1xl cursor-pointer">Already have an account? <LinkText text="Sign in" /></p>
            </div>
        </div>
    );
}