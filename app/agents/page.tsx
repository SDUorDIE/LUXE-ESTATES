import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Agents from "@/components/Agents";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Our Agents | LUXE Estates",
  description:
    "Meet the experienced luxury property specialists at LUXE Estates.",
};

export default function AgentsPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* Hero */}

      <PageHeader
        image="/images/header/agents-header.jpg"
        subtitle="Our Experts"
        title="Meet Our Team"
        description="Experienced luxury property consultants ready to help you find your dream home."
      />

      <Agents />

      <Footer />

    </main>
  );
}