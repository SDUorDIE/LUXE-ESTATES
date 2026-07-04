export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
       //Background Image 

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      //Dark Overlay

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

      //Hero Content

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.45em] text-yellow-400 mb-6 text-sm">
            SOUTH AFRICA'S PREMIER REAL ESTATE
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
            Extraordinary
            <br />
            Living Starts
            <br />
            Here.
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl max-w-xl mb-10 leading-8">
            Discover exclusive penthouses, beachfront villas and luxury
            residences curated for those who expect nothing but the finest.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <button className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition duration-300">
              Browse Properties
            </button>

            <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
              Schedule Viewing
            </button>

          </div>

        </div>

      </div>

      //Floating Luxury Card

      <div className="hidden lg:block absolute bottom-12 right-12">

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 w-80">

          <p className="text-yellow-400 uppercase tracking-widest text-sm mb-2">
            Featured Property
          </p>

          <h3 className="text-3xl font-black mb-4">
            Cape Town Penthouse
          </h3>

          <p className="text-zinc-300 mb-6">
            5 Bedrooms • 4 Bathrooms • Ocean View
          </p>

          <div className="flex justify-between items-center">

            <span className="text-3xl font-black text-yellow-400">
              R45M
            </span>

            <button className="bg-yellow-500 text-black px-5 py-3 rounded-full font-bold hover:scale-105 transition">
              View
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}