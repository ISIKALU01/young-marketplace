// pages/index.js
import Hero from "@/components/hero";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Star,
  ShieldCheck,
  Truck,
  ShoppingBag,
} from "lucide-react";

const featuredProducts = [
  {
    name: "Shadow Oversized Hoodie",
    price: "$120",
    image: "/images/younghero1.jpg",
    tag: "New Drop",
  },
  {
    name: "Young Utility Jacket",
    price: "$185",
    image: "/images/younghero2.jpg",
    tag: "Trending",
  },
  {
    name: "Minimal Cargo Set",
    price: "$145",
    image: "/images/younghero3.jpg",
    tag: "Premium",
  },
  {
    name: "Vintage Washed Tee",
    price: "$95",
    image: "/images/younghero4.jpg",
    tag: "Best Seller",
  },
];

const categories = [
  {
    title: "Streetwear",
    image: "/images/younghero4.jpg",
    gradient: "from-fuchsia-600 via-purple-600 to-indigo-700",
  },
  {
    title: "Luxury Fits",
    image: "/images/younghero5.jpg",
    gradient: "from-orange-500 via-red-500 to-pink-600",
  },
  {
    title: "Minimal Essentials",
    image: "/images/younghero6.jpg",
    gradient: "from-cyan-500 via-blue-500 to-indigo-700",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#0b0b0f] text-[#f4f1ea]">
      {/* HERO */}
      <Hero />

      {/* FEATURE STRIP */}
      <section className="relative z-20 -mt-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 border border-white/10 bg-[#111117]/90 p-6 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-700/20 p-5">
            <Truck className="mb-4 text-fuchsia-400" size={28} />
            <h3 className="mb-2 text-lg font-semibold">
              Fast Worldwide Delivery
            </h3>
            <p className="text-sm text-zinc-400">
              Luxury shipping experience with real-time tracking.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-700/20 p-5">
            <ShieldCheck className="mb-4 text-cyan-400" size={28} />
            <h3 className="mb-2 text-lg font-semibold">Secure Payments</h3>
            <p className="text-sm text-zinc-400">
              Trusted checkout with protected transactions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-red-700/20 p-5">
            <ShoppingBag className="mb-4 text-orange-400" size={28} />
            <h3 className="mb-2 text-lg font-semibold">Premium Collections</h3>
            <p className="text-sm text-zinc-400">
              Curated fashion pieces for modern style lovers.
            </p>
          </div>

          <div className="bg-gradient-to-br from-lime-500/20 to-emerald-700/20 p-5">
            <Sparkles className="mb-4 text-lime-400" size={28} />
            <h3 className="mb-2 text-lg font-semibold">Elevated Experience</h3>
            <p className="text-sm text-zinc-400">
              Built with smooth interactions and premium visuals.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-fuchsia-400">
                Explore Categories
              </p>

              <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
                Discover Fashion Without Limits
              </h2>
            </div>

            <button className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-cyan-400 transition hover:gap-4">
              View All
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative h-[500px] overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-70`}
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute bottom-8 left-8 z-20">
                  <p className="mb-2 text-sm uppercase tracking-[0.3em] text-white/70">
                    YOUNG COLLECTION
                  </p>

                  <h3 className="text-3xl font-black text-white">
                    {category.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute left-0 top-0 h-96 w-96 bg-fuchsia-600/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 bg-cyan-600/20 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-cyan-400">
              Featured Drops
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Trending Right Now
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
              Curated fashion pieces with bold aesthetics, premium vibes and
              standout energy.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="group relative overflow-hidden border border-white/10 bg-[#111114] transition duration-500 hover:-translate-y-2 hover:border-fuchsia-500/30"
              >
                {/* IMAGE */}
                <div className="relative h-[420px] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />

                  {/* PRODUCT TAG */}
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl">
                    {product.tag}
                  </div>

                  {/* QUICK VIEW */}
                  <div className="absolute right-4 top-4 opacity-0 transition duration-300 group-hover:opacity-100">
                    <button className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-black backdrop-blur-md transition hover:bg-white/20">
                      View
                    </button>
                  </div>

                  {/* PRODUCT INFO OVERLAY */}
                  <div className="absolute bottom-0 left-0 w-full p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/60 backdrop-blur-md">
                        Limited
                      </span>

                      <span className="text-xs text-white/50">New Season</span>
                    </div>

                    <h3 className="mb-2 text-xl font-semibold text-white">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-fuchsia-400">
                        {product.price}
                      </p>

                      <button className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-black transition duration-300 hover:scale-105 hover:bg-fuchsia-500 hover:text-white">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-600 p-[1px]">
          <div className=" bg-[#0d0d12] px-8 py-20 text-center sm:px-12">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-fuchsia-400">
              Join The Movement
            </p>

            <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Fashion Built For The New Generation
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
              Discover bold collections, premium quality, and a modern shopping
              experience crafted for creators, trendsetters, and visionaries.
            </p>

            <button className="mt-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:scale-105">
              Explore Marketplace
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
