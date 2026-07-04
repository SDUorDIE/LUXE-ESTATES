import {
  Search,
  BedDouble,
  Bath,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-black tracking-widest">
            LUXE
          </h1>

          <div className="hidden md:flex gap-8">
            <a href="#">Properties</a>
            <a href="#">Agents</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

        </div>

      </nav>

      {/* HERO */}

      <section className="relative min-h-screen flex items-center">

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[0.5em] text-yellow-500 mb-6">
            Luxury Real Estate
          </p>

          <h1 className="text-6xl md:text-8xl font-black mb-6">
            Extraordinary
            <br />
            Living
          </h1>

          <p className="text-zinc-300 max-w-xl mb-10">
            Discover the world's most exclusive properties,
            penthouses and luxury estates.
          </p>

          <div className="flex gap-4">

            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full font-bold">
              Browse Properties
            </button>

            <button className="px-8 py-4 border border-white rounded-full">
              Schedule Viewing
            </button>

          </div>

        </div>

      </section>

      {/* PROPERTY SEARCH */}

      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl">

          <div className="grid md:grid-cols-4 gap-6">

            <input
              placeholder="Location"
              className="bg-black p-4 rounded-xl"
            />

            <input
              placeholder="Bedrooms"
              className="bg-black p-4 rounded-xl"
            />

            <input
              placeholder="Price Range"
              className="bg-black p-4 rounded-xl"
            />

            <button className="bg-yellow-500 text-black rounded-xl font-bold flex items-center justify-center gap-2">
              <Search size={20} />
              Search
            </button>

          </div>

        </div>

      </section>

      {/* FEATURED PROPERTIES */}

      <section className="py-32 px-6 max-w-7xl mx-auto">

        <h2 className="text-5xl font-black mb-16">
          Featured Properties
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[1,2,3].map((item) => (

            <div
              key={item}
              className="bg-zinc-950 rounded-3xl overflow-hidden hover:scale-105 transition duration-300"
            >

              <div
                className="h-80 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c')",
                }}
              />

              <div className="p-6">

                <h3 className="text-3xl font-black mb-2">
                  R45,000,000
                </h3>

                <div className="flex items-center gap-2 text-zinc-400 mb-6">
                  <MapPin size={18} />
                  Cape Town
                </div>

                <div className="flex gap-6 text-zinc-400">

                  <div className="flex gap-2">
                    <BedDouble size={18} />
                    5
                  </div>

                  <div className="flex gap-2">
                    <Bath size={18} />
                    4
                  </div>

                </div>

                <button className="mt-6 flex items-center gap-2 text-yellow-500">
                  View Property
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}