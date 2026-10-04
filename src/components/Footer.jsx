import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0a0a0a] py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="FitLog Logo" width={24} height={24} className="w-6 h-6 grayscale" />
          <span className="font-display font-bold text-lg tracking-wider text-white">FITLOG</span>
        </div>
        
        {/* Right Side */}
        <p className="text-sm text-foreground/50 text-center md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
