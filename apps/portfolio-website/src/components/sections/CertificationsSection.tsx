"use client";

import React, { useState } from "react";
import CertificationsCard from "../common/CertificationsCard";
import ReusableModal from "@shared/ui/ReusableModal";
import CertificationModal from "../modal/CertificationModal";
import CloseIcon from "@mui/icons-material/Close";

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
  const [open, setOpen] = useState(false);
  
  return (
    <>
    <div  className="relative w-full overflow-hidden -mt-2 ">
      <div onClick={() => setOpen(true)} className="flex gap-2 animate-scroll py-3 -translate-y-2 cursor-pointer">
        {[...certifications, ...certifications].map((cert, idx) => (
          <CertificationsCard key={idx} certification={cert} />
        ))}
      </div>
    </div>

    {/* Reusable Modal */}
      <ReusableModal
        isOpen={open}
        onClose={() => setOpen(false)}
        CloseIcon={CloseIcon}
      >
        <CertificationModal />
        <div />
      </ReusableModal>
    </>
  );
};

export default CertificationsSection;
