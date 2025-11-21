"use client"

interface RadioButtonProps {
  id: string
  name: string
  label: string
  checked?: boolean
  onChange?: (checked: boolean) => void
}

export function RadioButton({ id, name, label, checked = false, onChange }: RadioButtonProps) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="w-5 h-5 cursor-pointer accent-red-500"
      />
      <label htmlFor={id} className="text-gray-700 cursor-pointer">
        {label}
      </label>
    </div>
  )
}
