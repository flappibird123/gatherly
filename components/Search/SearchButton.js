"use client";

export default function SearchButton({ onClick, children = "Search" }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-r-lg bg-blue-500 text-white font-semibold shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors cursor-pointer"
    >
      {children}
    </button>
  );
}
