"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset?: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const handleRetry = () => {
    if (typeof reset === "function") {
      reset(); 
    } else {
      window.location.reload(); 
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-8xl font-extrabold text-red-600">Oops!</h1>

        <p className="mt-4 text-2xl font-semibold text-slate-800">
          Something went wrong
        </p>

        <p className="mt-2 text-slate-600">
          {error?.message || "An unexpected error occurred."}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleRetry}
            className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-sm hover:shadow transition cursor-pointer"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-700 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
