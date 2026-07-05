import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <PageHeader
        image="/images/header/contact-header.jpg"
        subtitle="Contact Us"
        title="Let's Find Your Dream Home"
        description="Get in touch with our luxury property specialists today."
      />

  <section className="py-24 px-6">

  <div className="max-w-7xl mx-auto">

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

      {/* Contact Form */}

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