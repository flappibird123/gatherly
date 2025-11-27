"use client";

import { useState } from "react";
import Navbar from "./Navbar";


//wrapper for the navbar to handle state
export default function NavbarWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />;
}

