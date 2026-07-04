import Image from "next/image";
import {
  BedDouble,
  Bath,
  Car,
  Ruler,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { Property } from "@/types/property";
import Button from "./Button";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <div className="group bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-3">

      <div className="relative h-72 overflow-hidden">

        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition duration-700"
        />

        {property.featured && (
          <span className="absolute top-5 left-5 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm">
            Featured
          </span>
        )}

      </div>

      <div className="p-7">

        <p className="text-yellow-500 text-3xl font-black">
          R {property.price.toLocaleString()}
        </p>

        <h3 className="text-2xl font-bold mt-3">
          {property.title}
        </h3>

        <div className="flex items-center gap-2 text-zinc-400 mt-2">

          <MapPin size={18} />

          {property.location}

        </div>

        <div className="grid grid-cols-4 gap-4 mt-8 text-zinc-400">

          <div className="flex flex-col items-center">

            <BedDouble size={20} />

            <span>{property.bedrooms}</span>

          </div>

          <div className="flex flex-col items-center">

            <Bath size={20} />

            <span>{property.bathrooms}</span>

          </div>

          <div className="flex flex-col items-center">

            <Car size={20} />

            <span>{property.garages}</span>

          </div>

          <div className="flex flex-col items-center">

            <Ruler size={20} />

            <span>{property.size}m²</span>

          </div>

        </div>

        <Button className="mt-8 w-full">

          View Property

          <ArrowRight size={18} />

        </Button>

      </div>

    </div>
  );
}