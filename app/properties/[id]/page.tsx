import { notFound } from "next/navigation";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { properties } from "@/data/properties";

interface PageProps {
  params: {
    id: string;
  };
}

export default function PropertyPage({ params }: PageProps) {

  const property = properties.find(
    (p) => p.id.toString() === params.id
  );

  if (!property) {
    notFound();
  }

  return (
    <main className="bg-black text-white">

      <Navbar />

      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6">

        <div className="relative h-[550px] rounded-3xl overflow-hidden mb-12">

          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover"
          />

        </div>

        <h1 className="text-6xl font-black mb-4">
          {property.title}
        </h1>

        <p className="text-yellow-500 text-3xl mb-8">
          {property.price}
        </p>

        <p className="text-zinc-400 leading-8 max-w-4xl mb-12">
          {property.description}
        </p>

        <Button>
          Book a Viewing
        </Button>

      </section>

      <Footer />

    </main>
  );
}