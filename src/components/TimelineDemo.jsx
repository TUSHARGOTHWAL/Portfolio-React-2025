import React from "react";
import { Timeline } from "./Timeline";
import hc2 from "../assets/hc2.jpg";
import hc4 from "../assets/hc4.jpg";
import s from "../assets/s.jpg";
import gssoc from "../assets/gssoc.jpg";
import msc from "../assets/msc.jpg";
import DevSourceLogo from "../assets/DevSourceLogo.png";
export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800  dark:text-neutral-200 text-xs md:text-xl font-extrabold mb-8">
            Full Stack SDE intern - INDIAN SPACE ASSOCIATION
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://i.ibb.co/S6xX3sV/ISp-A-Dark-2-2024.png" alt="ISp-A-Dark-2-2024"
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={s} alt="ISp-A-Dark-2-2024"
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>

          <p className="text-neutral-800 dark:text-neutral-200 mt-10 text-xs md:text-xl font-extrabold mb-8">
            Organizer - HackArcode Hackathon
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={hc4}
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={hc2}
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
             

          </div>

          <p className="text-neutral-800 dark:text-neutral-200 mt-10 text-xs md:text-xl font-extrabold mb-8">
            Placement Coordinator - MSIT Delhi
          </p>
          

          <p className="text-neutral-800 dark:text-neutral-200 mt-10 text-xs md:text-xl font-extrabold mb-8">
Mentor- GSSoC 2024          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={gssoc}
              alt="startup template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

          </div>
        </div>
        
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 mt-10 text-xs md:text-xl font-extrabold mb-8">
            Lead Advisor - Microsoft Student Chapter- MSIT
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={msc}
              alt="hero template"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 mt-10 text-xs md:text-xl font-extrabold mb-8">
          Head Activity Coordinator - IIC MSIT
          </p>
          
          <p className="text-neutral-800 dark:text-neutral-200 mt-10 text-xs md:text-xl font-extrabold mb-8">
            
          Web Developer- MITZ Computer Institute
          </p>
         
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 mt-10 text-xs md:text-xl font-extrabold mb-8">
          Founder- DevSource Community
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={DevSourceLogo}
              alt="hero template"
              className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 mt-10 text-xs md:text-xl font-extrabold mb-8">

          Community Outreach Coordinator - GDSC MSIT          </p>
         
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
