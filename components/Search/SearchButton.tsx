"use client";

interface SearchButtonProps {
  onClick: () => void,
  text: string,
}

export default function SearchButton({ onClick, text }: SearchButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 rounded-r-lg bg-blue-500 text-white font-semibold shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors cursor-pointer"
    >
      {text}
    </button>
  );
}
