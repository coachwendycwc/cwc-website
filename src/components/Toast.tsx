"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "info" | "error";
  show: boolean;
  onClose: () => void;
  duration?: number;
}

const borderColors: Record<string, string> = {
  success: "border-l-[#C4D82E]",
  info: "border-l-[#3EBCE8]",
  error: "border-l-[#E91E8C]",
};

const iconColors: Record<string, string> = {
  success: "text-[#C4D82E]",
  info: "text-[#3EBCE8]",
  error: "text-[#E91E8C]",
};

export default function Toast({
  message,
  type = "success",
  show,
  onClose,
  duration = 4000,
}: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      // Trigger slide-up animation
      requestAnimationFrame(() => setVisible(true));
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 300); // Wait for exit animation
      }, duration);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 left-4 md:left-auto md:right-6 md:bottom-6 z-50 max-w-sm bg-white rounded-xl shadow-lg border border-[#E5E5E5] border-l-4 ${borderColors[type]} p-4 flex items-start gap-3 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      role="alert"
    >
      {/* Icon */}
      <svg
        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconColors[type]}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {type === "success" && (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        )}
        {type === "info" && (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        )}
        {type === "error" && (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        )}
      </svg>
      <p className="text-sm text-[#1A1A1A]">{message}</p>
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(onClose, 300);
        }}
        className="ml-auto p-3 -mr-2 text-[#737373] hover:text-[#525252] transition-colors"
        aria-label="Dismiss"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
