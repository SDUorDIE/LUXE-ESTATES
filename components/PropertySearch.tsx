"use client";

import { Search, MapPin, BedDouble, DollarSign } from "lucide-react";
import Button from "./ui/Button";

export default function PropertySearch() {
  return (
    <section className="-mt-20 relative z-20 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">

          <div className="grid lg:grid-cols-4 gap-6">

            {/* Location */}

            <div>

              <label className="text-sm text-zinc-400 mb-2 block">
                Location
              </label>

              <div className="flex items-center bg-zinc-900 rounded-xl px-4">

                <MapPin className="text-yellow-500" size={20} />

                <input
                  type="text"
                  placeholder="Cape Town"
                  className="bg-transparent p-4 w-full outline-none"
                />

              </div>

            </div>

            {/* Bedrooms */}

            <div>

              <label className="text-sm text-zinc-400 mb-2 block">
                Bedrooms
              </label>

              <div className="flex items-center bg-zinc-900 rounded-xl px-4">

                <BedDouble className="text-yellow-500" size={20} />

                <input
                  type="number"
                  placeholder="4"
                  className="bg-transparent p-4 w-full outline-none"
                />

              </div>

            </div>

            {/* Budget */}

            <div>

              <label className="text-sm text-zinc-400 mb-2 block">
                Budget
              </label>

              <div className="flex items-center bg-zinc-900 rounded-xl px-4">

                <DollarSign className="text-yellow-500" size={20} />

                <input
                  type="text"
                  placeholder="R25M"
                  className="bg-transparent p-4 w-full outline-none"
                />

              </div>

            </div>

            {/* Search */}

            <div className="flex items-end">

              <Button className="w-full flex items-center justify-center gap-2">

                <Search size={18} />

                Search

              </Button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}