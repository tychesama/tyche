"use client";

import React, { useState } from "react";
import ExperienceCard from "../common/ExperienceCard";
import ReusableModal from "@shared/ui/ReusableModal";

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

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Clickable container */}
      <div
        onClick={() => setOpen(true)}
        className="p-2 flex flex-col gap-3 h-[520px] overflow-y-auto scrollbar-hide cursor-pointer"
      >
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}
      </div>

      {/* Reusable Modal */}
      <ReusableModal
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        {/* empty content for now */}
        <div />
      </ReusableModal>
    </>
  );
};

export default ExperienceSection;
