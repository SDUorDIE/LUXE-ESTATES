"use client";

import { Search, MapPin, BedDouble, DollarSign } from "lucide-react";
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function PropertySearch() {
  return (
    <section className="-mt-20 relative z-20 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">

          <div className="grid lg:grid-cols-4 gap-6">

            //Location

            <div>

              <label className="text-sm text-zinc-400 mb-2 block">
                Location
              </label>

              <Input
                placeholder="Cape Town"
                icon={<MapPin size={20} />}
               />
            </div>

            //Bedrooms

            <div>

              <label className="text-sm text-zinc-400 mb-2 block">
                Bedrooms
              </label>

              <Input
                type="number"
                placeholder="4"
                icon={<BedDouble size={20} />}
               />

            </div>

            //Budget

            <div>

              <label className="text-sm text-zinc-400 mb-2 block">
                Budget
              </label>

              <Input
                placeholder="R25M"
                icon={<DollarSign size={20} />}
              />

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