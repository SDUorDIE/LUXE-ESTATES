"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        

        <Link
          href="/"
          className="text-3xl font-black tracking-[0.25em] text-white"
        >
          LUXE
        </Link>

       

        <div className="hidden md:flex items-center gap-10">

          <Link
            href="/properties"
            className="hover:text-yellow-400 transition"
          >
            Properties
          </Link>

          <Link
            href="/agents"
            className="hover:text-yellow-400 transition"
          >
            Agents
          </Link>

          <Link
            href="/about"
            className="hover:text-yellow-400 transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-yellow-400 transition"
          >
            Contact
          </Link>

          

          <button className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition">
            Book Viewing
          </button>

        </div>

      

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      

      {open && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800">

          <div className="flex flex-col p-6 gap-6">

            <Link href="/properties">Properties</Link>

            <Link href="/agents">Agents</Link>

            <Link href="/about">About</Link>

            <Link href="/contact">Contact</Link>

          </div>

        </div>
      )}

    </nav>
  );
}