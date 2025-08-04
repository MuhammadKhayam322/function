"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Moon, ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Resize effect
  useEffect(() => {
    const handleResize = () => setIsNarrow(window.innerWidth < 540);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
   <header
  className={`fixed gap-104  top-4 z-50 transition-all duration-300 rounded-4xl backdrop-blur-md
    ${scrolled 
      ? "w-[90%] gap-84 sm:w-[96%] ml-5 md:w-[85%] md:ml-20 lg:w-[85%] lg:ml-40 py-6 bg-white/30 shadow-lg"
      : "w-full bg-white/70"
    }`}
>
<div className="max-w-12xl mx-auto px-6 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <div className="text-4xl font-bold">
          <Link href="/">
            Shape<span className="text-gray-400">.</span>
          </Link>
        </div>

        {/* Full menu (≥ 300px) */}
        {!isNarrow && (
          <>
            <nav className="flex items-center gap-6 text-sm font-medium text-gray-800 relative">
              <div
                className="relative cursor-pointer"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <div className="flex items-center gap-1">
                  Services
                  <ChevronDown className="w-4 h-4" />
                </div>

                {/* Dropdown */}
                {servicesOpen && (
                  <div className="absolute top-8 left-0 bg-white shadow-md rounded-lg p-4 z-40 w-60">
                    <Link
                      href="/services/web-design"
                      className="block text-black hover:text-lime-500 mb-2"
                    >
                      Web Design
                    </Link>
                    <Link
                      href="/services/branding"
                      className="block text-black hover:text-lime-500 mb-2"
                    >
                      Branding
                    </Link>
                    <Image
                      src="/service-pic.png"
                      alt="Service Image"
                      width={200}
                      height={120}
                      className="rounded-lg mt-2"
                    />
                  </div>
                )}
              </div>

              <Link href="/work">Work</Link>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Moon className="w-5 h-5 text-black" />
              <Link href="/start-project">
                <button className="flex items-center bg-lime-300 text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-lime-400 transition">
                  Start a project
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </button>
              </Link>
            </div>
          </>
        )}

        {/* Mobile Menu Button */}
        {isNarrow && (
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isNarrow && menuOpen && (
        <div className="bg-white px-6 pt-4 pb-6 space-y-4 text-sm font-medium text-gray-800">
          <div
            onClick={() => setServicesOpen(!servicesOpen)}
            className="cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <span>Services</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            {servicesOpen && (
              <div className="pl-4 pt-2 space-y-2">
                <Link
                  href="/services/web-design"
                  className="block hover:text-lime-500"
                >
                  Web Design
                </Link>
                <Link
                  href="/services/branding"
                  className="block hover:text-lime-500"
                >
                  Branding
                </Link>
                <Image
                  src="/service-pic.png"
                  alt="Service Image"
                  width={200}
                  height={120}
                  className="rounded-lg"
                />
              </div>
            )}
          </div>

          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>

          <Link href="/start-project">
            <button className="w-full mt-4 bg-lime-300 text-black px-4 py-2
             rounded-full text-sm font-semibold hover:bg-lime-400 transition mouse-pointer">
              Start a project
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
