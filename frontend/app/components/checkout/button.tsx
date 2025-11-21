import { cn } from "@/app/utils/utils";
import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-8 py-3 rounded-md font-medium transition-all duration-200",
        variant === "primary" && "bg-red-500 hover:bg-red-600 text-white",
        variant === "secondary" &&
          "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
