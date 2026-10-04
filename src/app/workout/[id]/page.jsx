import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchWorkoutById } from "@/lib/api";
import WorkoutActions from "@/components/WorkoutActions";

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;
  const workout = await fetchWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return (
    <main className="container mx-auto px-6 py-12 md:py-20 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
        
        {/* Left Column: Image */}
        <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[700px] rounded-2xl overflow-hidden bg-[#15171d] border border-[#222630]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white uppercase leading-tight mb-4">
            {workout.name}
          </h1>
          
          <p className="text-lg text-[#9ca3af] mb-8 leading-relaxed">
            {workout.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {workout.muscleGroups.map((group) => (
              <span key={group} className="bg-accent text-black font-bold text-[11px] tracking-widest uppercase px-3 py-1 rounded">
                {group}
              </span>
            ))}
          </div>

          <div className="bg-[#111318] border border-[#222630] rounded-xl p-6 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
              <div>
                <p className="text-[10px] text-[#9ca3af] font-bold tracking-widest uppercase mb-1.5">Equipment</p>
                <p className="text-[#e5e7eb] font-medium text-sm">{workout.equipment}</p>
              </div>
              <div>
                <p className="text-[10px] text-[#9ca3af] font-bold tracking-widest uppercase mb-1.5">Difficulty</p>
                <p className="text-[#e5e7eb] font-medium text-sm">{workout.difficulty}</p>
              </div>
              <div>
                <p className="text-[10px] text-[#9ca3af] font-bold tracking-widest uppercase mb-1.5">Sets</p>
                <p className="text-[#e5e7eb] font-medium text-sm">{workout.sets}</p>
              </div>
              <div>
                <p className="text-[10px] text-[#9ca3af] font-bold tracking-widest uppercase mb-1.5">Reps</p>
                <p className="text-[#e5e7eb] font-medium text-sm">{workout.reps}</p>
              </div>
              <div>
                <p className="text-[10px] text-[#9ca3af] font-bold tracking-widest uppercase mb-1.5">Duration</p>
                <p className="text-[#e5e7eb] font-medium text-sm">{workout.duration} min</p>
              </div>
              <div>
                <p className="text-[10px] text-[#9ca3af] font-bold tracking-widest uppercase mb-1.5">Calories</p>
                <p className="text-[#e5e7eb] font-medium text-sm">{workout.caloriesBurned} kcal</p>
              </div>
              <div>
                <p className="text-[10px] text-[#9ca3af] font-bold tracking-widest uppercase mb-1.5">Rating</p>
                <p className="text-[#e5e7eb] font-medium text-sm">★ {workout.rating}</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-display font-bold text-white uppercase tracking-wider mb-6">
            Instructions
          </h2>
          
          <ul className="flex flex-col gap-5 mb-12">
            {workout.instructions.map((step, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <span className="text-[#9ca3af] font-display font-bold text-xl leading-none mt-0.5">
                  {idx + 1}.
                </span>
                <span className="text-[#d1d5db] text-base leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ul>

          <WorkoutActions workout={workout} />
        </div>
      </div>
    </main>
  );
}
