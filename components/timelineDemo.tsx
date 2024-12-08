import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
        title: "2014",
        content: (
          <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Jiu Jitsu Journey Begins</h4>
            <p className="text-neutral-700 dark:text-neutral-300">
              Started training in Jiu Jitsu, laying the foundation for a remarkable career in martial arts.
            </p>
          </div>
        )
      },
      {
        title: "2018",
        content: (
          <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">National Recognition</h4>
            <p className="text-neutral-700 dark:text-neutral-300">
              Began dominating national Jiu Jitsu competitions, winning multiple gold medals and establishing himself as a top athlete in India.
            </p>
          </div>
        )
      },
      {
        title: "2022",
        content: (
          <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Asian Games Triumph</h4>
            <p className="text-neutral-700 dark:text-neutral-300">
              Represented India in Jiu Jitsu at the Asian Games, showcasing exceptional skill and dedication to the sport.
            </p>
          </div>
        )
      },
      {
        title: "2023",
        content: (
          <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">ADCC World Championship</h4>
            <p className="text-neutral-700 dark:text-neutral-300">
              Achieved a significant milestone by winning the ADCC Submission Fighting World Championship, solidifying his status as a global Jiu Jitsu elite.
            </p>
          </div>
        )
      },
      {
        title: "Achievements",
        content: (
          <div className="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Remarkable Milestones</h4>
            <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300">
              <li>8-time Gold Medalist in National Jiu Jitsu Championships</li>
              <li>Represented India in Asian Games 2022</li>
              <li>ADCC Submission Fighting World Championship Winner</li>
            </ul>
          </div>
        )
      }
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
