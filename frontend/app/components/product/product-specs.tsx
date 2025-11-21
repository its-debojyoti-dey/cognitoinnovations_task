interface Spec {
  label: string
  value: string
}

interface ProductSpecsProps {
  specs: Spec[]
}

export function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <div className="space-y-3 mb-8 text-sm">
      {specs.map((spec) => (
        <div key={spec.label} className="flex items-start gap-4">
          <span className="font-semibold text-gray-900 w-24">{spec.label}</span>
          <span className="text-gray-600">:</span>
          <span className="text-gray-700">{spec.value}</span>
        </div>
      ))}
    </div>
  )
}
