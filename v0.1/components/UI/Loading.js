export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-slate-700 font-medium">Loading...</p>
      </div>
    </main>
  );
}
