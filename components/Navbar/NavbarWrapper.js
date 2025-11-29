"use client";

import { useState } from "react";
import Navbar from "./Navbar";


//wrapper for the navbar to handle state
export default function NavbarWrapper({ session }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} session={session} />;
}

