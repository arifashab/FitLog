"use client";

import { useState } from "react";
import { useWorkout } from "@/context/WorkoutContext";
import { Tabs, Tab, Spinner, Dropdown, Button } from "@heroui/react";
import PlanItemCard from "@/components/PlanItemCard";

export default function MyPlanPage() {
  const { planItems, savedItems, isLoaded } = useWorkout();
  const [sortBy, setSortBy] = useState("duration");

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Spinner color="current" className="text-accent" size="lg" />
      </div>
    );
  }

  const sortItems = (items) => {
    return [...items].sort((a, b) => {
      if (sortBy === "duration") return b.duration - a.duration;
      if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  };

  const sortedPlan = sortItems(planItems);
  const sortedSaved = sortItems(savedItems);

  const totalExercises = planItems.length;
  const totalMinutes = planItems.reduce((acc, item) => acc + item.duration, 0);
  const totalCalories = planItems.reduce((acc, item) => acc + item.caloriesBurned, 0);

  return (
    <main className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
      <div className="flex flex-col mb-10">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-wider mb-3">
          My Plan
        </h1>
        <p className="text-[#8a919f] text-lg">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 md:gap-6 mb-12">
        <div className="bg-[#12161e] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center">
          <p className="text-[#8a919f] font-semibold text-xs md:text-sm tracking-wider uppercase mb-2">Exercises</p>
          <p className="text-3xl md:text-5xl font-display font-bold text-accent">{totalExercises}</p>
        </div>
        <div className="bg-[#12161e] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center">
          <p className="text-[#8a919f] font-semibold text-xs md:text-sm tracking-wider uppercase mb-2">Minutes</p>
          <p className="text-3xl md:text-5xl font-display font-bold text-white">{totalMinutes}</p>
        </div>
        <div className="bg-[#12161e] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center">
          <p className="text-[#8a919f] font-semibold text-xs md:text-sm tracking-wider uppercase mb-2">Calories</p>
          <p className="text-3xl md:text-5xl font-display font-bold text-white">{totalCalories}</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 right-0 z-10 flex items-center gap-3 mt-1">
          <span className="text-[#8a919f] text-sm font-medium hidden sm:block">Sort By</span>
          <Dropdown>
            <Button 
              variant="bordered"
              className="bg-[#12161e] border-white/5 px-4 rounded-lg text-white font-medium text-sm flex items-center gap-2 hover:bg-[#1a202c] transition-colors cursor-pointer"
            >
              {sortBy === "duration" ? "Duration" : sortBy === "calories" ? "Calories" : "Rating"} 
              <span className="text-[10px] text-[#8a919f]">▼</span>
            </Button>
            <Dropdown.Popover className="bg-[#141a24] border border-white/5 min-w-[120px] rounded-lg">
              <Dropdown.Menu 
                aria-label="Sort options"
                selectionMode="single"
                selectedKeys={new Set([sortBy])}
                onSelectionChange={(keys) => setSortBy(Array.from(keys)[0])}
                itemClasses={{
                  base: "data-[hover=true]:bg-white/5 text-white data-[selectable=true]:focus:bg-white/5"
                }}
              >
                <Dropdown.Item id="duration" textValue="Duration">Duration</Dropdown.Item>
                <Dropdown.Item id="calories" textValue="Calories">Calories</Dropdown.Item>
                <Dropdown.Item id="rating" textValue="Rating">Rating</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        </div>

        <Tabs aria-label="My Plan Tabs">
          <Tabs.List className="bg-[#141a24] p-1.5 rounded-xl border border-white/5 flex gap-2 w-fit">
            <Tabs.Tab 
              id="today" 
              className={({ isSelected }) => 
                `max-w-fit px-6 h-9 rounded-lg flex items-center justify-center font-medium cursor-pointer transition-colors outline-none ${
                  isSelected ? "bg-[#1e232e] text-white shadow-sm" : "text-[#89919f] hover:text-white/80"
                }`
              }
            >
              Today&apos;s Plan
            </Tabs.Tab>
            <Tabs.Tab 
              id="saved" 
              className={({ isSelected }) => 
                `max-w-fit px-6 h-9 rounded-lg flex items-center justify-center font-medium cursor-pointer transition-colors outline-none ${
                  isSelected ? "bg-[#1e232e] text-white shadow-sm" : "text-[#89919f] hover:text-white/80"
                }`
              }
            >
              Saved
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel id="today">
            <div className="pt-8 flex flex-col gap-4">
              {sortedPlan.length === 0 ? (
                <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-white/[0.02]">
                  <p className="text-[#8a919f]">Your plan is empty. Go add some workouts!</p>
                </div>
              ) : (
                sortedPlan.map(workout => (
                  <PlanItemCard key={`plan-${workout.id}`} workout={workout} type="plan" />
                ))
              )}
            </div>
          </Tabs.Panel>
          
          <Tabs.Panel id="saved">
            <div className="pt-8 flex flex-col gap-4">
              {sortedSaved.length === 0 ? (
                <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-white/[0.02]">
                  <p className="text-[#8a919f]">You haven&apos;t saved any workouts for later.</p>
                </div>
              ) : (
                sortedSaved.map(workout => (
                  <PlanItemCard key={`saved-${workout.id}`} workout={workout} type="saved" />
                ))
              )}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </main>
  );
}
