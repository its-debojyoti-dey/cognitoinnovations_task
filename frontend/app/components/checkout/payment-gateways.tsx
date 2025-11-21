interface PaymentGatewaysProps {
  gateways: Array<{ id: string; name: string; logo: string }>
}

export function PaymentGateways({ gateways }: PaymentGatewaysProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {gateways.map((gateway) => (
        <div
          key={gateway.id}
          className="flex items-center justify-center w-24 h-12 border border-gray-200 rounded-lg bg-gray-50 hover:border-gray-300 cursor-pointer transition"
        >
          <img
            src={gateway.logo || "/placeholder.svg"}
            alt={gateway.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ))}
    </div>
  )
}
