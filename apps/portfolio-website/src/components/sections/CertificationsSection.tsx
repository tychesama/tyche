"use client";

import React from "react";
import CertificationsCard from "../common/CertificationsCard";

interface Certification {
  name: string;
  logo: string;
  image?: string;
  issuer?: string;
  date?: string;
  details?: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <div className="relative w-full overflow-hidden -mt-2">
      <div className="flex gap-2 animate-scroll py-3 -translate-y-2">
        {[...certifications, ...certifications].map((cert, idx) => (
          <CertificationsCard key={idx} certification={cert} />
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;
