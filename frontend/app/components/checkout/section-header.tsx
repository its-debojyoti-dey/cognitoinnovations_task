interface SectionHeaderProps {
  title: string;
  description?: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-4">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 text-xs sm:text-sm text-justify">
          {description}
        </p>
      )}
    </div>
  );
}
