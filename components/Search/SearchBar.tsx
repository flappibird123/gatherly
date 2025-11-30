"use client";

import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import { handleSearch } from "@/lib/prisma-utils/search"; 
import { ClassNameProps } from "@/types/class-name-props"
import { InputOnChange } from "@/types/react-events";

export default function SearchBar({ className }: ClassNameProps) {
  const [query, setQuery] = useState("");

  async function onSearch() {
    const events = await handleSearch(query);
  }

  return (
    <div className="flex max-w-md mx-auto my-4 shadow-lg rounded-lg overflow-hidden">
      <SearchInput
        value={query}
        onChange={(e: InputOnChange) => setQuery(e.target.value)}
        onEnter={onSearch} 
      />
      <SearchButton onClick={onSearch} text="Search" />
    </div>
  );
}