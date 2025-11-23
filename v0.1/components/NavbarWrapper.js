"use client";

import { useState } from "react";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />;
}

