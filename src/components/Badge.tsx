interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "teal" | "pink" | "gold" | "green" | "purple" | "dark";
  size?: "sm" | "md";
  className?: string;
}

const variantClasses: Record<string, string> = {
  default: "bg-[#F5F5F5] text-[#525252]",
  teal: "bg-[#E8F8FD] text-[#3EBCE8]",
  pink: "bg-[#FDE8F4] text-[#E91E8C]",
  gold: "bg-[#FFF8E5] text-[#B8A000]",
  green: "bg-[#F7FAE5] text-[#7A9400]",
  purple: "bg-[#F3F0F8] text-[#8B7BB5]",
  dark: "bg-[#3EBCE8] text-white",
};

const sizeClasses: Record<string, string> = {
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3 py-1 text-xs",
};

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-semibold uppercase tracking-wider rounded-full ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
}
