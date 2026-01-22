"use client";

import React from "react";
import { createPortal } from "react-dom";

type ReusableModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  CloseIcon?: React.ElementType;
};


const ReusableModal = ({ isOpen, onClose, children, CloseIcon }: ReusableModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40" onClick={onClose}>
      <div className="bg-[var(--color-mini-card)] rounded-lg shadow-md max-w-[90vw] max-h-[90vh] min-w-[600px] min-h-[300px] overflow-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-end px-4 py-3 bg-[var(--color-card)] rounded-t-lg">
          <button onClick={onClose} className="p-1">
            {CloseIcon ? (
              <CloseIcon className="w-6 h-6 text-[var(--color-text-main)]" />
            ) : (
              "✕"
            )}
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default ReusableModal;
