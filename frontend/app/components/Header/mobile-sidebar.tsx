"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, ChevronDown } from "lucide-react"

interface NavItem {
  label: string
  href: string
  subItems?: NavItem[]
}

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
}

export const MobileSidebar = ({ isOpen, onClose, navItems }: MobileSidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleSubMenu = (label: string) => {
    setExpandedItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  // Close sidebar when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-md" aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex-1 py-2 px-3 hover:bg-gray-100 rounded-md transition-colors"
                >
                  {item.label}
                </Link>
                {item.subItems && item.subItems.length > 0 && (
                  <button
                    onClick={() => toggleSubMenu(item.label)}
                    className={`p-2 transition-transform ${expandedItems.includes(item.label) ? "rotate-180" : ""}`}
                    aria-label={`Toggle ${item.label} submenu`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Sub-items */}
              {item.subItems && expandedItems.includes(item.label) && (
                <div className="pl-4 space-y-1 mt-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      onClick={onClose}
                      className="block py-2 px-3 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  )
}
