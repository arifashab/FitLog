"use client";

import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const WorkoutContext = createContext();

export function WorkoutProvider({ children }) {
  const [planItems, setPlanItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog_plan");
      const storedSaved = localStorage.getItem("fitlog_saved");
      if (storedPlan) setPlanItems(JSON.parse(storedPlan));
      if (storedSaved) setSavedItems(JSON.parse(storedSaved));
    } catch (error) {
      console.error("Failed to load from localStorage", error);
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage whenever items change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("fitlog_plan", JSON.stringify(planItems));
      localStorage.setItem("fitlog_saved", JSON.stringify(savedItems));
    }
  }, [planItems, savedItems, isLoaded]);

  const addToPlan = (workout) => {
    if (planItems.length >= 5) {
      toast.error("Your plan is full! (Max 5 workouts)");
      return;
    }
    
    if (planItems.some((item) => String(item.id) === String(workout.id))) {
      toast.error("Workout is already in today's plan!");
      return;
    }

    setPlanItems([...planItems, { ...workout, isDone: false }]);
    toast.success("Added to today's plan");
  };

  const removeFromPlan = (id) => {
    setPlanItems(planItems.filter((item) => String(item.id) !== String(id)));
    toast.success("Removed from plan");
  };

  const markAsDone = (id) => {
    setPlanItems(
      planItems.map((item) =>
        String(item.id) === String(id) ? { ...item, isDone: true } : item
      )
    );
    toast.success("Workout marked as done! Great job!");
  };

  const addToSaved = (workout) => {
    if (savedItems.some((item) => String(item.id) === String(workout.id))) {
      toast.error("Workout is already saved!");
      return;
    }

    setSavedItems([...savedItems, workout]);
    toast.success("Saved for later");
  };

  const removeFromSaved = (id) => {
    setSavedItems(savedItems.filter((item) => String(item.id) !== String(id)));
    toast.success("Removed from saved list");
  };

  return (
    <WorkoutContext.Provider
      value={{
        planItems,
        savedItems,
        addToPlan,
        removeFromPlan,
        markAsDone,
        addToSaved,
        removeFromSaved,
        isLoaded
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useWorkout must be used within a WorkoutProvider");
  }
  return context;
}
