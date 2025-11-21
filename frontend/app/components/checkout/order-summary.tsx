interface SummaryItem {
  label: string
  value: string
}

interface OrderSummaryProps {
  items: SummaryItem[]
  totalLabel?: string
  totalValue?: string
}

export function OrderSummary({ items, totalLabel = "Total Amount", totalValue = "$0.00" }: OrderSummaryProps) {
  return (
    <div className="space-y-6">
      {/* Summary Items */}
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <span className="text-gray-500 font-medium">{item.label}</span>
            <span className="text-gray-900 font-semibold text-lg">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200"></div>

      {/* Total Amount - More Prominent */}
      <div className="flex justify-between items-center pt-2">
        <span className="text-xl font-bold text-gray-900">{totalLabel}</span>
        <span className="text-2xl font-bold text-gray-900">{totalValue}</span>
      </div>
    </div>
  )
}
