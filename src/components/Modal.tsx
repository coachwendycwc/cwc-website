"use client";

import { useEffect, useCallback, useState, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fade in/out
  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [open]);

  // Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [open, handleKeyDown]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        visible ? "bg-black/60 backdrop-blur-sm" : "bg-black/0"
      }`}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        className={`relative max-w-full max-h-full transition-all duration-300 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
