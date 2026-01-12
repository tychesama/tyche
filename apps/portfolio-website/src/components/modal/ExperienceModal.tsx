"use client";

import React from "react";
import ExperienceCard from "../common/ExperienceCard";

interface Experience {
  company: string;
  logo: string;
  role: string;
  duration: string;
  date: string;
  link: string;
  images: string[];
  description: string;
}

const ExperienceModal = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto scrollbar-hide">
      {experiences.map((exp, idx) => (
        <ExperienceCard key={idx} experience={exp} />
      ))}
    </div>
  );
};

export default ExperienceModal;
