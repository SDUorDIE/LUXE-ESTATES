import Image from "next/image";
import Button from "@/components/ui/Button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";


export default function AboutPage() {
  return (
    <main className="bg-black text-white">

        <Navbar />

      {/* Hero */}

     <PageHeader
       image="/images/header/about-header.jpg"
       subtitle="About LUXE"
       title="Luxury Living. Exceptional Service."
       description="Discover the story behind South Africa's premier luxury real estate company."
     />

      {/* Story */}

      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
              Our Story
            </p>

            <h2 className="text-5xl font-black mb-8">
              Redefining Luxury Real Estate
            </h2>

            <p className="text-zinc-400 leading-9 mb-8">
              At LUXE Estates, we believe exceptional homes deserve exceptional
              representation. For over two decades we've connected discerning
              buyers with South Africa's most prestigious residences.
            </p>

            <p className="text-zinc-400 leading-9">
              Whether you're searching for a beachfront villa, a private
              winelands estate or an exclusive penthouse, our experienced
              advisors ensure every detail is handled with professionalism.
            </p>

          </div>

          <div className="relative h-[550px] rounded-3xl overflow-hidden">

            <Image
              src="/images/properties/winelands-estate.jpg"
              alt="Luxury Estate"
              fill
              className="object-cover"
            />

          </div>

        </div>

      </section>

      {/* Mission */}

      <section className="bg-zinc-950 py-32">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div className="bg-black rounded-3xl border border-zinc-800 p-10">

            <h3 className="text-3xl font-black mb-6 text-yellow-500">
              Our Mission
            </h3>

            <p className="text-zinc-400 leading-8">
              Deliver an unmatched luxury property experience through trust,
              expertise and personalized service.
            </p>

          </div>

          <div className="bg-black rounded-3xl border border-zinc-800 p-10">

            <h3 className="text-3xl font-black mb-6 text-yellow-500">
              Our Vision
            </h3>

            <p className="text-zinc-400 leading-8">
              To become Africa's most trusted luxury real estate brand,
              recognized worldwide for excellence.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-32 text-center">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-5xl font-black mb-6">
            Ready to Find Your Dream Home?
          </h2>

          <p className="text-zinc-400 mb-10">
            Speak with one of our luxury property specialists today.
          </p>

          <Button>
            Contact Our Team
          </Button>

        </div>

      </section>

        <Footer />

    </main>
  );
}