import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProperties from "@/components/FeaturedProperties";
import { properties } from "@/data/properties";
import PageHeader from "@/components/PageHeader";

export default function PropertiesPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* Hero */}

      <PageHeader
        image="/images/header/properties-header.jpg"
        subtitle="Our Collection"
        title="Luxury Properties"
        description="Browse our exclusive collection of luxury homes and investment opportunities."
      />

      <FeaturedProperties
        properties={properties}
      />

      <Footer />

    </main>
  );
}