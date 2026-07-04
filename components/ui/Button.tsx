import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "px-8 py-4 rounded-full font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105",

    secondary:
      "border border-white text-white hover:bg-white hover:text-black hover:scale-105",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}