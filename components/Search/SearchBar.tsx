"use client";

import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import { handleSearch } from "../../lib/handleSearch"; 
import { ClassNameProps } from "@/types/class-name-props"
import { InputOnChange } from "@/types/react-events";

export default function SearchBar({ className }: ClassNameProps) {
  const [query, setQuery] = useState("");

  const onSearch = () => {
    handleSearch(query);
  };

  return (
    <div className="flex max-w-md mx-auto my-4">
      <SearchInput
        value={query}
        onChange={(e: InputOnChange) => setQuery(e.target.value)}
        onEnter={onSearch} 
      />
      <SearchButton onClick={onSearch} />
    </div>
  );
}