// components/Navbar.js

import Link from "next/link";
import { useRouter } from "next/router";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    {
      name: "MEN",
      path: "/men",
    },
    {
      name: "WOMEN",
      path: "/women",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90">
      <div className="w-full">
        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full gap-3">
            {/* LEFT SIDE */}
            <div className="flex items-center gap-4 lg:gap-10 min-w-0">
              {/* MOBILE MENU */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/10 transition flex-shrink-0"
              >
                {mobileMenu ? <X size={22} /> : <Menu size={22} />}
              </button>

              {/* LOGO */}
              <Link href="/" className="flex items-center flex-shrink-0">
                <div className="flex flex-col leading-none">
                  <h1
                    className="
                          text-2xl
                          sm:text-[28px]
                          font-black
                          tracking-[-0.08em]
                          text-white
                          lowercase
                          italic
                          select-none
                        "
                  >
                    young
                  </h1>
                </div>
              </Link>

              {/* DESKTOP NAV */}
              <nav className="hidden md:flex items-center">
                {navLinks.map((link, index) => {
                  const active = router.pathname === link.path;

                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      className={`
                          relative
                          px-6
                          h-11
                          flex
                          items-center
                          justify-center
                          text-[11px]
                          tracking-[0.35em]
                          uppercase
                          font-semibold
                          border-y
                          border-white/15
                          transition-all
                          duration-300
                          whitespace-nowrap
                          
                          ${
                            index === 0
                              ? "border-l border-r-0 rounded-l-md"
                              : "border-l border-r rounded-r-md"
                          }

                          ${
                            active
                              ? "bg-white text-black"
                              : "text-gray-300 hover:bg-white/50 hover:text-black"
                          }
                        `}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* CENTER SEARCH */}
            <div className="hidden lg:flex flex-1 justify-center px-4">
              <div className="relative w-full max-w-xl">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="text"
                  placeholder="Search for items and brands..."
                  className="w-full h-11 rounded-full border border-white/10 bg-white text-black/50 placeholder:text-gray-500 pl-11 pr-4 text-sm outline-none focus:border-white/30 transition"
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              {/* MOBILE SEARCH */}
              <button className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/10 transition">
                <Search size={25} />
              </button>

              {/* PROFILE */}
              <button className="flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/10 transition">
                <User size={25} />
              </button>

              {/* LIKED */}
              <button className="relative flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/10 transition">
                <Heart size={25} />
              </button>

              {/* CART */}
              <button className="relative flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/10 transition">
                <ShoppingBag size={25} />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenu ? "max-h-[500px] border-t border-white/10" : "max-h-0"
          }`}
        >
          <div className="px-4 py-5 bg-black">
            {/* MOBILE SEARCH */}
            <div className="relative mb-5">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="text"
                placeholder="Search fashion items..."
                className="w-full h-11 rounded-full border border-white/10 bg-zinc-900 text-white placeholder:text-gray-500 pl-11 pr-4 text-sm outline-none focus:border-white/30"
              />
            </div>

            {/* MOBILE LINKS */}
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = router.pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`px-3 py-3 rounded-xl text-sm font-medium transition ${
                      active
                        ? "bg-white text-black"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
