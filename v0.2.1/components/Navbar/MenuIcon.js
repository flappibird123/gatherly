"use client";

export default function MenuIcon({ menuOpen, toggleMenu }) {
  return (
    <button
      className="relative w-8 h-6 md:hidden focus:outline-none cursor-pointer"
      onClick={toggleMenu}
    >
      {/* Top Line */}
      <span
        className={`absolute left-0 w-full h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out origin-center
        ${menuOpen ? "rotate-45 top-2.5" : "rotate-0 top-0"}`}
      />
      {/* Middle Line */}
      <span
        className={`absolute left-0 w-full h-0.5 bg-gray-800 transition-opacity duration-300 ease-in-out
        ${menuOpen ? "opacity-0" : "opacity-100 top-2.5"}`}
      />
      {/* Bottom Line */}
      <span
        className={`absolute left-0 w-full h-0.5 bg-gray-800 transition-transform duration-300 ease-in-out origin-center
        ${menuOpen ? "-rotate-45 top-2.5" : "rotate-0 bottom-0"}`}
      />
    </button>
  );
}
