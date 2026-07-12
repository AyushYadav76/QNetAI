export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-[#0B1020]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-600"></div>

          <h1 className="text-2xl font-bold">
            QNetAI
          </h1>
        </div>

        <div className="hidden gap-8 text-gray-300 md:flex">
          <a href="#"className="transition hover:text-blue-400">Features</a>
          <a href="#" className="transition hover:text-blue-400">Documentation</a>
          <a href="#" className="transition hover:text-blue-400">About</a>
          <a href="#" className="transition hover:text-blue-400">GitHub</a>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2">
          Get Started
        </button>

      </div>
    </nav>
  );
}