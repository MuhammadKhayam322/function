'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AutoScrollCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [scrolling, setScrolling] = useState(true);

  const logos = [
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
    '/logo4.png',
    '/logo5.png',
    '/logo6.png',
    '/logo7.png',
    '/logo8.png',
    '/logo9.png',
    '/logo10.png',
  ];

  // Duplicate logos to allow seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  const startScroll = () => {
    if (!intervalRef.current && scrollRef.current) {
      intervalRef.current = setInterval(() => {
        const container = scrollRef.current;
        if (container) {
          container.scrollLeft += 1;

          
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
          }
        }
      }, 20);
    }
  };

  const stopScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (scrolling) startScroll();
    return () => stopScroll();
  }, [scrolling]);

  return (
    <div
      ref={scrollRef}
      onMouseEnter={() => {
        setScrolling(false);
        stopScroll();
      }}
      onMouseLeave={() => {
        setScrolling(true);
        startScroll();
      }}
      className="w-auto overflow-x-scroll whitespace-nowrap no-scrollbar"
    >
      <div className="flex gap-6  m-15">
        {duplicatedLogos.map((src, i) => (
          <div
            key={i}
            className="min-w-[200px] h-[10px] bg-white rounded-xl
             flex items-center hover:scale-105 duration-300"
          >
            <Image
              src={src}
              alt={`Logo ${i + 1}`}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

