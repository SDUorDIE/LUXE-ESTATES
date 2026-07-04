import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "px-6 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2",
        {
          "bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105":
            variant === "primary",

          "border border-white text-white hover:bg-white hover:text-black":
            variant === "secondary",
        },
        className
      )}
    >
      {children}
    </button>
  );
}