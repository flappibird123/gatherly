"use client";

import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import { handleSearch } from "../../lib/handleSearch"; 

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const onSearch = () => {
    handleSearch(query);
  };

  return (
    <div className="flex max-w-md mx-auto my-4">
      <SearchInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onEnter={onSearch} 
      />
      <SearchButton onClick={onSearch} />
    </div>
  );
}