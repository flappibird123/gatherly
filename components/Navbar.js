import { Work_Sans } from 'next/font/google';
import Link from 'next/link'
import SignInButton from './SignIn'
import MenuIcon from './MenuIcon'


const workSans = Work_Sans({ subsets: ['latin'], weight: ['400','700'] });

export default function Navbar() {
  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <h1 className={`${workSans.className} text-3xl font-bold text-gray-800 p-2`}>
            Gatherly
          </h1>
        </div>
        <div className="md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6">
                <li>
                    <Link className="hover:text-gray-500 transition-colors duration-300 ease-in-out" href="/events">Events</Link>
                </li>
                <li>
                    <Link className="hover:text-gray-500 transition-colors duration-300 ease-in-out" href="/events">Events</Link>
                </li>
            
            </ul>
        </div>
        <div className="flex items-center gap-6">
            <SignInButton />
             <MenuIcon />
        </div>
      </nav>
    </header>
  );
}
