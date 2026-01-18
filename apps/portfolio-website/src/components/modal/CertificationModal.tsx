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
        <div className="bg-[--color-card] py-2 px-3 h-[284px] w-[240px] flex flex-col items-center gap-3 shadow-sm rounded-lg">
          <img
            src="/assets/ccna.jpg"
            alt="logo"
            className="w-[200px] h-[200px] rounded-lg object-cover"
          />
          <p>CCNA</p>
          <p>Networking</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start">
        <div>
          <p>Certificiate Title</p>
          <p> Cert Description</p>
          <p>Date</p>
        </div>
      </div>
    </div>
  );
};

export default CertificationModal;
