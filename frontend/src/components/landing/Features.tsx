import FeatureCard from "@/components/ui/FeatureCard";

const features = [
  {
    title: "Visual Designer",
    description: "Build quantum networks using drag and drop.",
  },
  {
    title: "AI Optimization",
    description: "Receive intelligent optimization suggestions.",
  },
  {
    title: "Quantum Simulation",
    description: "Run realistic quantum network simulations.",
  },
  {
    title: "Analytics Dashboard",
    description: "Analyze fidelity, latency and performance.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <h2 className="mb-12 text-center text-4xl font-bold">
        Powerful Features
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}

      </div>

    </section>
  );
}