"use client";

interface RadioButtonProps {
  id: string;
  name: string;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  rate?: number;
}

export function RadioButton({
  id,
  name,
  label,
  checked = false,
  rate,
  onChange,
}: RadioButtonProps) {
  return (
    <div className="flex flex-col gap-1 ">
      <p className="text-gray-700">{label}</p>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          id={id}
          name={name}
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          className="w-5 h-5 cursor-pointer accent-red-500"
        />
        <label htmlFor={id} className="text-gray-500 text-sm cursor-pointer">
          Rate - {`$${Number(rate).toFixed(2)}`}
        </label>
      </div>
    </div>
  );
}
