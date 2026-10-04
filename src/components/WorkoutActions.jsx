"use client";

import { Button } from "@heroui/react";
import { useWorkout } from "@/context/WorkoutContext";

export default function WorkoutActions({ workout }) {
  const { addToPlan, addToSaved } = useWorkout();

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8">
      <Button 
        className="flex-1 bg-[#ccff00] text-black font-semibold text-sm rounded-none h-12"
        size="lg"
        onPress={() => addToPlan(workout)}
      >
        Add to today&apos;s plan
      </Button>
      <Button 
        className="flex-1 bg-transparent border border-[#222630] text-[#e5e7eb] hover:bg-white/5 font-medium text-sm rounded-none h-12"
        size="lg"
        onPress={() => addToSaved(workout)}
      >
        Save for later
      </Button>
    </div>
  );
}
