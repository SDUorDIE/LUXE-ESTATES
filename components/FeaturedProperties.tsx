import SectionTitle from "./ui/SectionTitle";
import PropertyCard from "./ui/PropertyCard";
import { Property } from "@/types/property";

interface FeaturedPropertiesProps {
  properties: Property[];
}

export default function FeaturedProperties({
  properties,
}: FeaturedPropertiesProps) {
  return (
    <section
      id="properties"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <SectionTitle
        subtitle="Exclusive Collection"
        title="Featured Properties"
      />

      {properties.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-3xl font-bold text-zinc-400">
            No properties found.
         </h3>

         <p className="text-zinc-500 mt-4">
           Try another city.
         </p>
        </div>
      )} 

      {properties.length > 0 && (
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onClick={() => {}}
             />
            ))}
          </div>
         )}

    </section>
  );
}