import {
  ShieldCheck,
  Building2,
  Globe2,
  Handshake,
} from "lucide-react";

import SectionTitle from "./ui/SectionTitle";

const features = [
  {
    icon: Building2,
    title: "Exclusive Listings",
    description:
      "Access South Africa's most prestigious homes, estates and penthouses before they reach the public market.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    description:
      "With over 25 years of luxury real estate experience, our advisors guide you every step of the way.",
  },
  {
    icon: Globe2,
    title: "Global Network",
    description:
      "Connecting buyers and sellers from around the world through our international partnerships.",
  },
  {
    icon: Handshake,
    title: "White Glove Service",
    description:
      "From private viewings to final transfer, we deliver a seamless luxury experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-zinc-950">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Why Choose LUXE"
          title="Luxury Real Estate, Redefined"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="
                  bg-black
                  border
                  border-zinc-800
                  rounded-3xl
                  p-8
                  hover:border-yellow-500
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6">

                  <Icon
                    size={34}
                    className="text-yellow-500"
                  />

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {feature.title}

                </h3>

                <p className="text-zinc-400 leading-8">

                  {feature.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}