"use client"

interface PaymentMethodsProps {
  methods: Array<{ id: string; label: string }>
  selected?: string
  onSelect?: (id: string) => void
}

export function PaymentMethods({ methods, selected, onSelect }: PaymentMethodsProps) {
  return (
    <div className="space-y-3">
      {methods.map((method) => (
        <div key={method.id} className="flex items-center gap-3">
          <input
            type="radio"
            id={method.id}
            name="payment"
            checked={selected === method.id}
            onChange={() => onSelect?.(method.id)}
            className="w-5 h-5 cursor-pointer accent-red-500"
          />
          <label htmlFor={method.id} className="text-gray-700 cursor-pointer">
            {method.label}
          </label>
        </div>
      ))}
    </div>
  )
}
