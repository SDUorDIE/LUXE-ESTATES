"use client";

const stats = [
  {
    value: "250+",
    label: "Luxury Properties",
  },
  {
    value: "R8B+",
    label: "Property Sales",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "25",
    label: "Years Experience",
  },
];

export default function Stats() {
  return (
    <section className="py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="text-center"
            >

              <h2 className="text-5xl font-black text-yellow-500">
                {stat.value}
              </h2>

              <p className="mt-3 text-zinc-400">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}