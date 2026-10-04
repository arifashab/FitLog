"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@heroui/react";
import { Clock, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  return (
    <Link href={`/workout/${workout.id}`} className="block w-full outline-none">
      <Card 
        className="w-full bg-[#15171d] border border-[#222630] hover:border-[#383f4f] transition-colors rounded-2xl overflow-hidden"
      >
      <CardHeader className="p-0 relative h-52 w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </CardHeader>
      <CardContent className="p-6 flex flex-col items-start w-full">
        <div className="flex flex-wrap gap-2 mb-3">
          {workout.muscleGroups.map((group) => (
            <span key={group} className="bg-accent text-black font-bold text-[10px] tracking-widest uppercase px-2 py-0.5 rounded">
              {group}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-display font-bold text-white uppercase leading-tight mb-1">
          {workout.name}
        </h3>
        <p className="text-sm text-[#9ca3af] mb-4">
          {workout.equipment}
        </p>
        
        <div className="w-full border-t border-[#222630] mt-auto pt-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm text-[#9ca3af]">
            <Clock size={16} />
            <span>{workout.duration} min</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-[#9ca3af]">
            <Flame size={16} />
            <span>{workout.caloriesBurned} kcal</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-[#9ca3af]">
            <Star size={16} />
            <span>{workout.rating}</span>
          </div>
        </div>
      </CardContent>
    </Card>
    </Link>
  );
}
