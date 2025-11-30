import Link from 'next/link'

export default function SideBar() {
    
    return(
            <aside className="w-64 h-screen max-w-sm mx-auto rounded-xl shadow-3xl overflow-hidden p-6 bg-[#dedede58]">
                <div className="">
                    <Link href="#" className="">
                        Your account
                    </Link>
                </div>
            </aside>
    );
}