"use client";

import { InputOnChange } from "@/types/react-events";

interface SearchInputProps {
  value: string,
  onChange: (e: InputOnChange) => void;
  onEnter: () => void,
}

export default function SearchInput({ value, onChange, onEnter }: SearchInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="I'm looking for..."
      onKeyDown={(e) => {
      if (e.key === "Enter") onEnter?.(); 
      }}
      autoFocus
      className="flex-1 text-base md:text-lg px-6 md:px-12 py-3 md:py-4 rounded-l-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition"
    />
  );
}
 