import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertySearch from "@/components/PropertySearch";
import FeaturedProperties from "@/components/FeaturedProperties";
import Stats from "@/components/Stats";
import Agents from "@/components/Agents";
import Testimonials from "@/components/Testimonials";
import MortgageCalculator from "@/components/MortgageCalculator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <PropertySearch />

      <FeaturedProperties />

      <Stats />

      <Agents />

      <Testimonials />

      <MortgageCalculator />

      <Footer />

    </main>
  );
}