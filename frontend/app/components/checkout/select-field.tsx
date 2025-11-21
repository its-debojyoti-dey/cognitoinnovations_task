import type React from "react";
import { cn } from "@/app/utils/utils";

interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  required?: boolean;
  options: { value: string; label: string }[];
}

export function SelectField({
  label,
  required,
  options,
  className,
  ...props
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        className={cn(
          "px-4 py-3 border border-gray-200 rounded-md",
          "text-foreground placeholder:text-muted-foreground",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
          "appearance-none bg-no-repeat bg-right",
          "transition-colors duration-200",
          className
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23556570' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`,
          backgroundPosition: "right 0.75rem center",
          backgroundSize: "16px 16px",
          paddingRight: "2.5rem",
        }}
        {...props}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
