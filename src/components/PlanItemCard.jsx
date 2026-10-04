"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Tooltip } from "@heroui/react";
import { Clock, Flame, Star, Check, X, Plus } from "lucide-react";
import { useWorkout } from "@/context/WorkoutContext";

export default function PlanItemCard({ workout, type = "plan" }) {
  const { removeFromPlan, markAsDone, removeFromSaved, addToPlan } = useWorkout();

  const isPlan = type === "plan";
  const isDone = isPlan && workout.isDone;

  return (
    <article className={`flex flex-col md:flex-row gap-4 p-4 rounded-2xl bg-[#14161c] border border-white/5 transition-all ${isDone ? 'opacity-50 grayscale hover:grayscale-0' : ''}`}>
      {/* Thumbnail */}
      <div className="relative w-full md:w-32 h-48 md:h-24 rounded-xl overflow-hidden flex-shrink-0">
        <Image 
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 128px"
        />
      </div>

      {/* Description & Metrics */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className={`text-xl font-display font-bold text-white uppercase tracking-wider mb-1 ${isDone ? 'line-through decoration-2 decoration-accent/50' : ''}`}>
          {workout.name}
        </h2>
        <p className="text-[#8a919f] text-sm mb-3">
          {workout.equipment}
        </p>

        <div className="flex items-center gap-4 text-xs text-[#d1d5db]">
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-[#8a919f]" />
            <span>{workout.duration} min</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Flame size={14} className="text-accent" />
            <span>{workout.caloriesBurned} kcal</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star size={14} className="text-[#8a919f]" />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-4 md:mt-0 pt-4 md:pt-0 border-t border-white/5 md:border-none md:ml-4">
        <Link href={`/workout/${workout.id}`} className="text-white text-xs hover:text-accent transition-colors">
          View Details
        </Link>

        {isPlan ? (
          <>
            <Button
              className={`font-semibold text-xs rounded-full h-8 px-4 min-w-0 ${isDone ? 'bg-[#222630] text-[#8a919f]' : 'bg-[#ccff00] text-black hover:bg-[#b3e600]'}`}
              onPress={() => markAsDone(workout.id)}
              isDisabled={isDone}
              startContent={isDone ? <Check size={14} strokeWidth={3} /> : null}
            >
              {isDone ? 'Done' : 'Mark as Done'}
            </Button>
            <Tooltip content="Remove from plan" classNames={{ content: "text-xs bg-[#222630] text-white rounded-lg" }}>
              <Button
                isIconOnly
                variant="light"
                className="text-[#6b7280] hover:text-white rounded-full h-7 w-7 min-w-0 p-0"
                onPress={() => removeFromPlan(workout.id)}
              >
                <X size={16} />
              </Button>
            </Tooltip>
          </>
        ) : (
          <>
            <Button
              className="bg-[#ccff00] text-black font-semibold text-xs rounded-full h-8 px-4 min-w-0 hover:bg-[#b3e600]"
              onPress={() => addToPlan(workout)}
              startContent={<Plus size={14} strokeWidth={3} />}
            >
              Add to Plan
            </Button>
            <Tooltip content="Remove from saved" classNames={{ content: "text-xs bg-[#222630] text-white rounded-lg" }}>
              <Button
                isIconOnly
                variant="light"
                className="text-[#6b7280] hover:text-white rounded-full h-7 w-7 min-w-0 p-0"
                onPress={() => removeFromSaved(workout.id)}
              >
                <X size={16} />
              </Button>
            </Tooltip>
          </>
        )}
      </div>
    </article>
  );
}
