import { Mail } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h2 className="text-3xl font-black mb-4">
              LUXE
            </h2>

            <p className="text-zinc-500">
              South Africa's premier luxury real estate experience.
            </p>

          </div>

          <div>

            <h3 className="font-bold mb-4">
              Company
            </h3>

            <div className="space-y-2 text-zinc-500">

              <p>About</p>

              <p>Properties</p>

              <p>Agents</p>

            </div>

          </div>

          <div>

            <h3 className="font-bold mb-4">
              Contact
            </h3>

            <div className="space-y-2 text-zinc-500">

              <p>info@luxe.co.za</p>

              <p>+27 11 555 1234</p>

            </div>

          </div>

          <div>

            <h3 className="font-bold mb-4">
              Follow
            </h3>

            <div className="flex gap-5">

              <a
                href="#"
                className="hover:text-yellow-500 transition duration-300 hover:scale-110"
              >
             <FaFacebook size={22} />
             </a>

              <a
                href="#"
                className="hover:text-yellow-500 transition duration-300 hover:scale-110"
               > 
              <FaInstagram size={22} />
              </a>

              <a
                href="#"
                className="hover:text-yellow-500 transition duration-300 hover:scale-110"
               >
              <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:info@luxe.co.za"
                className="hover:text-yellow-500 transition duration-300 hover:scale-110"
               >
               <Mail size={22} />
              </a>

           </div>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-10 pt-8 text-center text-zinc-600">

          © 2026 LUXE Estates. All rights reserved.

        </div>

      </div>

    </footer>
  );
}