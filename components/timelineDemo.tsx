import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2014",
      content: (
        <div className="bg-neutral-900 p-4 md:p-6 rounded-lg flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex-shrink-0 w-full md:w-auto">
            <Image 
              src="https://res.cloudinary.com/dhrbg2jbi/image/upload/v1733658606/IMG-20231204-WA0108_hn17lu.jpg" 
              alt="Jiu Jitsu Training Beginnings" 
              width={200} 
              height={200} 
              className="rounded-lg object-cover w-full md:w-[200px] h-48 md:h-[200px]"
            />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg md:text-xl font-semibold mb-2 text-white">Jiu Jitsu Journey Begins</h4>
            <p className="text-sm md:text-base text-neutral-300">
              Embarked on a transformative martial arts journey, laying the groundwork for a future champion. First steps into the world of Jiu Jitsu with unwavering passion and determination.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "2018",
      content: (
        <div className="bg-neutral-900 p-4 md:p-6 rounded-lg flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex-shrink-0 w-full md:w-auto">
            <Image 
              src="https://res.cloudinary.com/dhrbg2jbi/image/upload/v1733658606/IMG-20231204-WA0108_hn17lu.jpg" 
              alt="National Championships" 
              width={200} 
              height={200} 
              className="rounded-lg object-cover w-full md:w-[200px] h-48 md:h-[200px]"
            />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg md:text-xl font-semibold mb-2 text-white">National Dominance</h4>
            <p className="text-sm md:text-base text-neutral-300">
              Emerged as a powerhouse in national Jiu Jitsu competitions. Clinched multiple gold medals, establishing a reputation as India&apos;s rising martial arts talent.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "2022",
      content: (
        <div className="bg-neutral-900 p-4 md:p-6 rounded-lg flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex-shrink-0 w-full md:w-auto">
            <Image 
              src="https://res.cloudinary.com/dhrbg2jbi/image/upload/v1733658606/IMG-20231204-WA0108_hn17lu.jpg" 
              alt="Asian Games" 
              width={200} 
              height={200} 
              className="rounded-lg object-cover w-full md:w-[200px] h-48 md:h-[200px]"
            />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg md:text-xl font-semibold mb-2 text-white">Asian Games Pinnacle</h4>
            <p className="text-sm md:text-base text-neutral-300">
              Proudly represented India in Jiu Jitsu at the Asian Games. Demonstrated exceptional skill, mental fortitude, and sportsmanship on an international stage.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "2023",
      content: (
        <div className="bg-neutral-900 p-4 md:p-6 rounded-lg flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex-shrink-0 w-full md:w-auto">
            <Image 
              src="https://res.cloudinary.com/dhrbg2jbi/image/upload/v1733658606/IMG-20231204-WA0108_hn17lu.jpg" 
              alt="ADCC World Championship" 
              width={200} 
              height={200} 
              className="rounded-lg object-cover w-full md:w-[200px] h-48 md:h-[200px]"
            />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg md:text-xl font-semibold mb-2 text-white">Global Submission Champion</h4>
            <p className="text-sm md:text-base text-neutral-300">
              Conquered the ADCC Submission Fighting World Championship, etching his name in global martial arts history. A testament to relentless training and exceptional technique.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Achievements",
      content: (
        <div className="bg-neutral-900 p-4 md:p-6 rounded-lg">
          <h4 className="text-lg md:text-xl font-semibold mb-4 text-white text-center">Remarkable Milestones</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "National Championships", detail: "8-time Gold Medalist" },
              { title: "International Representation", detail: "Asian Games 2022" },
              { title: "World Championship", detail: "ADCC Submission Fighting" }
            ].map((achievement, index) => (
              <div 
                key={index} 
                className="bg-neutral-800 p-3 md:p-4 rounded-lg text-center"
              >
                <h5 className="text-base md:text-lg font-semibold text-white mb-2">
                  {achievement.title}
                </h5>
                <p className="text-sm md:text-base text-neutral-300">
                  {achievement.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full bg-black">
      <Timeline data={data} />
    </div>
  );
}