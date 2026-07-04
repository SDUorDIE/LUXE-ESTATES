import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export default function Input({
  icon,
  className,
  ...props
}: InputProps) {
  return (
    <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-xl px-4 focus-within:border-yellow-500 transition">

      {icon && (
        <div className="text-yellow-500 mr-3">
          {icon}
        </div>
      )}

      <input
        {...props}
        className={clsx(
          "bg-transparent w-full py-4 outline-none placeholder:text-zinc-500",
          className
        )}
      />

    </div>
  );
}