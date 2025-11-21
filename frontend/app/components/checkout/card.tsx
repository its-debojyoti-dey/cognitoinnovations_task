import type React from "react"
interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return <div className={`border border-gray-200 rounded-lg bg-white p-6 ${className}`}>{children}</div>
}
