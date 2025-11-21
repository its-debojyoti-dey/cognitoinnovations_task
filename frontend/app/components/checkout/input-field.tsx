import { cn } from "@/app/utils/utils";
import type React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

export function InputField({
  label,
  required,
  className,
  ...props
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        className={cn(
          "px-4 py-3 border border-gray-200 rounded-md",
          "text-foreground placeholder:text-muted-foreground",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
          "transition-colors duration-200",
          className
        )}
        {...props}
      />
    </div>
  );
}
