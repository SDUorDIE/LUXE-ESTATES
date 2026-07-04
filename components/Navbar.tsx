"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        //logo 

        <a
          href="#"
          className="text-3xl font-black tracking-[0.25em] text-white"
        >
          LUXE
        </a>

       //Desktop Navigation

        <div className="hidden md:flex items-center gap-10">

          <a href="#properties" className="hover:text-yellow-400 transition">
            Properties
          </a>

          <a href="#agents" className="hover:text-yellow-400 transition">
            Agents
          </a>

          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>

          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>

          <button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition">
            Book Viewing
          </button>

        </div>

      //Mobile Button

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      //Mobile Menu

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-zinc-800">

          <div className="flex flex-col p-6 space-y-6">

            <a href="#properties">Properties</a>

            <a href="#agents">Agents</a>

            <a href="#about">About</a>

            <a href="#contact">Contact</a>

            <button className="bg-yellow-500 text-black py-3 rounded-full font-bold">
              Book Viewing
            </button>

          </div>

        </div>
      )}

    </nav>
  );
}