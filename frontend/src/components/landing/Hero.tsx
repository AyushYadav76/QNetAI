export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      <span className="mb-6 rounded-full border border-blue-500 px-4 py-2 text-blue-400">
        Quantum Internet • AI • Simulation
      </span>

      <h1 className="max-w-5xl text-6xl font-bold leading-tight">
        AI Copilot for
        <span className="text-blue-500">
          {" "}
          Quantum Network Engineers
        </span>
      </h1>

      <p className="mt-8 max-w-3xl text-xl text-gray-400">
        Design, simulate and optimize quantum communication
        networks using artificial intelligence and visual
        network engineering.
      </p>

      <div className="mt-10 flex gap-5">

        <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500">
          Start Designing
        </button>

        <button className="rounded-xl border border-slate-700 px-8 py-4 text-lg transition hover:border-blue-500">
          Documentation
        </button>
        <div className="mt-16 flex flex-wrap justify-center gap-10">

        <div>
            <h2 className="text-3xl font-bold">10x</h2>
            <p className="text-slate-400">
            Faster Design
            </p>
        </div>

        <div>
            <h2 className="text-3xl font-bold">AI</h2>
            <p className="text-slate-400">
            Optimization
            </p>
        </div>

        <div>
            <h2 className="text-3xl font-bold">Cloud</h2>
            <p className="text-slate-400">
            Platform
            </p>
        </div>

        </div>

      </div>

    </section>
  );
}