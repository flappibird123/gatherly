import { getUserSession } from '@/lib/auth/check-auth'
import { redirect } from 'next/navigation';
import SignOutButton from '@/components/Buttons/SignOutButton'


export default async function Dashboard() {
    const session = await getUserSession();
    if (!session) {
        redirect("/auth");
    }
    return <div>
        <SignOutButton />
    </div>
} 