"use client";

import { Search, MapPin } from "lucide-react";
import Button from "./ui/Button";
import Input from "./ui/Input";

interface PropertySearchProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function PropertySearch({
  search,
  setSearch,
}: PropertySearchProps) {
  return (
    <section className="-mt-20 relative z-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">

          <div className="grid lg:grid-cols-4 gap-6">

            <div className="lg:col-span-3">

              <label className="text-sm text-zinc-400 mb-2 block">
                Search by City
              </label>

              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cape Town, Durban, Johannesburg..."
                icon={<MapPin size={20} />}
              />

            </div>

            <div className="flex items-end">

              <Button className="w-full">
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