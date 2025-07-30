"use client";

import { useEffect, useState } from "react";
import { Moon, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 z-50 transition-all duration-300 
        ${scrolled ? "w-[75%] ml-60 py-6" : "w-full "}
   
        ${scrolled ? "bg-white/30 shadow-lg" : "bg-white/70"}
        rounded-4xl backdrop-blur-md
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between  transition-all duration-300 align-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          Shape<span className="text-gray-400">.</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
          <div className="relative">
            <span>Services</span>
          </div>
          <span>Work</span>
          <span>About</span>
          <span>Blog</span>
          <span>Contact</span>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <Moon className="w-5 h-5 text-black" />
          <button className="flex items-center bg-lime-300 text-black text-sm font-semibold px-4 py-2 rounded-full
           hover:bg-lime-400 transition">
            Start a project
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
