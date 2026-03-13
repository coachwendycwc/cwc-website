interface SeparatorProps {
  variant?: "light" | "dark" | "subtle";
  label?: string;
  className?: string;
}

const variantClasses: Record<string, string> = {
  light: "border-[#E5E5E5]",
  dark: "border-[#525252]",
  subtle: "border-[#F5F5F5]",
};

export default function Separator({
  variant = "light",
  label,
  className = "",
}: SeparatorProps) {
  if (label) {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className={`flex-1 border-t ${variantClasses[variant]}`} />
        <span className="text-xs font-medium text-[#737373] uppercase tracking-widest">
          {label}
        </span>
        <div className={`flex-1 border-t ${variantClasses[variant]}`} />
      </div>
    );
  }

  return (
    <hr className={`border-t ${variantClasses[variant]} ${className}`} />
  );
}
