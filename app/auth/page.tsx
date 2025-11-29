import AuthPage from '@/components/Auth/AuthPage'
import { getUserSession } from '@/lib/auth/check-auth'
import { redirect } from 'next/navigation';

export default async function Auth() {
    const session = await getUserSession();
    if (session) {
        redirect("/dashboard");
    }

    return( 
        <AuthPage /> 
    );
}