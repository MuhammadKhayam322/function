// components/HeroSection.tsx

import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-20 bg-white">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Label */}
        <div className="lg:w-1/4 w-full">
          <ul className="list-disc list-inside lg:list-outside text-gray-700 text-sm font-medium">
            <li>Who are we?</li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="lg:w-3/4 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug text-black mb-10">
            An independent web design <br />
            and branding agency in Manchester set <br />
            up in 2010 who care, build relationships, <br />
            have industry experience, and win awards.
          </h2>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 rounded-full bg-lime-300 text-black font-medium shadow hover:bg-lime-400 transition"
            >
              About Shape <span className="ml-2">↗</span>
            </a>
            <a
              href="#team"
              className="inline-flex items-center text-black font-medium hover:underline transition"
            >
              Meet the Team <span className="ml-2">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
