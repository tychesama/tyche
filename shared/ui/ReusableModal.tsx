"use client";

import React from "react";
import { createPortal } from "react-dom";

const ReusableModal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
      <div className="bg-[var(--color-mini-card)] rounded-lg shadow-md max-w-[90vw] max-h-[90vh] min-w-[600px] min-h-[300px] overflow-auto">
        <div className="flex items-center justify-end px-4 py-3 bg-[var(--color-card)] rounded-t-lg">
          <button className="text-[var(--color-text-main)]" onClick={onClose}>X</button>
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default ReusableModal;
