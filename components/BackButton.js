"use client"

export default function BackButton() {
    return(<button
            onClick={() => window.history.back()}
            className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-sm hover:shadow transition cursor-pointer"
          >
            ← Go Back
          </button>);
          
}