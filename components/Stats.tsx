"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    end: 250,
    suffix: "+",
    label: "Luxury Properties",
  },
  {
    end: 8,
    prefix: "R",
    suffix: "B+",
    label: "Property Sales",
  },
  {
    end: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    end: 25,
    suffix: "",
    label: "Years Experience",
  },
];

export default function Stats() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

  return (

    <section
      ref={ref}
      className="py-32 bg-zinc-950"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
            Trusted Worldwide
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            Excellence in Every Transaction
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (

            <div
              key={stat.label}
              className="
                bg-zinc-900
                rounded-3xl
                p-10
                text-center
                border
                border-zinc-800
                hover:border-yellow-500
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >

              <h3 className="text-6xl font-black text-yellow-500 mb-4">

                {inView && (
                  <CountUp
                  start={0}
                  end={stat.end}
                  duration={2.8}
                  delay={index * 0.2}
                  suffix={stat.suffix}
                  prefix={stat.prefix ?? ""}
                />
              )}

              </h3>

              <p className="text-zinc-400 text-lg">

                {stat.label}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}