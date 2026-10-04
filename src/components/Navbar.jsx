"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useWorkout } from "@/context/WorkoutContext";

export default function Navbar() {
  const pathname = usePathname();
  const { planItems, savedItems, isLoaded } = useWorkout();

  const navLinks = [
    { name: "Workouts", href: "/" },
    { name: "My Plan", href: "/my-plan" },
  ];

  return (
    <nav className="w-full bg-[#0a0a0a] border-b border-white/5 h-20">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="FitLog Logo" width={32} height={32} className="w-8 h-8 object-contain" />
          <span className="font-display font-bold text-2xl tracking-wider text-white uppercase">FITLOG</span>
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold px-4 py-2 rounded-full transition-colors ${
                  isActive 
                    ? "bg-[#18181b] text-accent" 
                    : "text-[#a1a1aa] hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Badges */}
        <div className="flex items-center gap-6">
          {/* Plan Badge */}
          <Link href="/my-plan" className="flex items-center gap-2 text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors">
            <span>Plan</span>
            <span className="bg-accent text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">
              {isLoaded ? planItems.length : 0}
            </span>
          </Link>
          
          {/* Saved Badge */}
          <Link href="/my-plan" className="flex items-center gap-2 text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors">
            <span>Saved</span>
            <span className="border border-[#3f3f46] text-[#a1a1aa] w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">
              {isLoaded ? savedItems.length : 0}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
