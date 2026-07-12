type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20">

      <h3 className="mb-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>

    </div>
  );
}