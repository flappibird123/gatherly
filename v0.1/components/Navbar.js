"use client";

import Link from "next/link";
import SignInButton from "./SignIn";
import MenuIcon from "./MenuIcon";
import NavLink from './NavLink'

export default function Navbar({ menuOpen, toggleMenu }) {
  return (
    <header className="bg-white shadow-md">
      <nav className="flex justify-between items-center w-[92%] mx-auto relative h-16 z-[9999]">
        {/* Logo */}
        <div>
          <h1 className={`font-sans text-3xl font-bold text-gray-800`}>
            <Link href="/">Gatherly</Link> 
          </h1>
        </div>

        {/* Desktop + Mobile Menu */}
        <div
          className={`
            absolute top-full left-0 w-full bg-white flex flex-col px-5 py-6
            md:flex-row md:items-center md:static md:w-auto md:py-0
            transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
            md:max-h-full md:opacity-100 md:overflow-visible
          `}
        >
          <ul className="flex flex-col gap-6 md:flex-row md:gap-[4vw] md:items-center">
            <li>
              <NavLink href="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/events">
                Events
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Sign In + Hamburger */}
        <div className="flex items-center gap-6">
          <SignInButton />
          <MenuIcon menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
      </nav>
    </header>
  );
}
