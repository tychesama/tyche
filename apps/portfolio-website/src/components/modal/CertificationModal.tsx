"use client";

import React from "react";

interface Certification {
  name: string;
  logo: string;
  image?: string;
  issuer?: string;
  date?: string;
  details?: string;
}

interface CertificationsCardProps {
  certification: Certification;
}

const CertificationModal = () => {
  return (
    <div className="flex flex-row gap-4 w-[668px] p-2 h-[314px]">
      <div className="flex flex-row items-center justify-center">
        <div className="bg-[--color-card] p-[10px] h-[284px] w-[240px] flex flex-col items-center shadow-sm rounded-lg">
          <img
            src="/assets/ccna.jpg"
            alt="logo"
            className="w-[200px] h-[200px] rounded-lg object-cover"
          />
          <p className="my-auto text-[30px] font-bold tracking-wide text-[var(--color-text-main)] leading-none">CCNA</p>
          <p className="text-[18px] font-bold text-[var(--color-text-subtle)] leading-none">Certificate</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start p-2">
        <p className="text-[30px] font-bold text-[var(--color-text-main)] leading-[1.1]">Cisco Certified Network Associate</p>
        <p className="my-auto text-[18px] text-[var(--color-text-subtle)] leading-none">Entry-level certification from Cisco Systems that validates foundational skills in networking technologies, essential for roles like network administrator or engineer. It covers broad topics including network fundamentals, IP connectivity, security basics, and automation.</p>
        <p className="text-[18px] text-[var(--color-text-subtle)] leading-none">Obtained: 12/12/25</p>
      </div>
    </div>
  );
};

export default CertificationModal;
