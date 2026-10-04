import Link from "next/link";
import { Button } from "@heroui/react";
import { Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <Dumbbell size={64} className="text-accent mb-6" />
      <h1 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-wider mb-4">
        404 - Not Found
      </h1>
      <p className="text-[#a1a1aa] max-w-md mx-auto mb-8 text-lg">
        The workout you&apos;re looking for doesn&apos;t exist or has been removed from the library.
      </p>
      <Link href="/" className="outline-none">
        <Button 
          className="bg-accent text-black font-bold uppercase tracking-wider px-8"
          size="lg"
          radius="sm"
        >
          Return Home
        </Button>
      </Link>
    </div>
  );
}
