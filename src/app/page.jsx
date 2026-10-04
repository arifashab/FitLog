import HeroBanner from "@/components/HeroBanner";
import WorkoutCard from "@/components/WorkoutCard";
import { fetchWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await fetchWorkouts();

  return (
    <main className="container mx-auto px-6 pb-20">
      <HeroBanner />
      
      <section id="library" className="mt-20 scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wider mb-8">
          The Library
        </h2>
        
        {workouts && workouts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#a1a1aa] border border-white/5 rounded-2xl bg-white/5">
            <p>No workouts found or failed to load. Please try again later.</p>
          </div>
        )}
      </section>
    </main>
  );
}
