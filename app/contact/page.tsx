import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="pt-40 pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.45em] text-yellow-400 mb-4">
              Contact
            </p>

            <h1 className="text-6xl md:text-7xl font-black">
              Let's Find Your Dream Home
            </h1>

            <p className="text-zinc-400 max-w-2xl mx-auto mt-6">
              Whether you're buying, selling or investing, our luxury property
              advisors are ready to assist.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Info */}

            <div className="space-y-8">

              <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800">

                <h2 className="text-3xl font-bold mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-4 text-zinc-400">

                  <p>📍 Cape Town, South Africa</p>

                  <p>📞 +27 21 555 1234</p>

                  <p>✉ hello@luxeestates.com</p>

                </div>

              </div>

            </div>

            {/* Form */}

            <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 space-y-6">

              <Input placeholder="Full Name" />

              <Input placeholder="Email Address" />

              <Input placeholder="Phone Number" />

              <textarea
                rows={6}
                placeholder="Tell us about your dream property..."
                className="w-full bg-black rounded-2xl border border-zinc-800 p-5 resize-none focus:outline-none focus:border-yellow-500"
              />

              <Button className="w-full">
                Send Message
              </Button>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}