import { Session } from '@/types/user-session'
import Sidebar from './SideBar';

// TODO: Finish dashbar and side components

export default function Dashboard({ session }: { session: Session }) {
    const user = session.user;
    
    return(
        <section>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 p-6">
                    <h1>Welcome Back {user.name}</h1>
                    <p>hello</p>
                </div>
            </div>
        </section>
    );
}

