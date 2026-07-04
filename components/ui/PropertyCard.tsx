import Image from "next/image";
import { BedDouble, Bath, MapPin } from "lucide-react";
import { Property } from "@/types/property";
import Button from "./Button";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2">

      {/* Image */}

      <div className="relative h-80 overflow-hidden">

        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition duration-700"
        />

      </div>

      {/* Content */}

      <div className="p-6">

        <p className="text-yellow-500 text-3xl font-black">
          {property.price}
        </p>

        <h3 className="text-2xl font-bold mt-3">
          {property.title}
        </h3>

        <div className="flex items-center gap-2 text-zinc-400 mt-3">
          <MapPin size={18} />
          {property.location}
        </div>

        <div className="flex gap-8 mt-6 text-zinc-300">

          <div className="flex items-center gap-2">
            <BedDouble size={18} />
            {property.bedrooms}
          </div>

          <div className="flex items-center gap-2">
            <Bath size={18} />
            {property.bathrooms}
          </div>

        </div>

        <Button className="mt-8 w-full">
          View Property
        </Button>

      </div>

    </div>
  );
}