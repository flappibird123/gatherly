"use client";

import Script from "next/script";
import { useState } from "react";

export default function Menu() {
  const [icon, setIcon] = useState("menu");

  function handleClick() {
    setIcon(prev => (prev === "menu" ? "close" : "menu"));
  }

  return (
    <>
      <Script
        src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"
        strategy="afterInteractive"
      />

      <ion-icon
        name={icon}
        class="text-3xl cursor-pointer md:hidden"
        onClick={handleClick}
      />
    </>
  );
}
