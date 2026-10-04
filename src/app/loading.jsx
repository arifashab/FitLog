import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <Spinner size="lg" color="current" className="text-accent" />
      <p className="text-accent font-display font-semibold tracking-widest uppercase text-sm">Loading Library...</p>
    </div>
  );
}
