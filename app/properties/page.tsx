import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProperties from "@/components/FeaturedProperties";
import { properties } from "@/data/properties";

export default function PropertiesPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* Hero */}

      <section className="pt-40 pb-24 text-center">

        <p className="uppercase tracking-[0.45em] text-yellow-400 mb-4">
          Our Collection
        </p>

        <h1 className="text-6xl md:text-7xl font-black mb-6">
          Luxury Properties
        </h1>

        <p className="text-zinc-400 max-w-2xl mx-auto">
          Browse our hand-selected collection of South Africa's finest
          luxury homes, beachfront villas and exclusive estates.
        </p>

      </section>

      <FeaturedProperties
        properties={properties}
      />

      <Footer />

    </main>
  );
}