"use client";

import { HeroUIProvider } from "@heroui/system";
import { Toaster } from "react-hot-toast";
import { WorkoutProvider } from "@/context/WorkoutContext";

export function Providers({ children }) {
  return (
    <HeroUIProvider>
      <WorkoutProvider>
        {children}
        <Toaster position="bottom-right" />
      </WorkoutProvider>
    </HeroUIProvider>
  );
}
