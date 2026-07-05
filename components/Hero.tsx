import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-24"
    >
     

      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('/images/properties/hero-mansion.jpg')",
        }}
      />

      

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />


      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full">
        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.45em] text-yellow-400 mb-6 text-sm">
            SOUTH AFRICA'S PREMIER REAL ESTATE
          </p>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[1.05] mb-8">
            Extraordinary
            <br />
            Living Starts
            <br />
            Here.
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mb-10 leading-8">
            Discover exclusive penthouses, beachfront villas and luxury
            residences curated for those who expect nothing but the finest.
          </p>

         <div className="flex flex-col sm:flex-row gap-5 mt-10">

               <Button>
                  Browse Properties
               </Button>

               <Button variant="secondary">
                  Schedule Viewing
               </Button>

          </div>

        </div>

      </div>


      <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2">

        <div className="backdrop-blur-md bg-zinc-900/70 border border-white/20 rounded-3xl p-8 w-80">

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