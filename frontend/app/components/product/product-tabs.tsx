"use client"

interface ProductTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function ProductTabs({ activeTab, onTabChange }: ProductTabsProps) {
  const tabs = ["Description", "Information", "Review"]

  return (
    <div className="flex gap-8 border-b border-gray-200">
      {tabs.map((tab) => {
        const tabKey = tab.toLowerCase()
        return (
          <button
            key={tabKey}
            onClick={() => onTabChange(tabKey)}
            className={`py-4 font-semibold text-sm transition-colors relative ${
              activeTab === tabKey ? "text-red-500" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {tab}
            {activeTab === tabKey && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 rounded-t-md"></div>
            )}
          </button>
        )
      })}
    </div>
  )
}
