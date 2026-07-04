import SectionTitle from "./ui/SectionTitle";
import PropertyCard from "./ui/PropertyCard";
import { properties } from "@/data/properties";

export default function FeaturedProperties() {
  return (
    <section
      id="properties"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <SectionTitle
        subtitle="Exclusive Collection"
        title="Featured Properties"
      />

      <div className="grid md:grid-cols-3 gap-8">

        {properties.map((property) => (

          <PropertyCard
            key={property.id}
            property={property}
          />

        ))}

      </div>

    </section>
  );
}