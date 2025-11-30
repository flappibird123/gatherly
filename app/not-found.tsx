import Link from "next/link";
import BackButton from "@/components/Buttons/BackButton";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-8xl font-extrabold text-slate-900">404</h1>

        <p className="mt-4 text-2xl font-semibold text-slate-800">
          Page not found
        </p>

        <p className="mt-2 text-slate-600">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <BackButton />

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
