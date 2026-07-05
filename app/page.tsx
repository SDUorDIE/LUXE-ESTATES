"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertySearch from "@/components/PropertySearch";
import FeaturedProperties from "@/components/FeaturedProperties";
import Stats from "@/components/Stats";
import Agents from "@/components/Agents";
import Testimonials from "@/components/Testimonials";
import MortgageCalculator from "@/components/MortgageCalculator";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import usePropertySearch from "@/hooks/usePropertySearch";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {

  const {
    search,
    setSearch,
    filteredProperties,
  } = usePropertySearch();

  return (
    <main className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <PropertySearch
        search={search}
        setSearch={setSearch}
      />

      <FeaturedProperties
        properties={filteredProperties}
      />

      <WhyChooseUs />

      <Stats />

      <Testimonials />

      <MortgageCalculator />

      <Footer />

    </main>
  );
}