// components/Hero.js

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    image: "/images/younghero2.jpg",
    title: "THIS IS YOUNG",
    subtitle:
      "Premium fashion marketplace redefining modern streetwear.",
  },
  {
    image: "/images/younghero3.jpg",
    title: "CRAFTED FOR STYLE",
    subtitle:
      "Minimal. Bold. Timeless fashion experiences.",
  },
  {
    image: "/images/younghero1.jpg",
    title: "OWN THE MOMENT",
    subtitle:
      "Curated collections for the next generation.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* BACKGROUND SLIDES */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover"
          />

          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative z-20 flex h-full items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.2 }}
            className="mb-5 text-xs uppercase tracking-[0.4em] text-white/70 sm:text-sm"
          >
            PREMIUM FASHION MARKETPLACE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl font-black leading-none tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            THIS IS{" "}
            <span className="text-zinc-300">
              YOUNG
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg"
          >
            Discover premium fashion pieces curated for the modern generation.
            Built with elegance, movement, and timeless aesthetics.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-200">
              Shop Now
            </button>

            <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/20">
              Explore Collections
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              current === index
                ? "w-10 bg-white"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* NAVIGATION */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 md:flex"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 md:flex"
      >
        <ChevronRight size={20} />
      </button>
    </section>
  );
}