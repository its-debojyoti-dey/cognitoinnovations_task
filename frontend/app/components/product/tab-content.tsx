interface TabContentProps {
  activeTab: string
}

export function TabContent({ activeTab }: TabContentProps) {
  return (
    <div className="py-8">
      {activeTab === "description" && (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente odio, error dolore vero
            temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribus debitis
            corporis, eaque dicta, repellat amet, illum adipisci vel perferendis dolor! Quis vel consequuntur repellat
            distinctio rem. Corrutti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum
            dignissimos consectetur quae vero in perferendis provident quis.
          </p>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Packaging & Delivery</h3>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero perferendis dolor! Quis vel
              consequuntur repellat distinctio rem. Corrutti ratione alias odio, error dolore temporibus consequatur,
              nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quis.
            </p>
          </div>
        </div>
      )}

      {activeTab === "information" && (
        <div className="text-gray-700">
          <p>Additional product information will be displayed here.</p>
        </div>
      )}

      {activeTab === "review" && (
        <div className="text-gray-700">
          <p>Customer reviews will be displayed here.</p>
        </div>
      )}
    </div>
  )
}
