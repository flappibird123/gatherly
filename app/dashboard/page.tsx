import { getUserSession } from '@/lib/auth/check-auth'
import { redirect } from 'next/navigation';
import DashboardPage from '@/components/Dashboard/Dashboard'


export default async function Dashboard() {
    const session = await getUserSession();
    if (!session) {
        redirect("/auth");
    }
    return( <div>
                <DashboardPage session={session} />
             </div>
          );
} 