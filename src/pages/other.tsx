// pages/other.tsx
export default function OtherPage() {
  return (
    <div className="relative h-screen w-full text-black top-10">
      {/* Background Video */}
      <video
        className="absolute left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content on top of video */}
   l
      <div className="absolute flex flex-row z-10 px-4 md:px-12 mt-[-90px]   ">
        <p className="text-sm md:text-base font-medium mb-2 bg-white mt-[-20px] h-80 relative ml-20 rounded-3xl ">
          👋 Hiya, we’re Shape
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 size-4xl ">
          <p className="absolute bg-white inline-block px-2 rounded-b-3xl w-150 ml-[-100px] size-4xl ">
            A web design and
          </p>
          <br />
          <p className="absolute bg-white inline-block px-2 rounded-b-3xl w-140 ml-[-100px] ">
            branding agency
          </p>
          <br />
          <p className="absolute bg-white inline-block px-2  w-130 ml-[-105px] rounded-b-3xl">
            in Manchester
          </p>
        </h1>

        <div className="absolute flex flex-wrap gap-4 bg-white w-90 mt-55 flex-row ml-30 p-4 rounded-b-3xl"> 
          <button className="bg-black text-white px-6 py-3 rounded-full text-sm">
            View our work
          </button>
          <button className="text-black px-6 py-3 rounded-full border border-black text-sm">
            Meet the team ↗
          </button>
        </div>
      </div>
      </div>
 
  );
}
