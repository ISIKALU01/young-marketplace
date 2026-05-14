// components/Footer.js
import Link from "next/link";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

import {
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#08080c] text-[#f4f1ea]">
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link href="/">
              <h2 className="inline-block text-white bg-clip-text text-4xl font-black lowercase tracking-tight text-transparent">
                young
              </h2>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-400">
              A premium fashion marketplace crafted for modern creators,
              trendsetters, and fashion enthusiasts seeking elevated style and
              smooth experiences.
            </p>

            {/* NEWSLETTER */}
            <div className="mt-8">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-fuchsia-400">
                Stay Updated
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 flex-1 rounded-full border border-white/10 bg-white/5 px-6 text-sm text-white outline-none backdrop-blur-md placeholder:text-zinc-500 focus:border-fuchsia-500"
                />

                <button className="flex h-14 items-center border border-white/10 bg-white/5 justify-center gap-2 rounded-full bg-transparent px-8 text-sm font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:scale-105">
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Marketplace
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-zinc-400 transition hover:text-fuchsia-400"
                >
                  Shop All
                </Link>
              </li>

              <li>
                <Link
                  href="/new-arrivals"
                  className="text-sm text-zinc-400 transition hover:text-fuchsia-400"
                >
                  New Arrivals
                </Link>
              </li>

              <li>
                <Link
                  href="/collections"
                  className="text-sm text-zinc-400 transition hover:text-fuchsia-400"
                >
                  Collections
                </Link>
              </li>

              <li>
                <Link
                  href="/brands"
                  className="text-sm text-zinc-400 transition hover:text-fuchsia-400"
                >
                  Brands
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Company
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-zinc-400 transition hover:text-cyan-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="text-sm text-zinc-400 transition hover:text-cyan-400"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-zinc-400 transition hover:text-cyan-400"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/support"
                  className="text-sm text-zinc-400 transition hover:text-cyan-400"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Legal
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-zinc-400 transition hover:text-orange-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="text-sm text-zinc-400 transition hover:text-orange-400"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/refunds"
                  className="text-sm text-zinc-400 transition hover:text-orange-400"
                >
                  Refund Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/cookies"
                  className="text-sm text-zinc-400 transition hover:text-orange-400"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-zinc-500">
            © 2026 young. All rights reserved.
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 backdrop-blur-md transition duration-300 hover:scale-110 hover:border-fuchsia-500 hover:text-fuchsia-400"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 backdrop-blur-md transition duration-300 hover:scale-110 hover:border-cyan-500 hover:text-cyan-400"
            >
              <FaXTwitter size={18} />
            </a>

            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 backdrop-blur-md transition duration-300 hover:scale-110 hover:border-orange-500 hover:text-orange-400"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 backdrop-blur-md transition duration-300 hover:scale-110 hover:border-red-500 hover:text-red-400"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
