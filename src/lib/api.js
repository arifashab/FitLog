export async function fetchWorkouts() {
  try {
    const response = await fetch("https://api.api-store.workers.dev/api/fitlog", {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    if (!response.ok) {
      throw new Error("Failed to fetch workouts");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return [];
  }
}

export async function fetchWorkoutById(id) {
  try {
    const response = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`, {
      next: { revalidate: 3600 }
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch workout ${id}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching workout ${id}:`, error);
    return null;
  }
}
