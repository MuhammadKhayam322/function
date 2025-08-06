"use client";

import Image from "next/image";

const ProjectShowcase = () => {
  return (
    <section className="w-full px-4 py-16 md:py-24 bg-white overflow-hidden">
      <div>
      <div
  className="
    mt-[20px]
    min-[500px]:mt-[40px]
    min-[768px]:mb-[-100px]
    min-[1024px]:mb-[-100px]
    min-[1280px]:mb-[-100px]

    ml-[10px]
    min-[500px]:ml-[40px]
    min-[768px]:ml-[480px]
    min-[1024px]:ml-[720px]
    min-[1280px]:ml-[1000px]
  "
>
  <p className="text-3xl max-[500px]:text-base min-[768px]:text-lg font-medium text-left mb-4">
    • Our Work
  </p>

  <h2
    className="
      text-[24px]
      max-[500px]:text-[20px]
      min-[768px]:text-[32px]
      min-[1024px]:text-[40px]
      font-bold
      text-left
      mb-10
    "
  >
    Take a look at <br className="" />
    our projects
  </h2>
</div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div className="rounded-2xl overflow-hidden rounded-3xl">
          <video className=" rounded-3xl" autoPlay muted loop playsInline>
            {" "}
            <source src="/video2.mp4" />
          </video>
          <div className="mt-4 text-sm text-gray-700">2023 • Cary Neville</div>
          <h3 className="text-2xl font-semibold mt-1">
            Refreshing Gary Neville&apos;s digital presence
          </h3>
        </div>

        {/* Card 2 */}

        {/* Optional sticker (bottom right) */}
        <div className="relative">
          <Image
            src="/image.png"
            alt="Sticker"
            width={260}
            height={160}
            className="w-316 rounded-3xl top-40 absolute right-0"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
