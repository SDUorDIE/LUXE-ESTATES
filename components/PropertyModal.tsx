"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import {
  X,
  BedDouble,
  Bath,
  Car,
  Ruler,
  MapPin,
} from "lucide-react";

import { Property } from "@/types/property";
import Button from "./ui/Button";

interface PropertyModalProps {
  property: Property | null;
  open: boolean;
  onClose: () => void;
}

export default function PropertyModal({
  property,
  open,
  onClose,
}: PropertyModalProps) {
  if (!property) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="fixed inset-0 z-50"
    >
      {/* Overlay */}

      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />

      <div className="fixed inset-0 overflow-y-auto">

        <div className="flex min-h-full items-center justify-center p-6">

          <DialogPanel className="w-full max-w-5xl bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800">

            {/* Image */}

            <div className="relative h-[420px]">

              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
              />

              <button
                onClick={onClose}
                className="absolute top-5 right-5 bg-black/70 rounded-full p-3"
              >
                <X />
              </button>

            </div>

            {/* Content */}

            <div className="p-10">

              <h2 className="text-5xl font-black">
                {property.title}
              </h2>

              <div className="flex items-center gap-2 text-zinc-400 mt-3">

                <MapPin />

                {property.location}

              </div>

              <p className="text-yellow-500 text-4xl font-black mt-6">

                R {property.price.toLocaleString()}

              </p>

              <div className="grid grid-cols-4 gap-8 mt-10">

                <div className="text-center">

                  <BedDouble className="mx-auto mb-2" />

                  {property.bedrooms} Bedrooms

                </div>

                <div className="text-center">

                  <Bath className="mx-auto mb-2" />

                  {property.bathrooms} Bathrooms

                </div>

                <div className="text-center">

                  <Car className="mx-auto mb-2" />

                  {property.garages} Garages

                </div>

                <div className="text-center">

                  <Ruler className="mx-auto mb-2" />

                  {property.size} m²

                </div>

              </div>

              <p className="text-zinc-300 mt-10 leading-8">

                {property.description}

              </p>

              <div className="mt-10 flex gap-4">

                <Button className="flex-1">
                  Book Viewing
                </Button>

                <Button
                  variant="secondary"
                  className="flex-1"
                >
                  Contact Agent
                </Button>

              </div>

            </div>

          </DialogPanel>

        </div>

      </div>

    </Dialog>
  );
}