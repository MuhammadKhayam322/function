// pages/other.tsx
import React from "react";

export default function OtherPage() {
  return (
    <div className="relative min-h-screen w-full text-black overflow-hidden bg-white">
      {/* Background Video */}
      <div className="absolute inset-0 flex justify-center items-center p-4">
        <div className="mt-23 w-full max-w-[620px] sm:max-w-[480px] md:max-w-[600px]
         lg:max-w-[1600px] rounded-3xl overflow-hidden">
          <video
            className="w-full h-full rounded-3xl"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen px-4 ml-4 sm:ml-6
       md:ml-8 lg:ml-12 xl:ml-16 items-start">
        {/* Intro Text */}
        <p className="text-sm sm:text-base font-medium rounded-3xl max-w-md shadow">
          👋 Hiya, we’re Shape
        </p>

        {/* Headings */}
        <div className="">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold
           bg-white px-4 py-2 rounded-b-3xl shadow inline-block">
            A web design and
          </p>
          <br />
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold
           bg-white px-4 py-2 rounded-b-3xl shadow inline-block">
            branding agency
          </p>
          <br />
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold
           bg-white px-4 py-2 rounded-b-3xl shadow inline-block">
            in Manchester
          </p>
          <br />
        </div>

        {/* Buttons */}
        <div className="bg-white w-80 flex flex-wrap gap-x-4 rounded-b-lg">
          <button className="flex  bg-black text-white px-6 py-3 text-sm font-medium
           rounded-full hover:bg-gray-800 transition">
            View our work
          </button>
          <button className="flex items-center gap-2 text-black px-6 py-3 text-sm font-medium rounded-full border border-black hover:bg-black hover:text-white transition">
            Meet the team ↗
          </button>
        </div>
      </div>

      {/* Hear from Andy Button */}
      <div
        className="absolute bottom-6 mr-20 sm:right-6 z-50 group overflow-hidden bg-white rounded-full
         shadow-lg flex items-center gap-4 pl-2 pr-4 py-2 cursor-pointer transition-all
          duration-500 hover:shadow-xl max-w-[300px] sm:max-w-[360px]"
      >
        {/* Profile Image */}
        <div className="w-10 h-10 rounded-full overflow-hidden
         transform transition-transform duration-500 group-hover:translate-x-30">
          <img
            src="/logo.webp"
            alt="Andy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="transform transition-transform duration-500 group-hover:translate-x-[-50%]">
          <p className="text-sm font-semibold text-black leading-tight">
            Hear from Andy
          </p>
          <p className="text-xs text-gray-500">Co-Founder of Shape</p>
        </div>
      </div>
    </div>
  );
}
