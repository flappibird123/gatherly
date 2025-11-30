"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";


//wrapper for the navbar to handle state
export default function NavbarWrapper({ session }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    // Reset on full-page reload
    const navType = performance.getEntriesByType('navigation')[0].type;
    if (navType === 'reload') {
      setMenuOpen(false);
    }

    // Reset on client-side navigation
    setMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} session={session} />;
}

