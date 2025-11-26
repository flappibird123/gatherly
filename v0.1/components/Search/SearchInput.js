"use client";

export default function SearchInput({ value, onChange, onEnter, placeholder = "Search events..." }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onKeyDown={(e) => {
        if (e.key === "Enter") onEnter?.(); 
      }}
      className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition"
    />
  );
}
