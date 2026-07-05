import SectionTitle from "./ui/SectionTitle";
import FeatureCard from "./ui/FeatureCard";

import { features } from "@/data/features";

export default function WhyChooseUs() {
  return (
    <section className="py-32">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Why Choose LUXE"
          title="Luxury Service Beyond Expectations"
        />

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature) => (

            <FeatureCard
              key={feature.id}
              feature={feature}
            />

          ))}

        </div>

      </div>

    </section>
  );
}