import { Mail, Phone, MapPin } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="Get In Touch"
          title="Let's Find Your Dream Property"
        />

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}

          <div className="space-y-8">

            <div className="flex gap-5">

              <Phone className="text-yellow-500" />

              <div>

                <h3 className="font-bold">
                  Phone
                </h3>

                <p className="text-zinc-400">
                  +27 21 555 1234
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <Mail className="text-yellow-500" />

              <div>

                <h3 className="font-bold">
                  Email
                </h3>

                <p className="text-zinc-400">
                  hello@luxe-estates.com
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <MapPin className="text-yellow-500" />

              <div>

                <h3 className="font-bold">
                  Office
                </h3>

                <p className="text-zinc-400">
                  Cape Town, South Africa
                </p>

              </div>

            </div>

          </div>

          {/* Form */}

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">

            <div className="space-y-5">

              <input
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-black"
              />

              <input
                placeholder="Email"
                className="w-full p-4 rounded-xl bg-black"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your dream property..."
                className="w-full p-4 rounded-xl bg-black"
              />

              <Button className="w-full">
                Send Enquiry
              </Button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}