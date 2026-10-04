"use client";

import Image from "next/image";
import { Button } from "@heroui/react";

export default function HeroBanner() {
  const handleScroll = () => {
    const element = document.getElementById("library");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#18181b] rounded-3xl overflow-hidden mt-6 border border-white/5">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between p-8 lg:p-16 gap-8">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl z-10">
          <p className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Workout Library
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase leading-[1.1] mb-6">
            Train with intent. <br className="hidden md:block" /> Log every set.
          </h1>
          <p className="text-[#a1a1aa] text-lg leading-relaxed mb-8 max-w-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <Button 
            onPress={handleScroll}
            className="bg-accent text-black font-bold uppercase tracking-wider px-8 py-6 rounded-md hover:opacity-90 transition-opacity"
            radius="sm"
          >
            Browse Workouts
          </Button>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 w-full flex justify-center lg:justify-end relative h-[300px] lg:h-[400px]">
          <Image 
            src="/banner.png" 
            alt="3D Anatomical Bicep Curl" 
            fill
            className="object-contain lg:object-right"
            priority
          />
        </div>
      </div>
    </div>
  );
}
