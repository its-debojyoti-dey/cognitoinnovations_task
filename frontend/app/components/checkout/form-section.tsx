import type React from "react";
interface FormSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function FormSection({ title, subtitle, children }: FormSectionProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 pb-8 w-full">
      <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
      {subtitle && (
        <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>
      )}
      <div className="space-y-6">{children}</div>
    </div>
  );
}
