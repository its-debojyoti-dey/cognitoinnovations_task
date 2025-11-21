import React from 'react'

const dealsDayData = [
    {
      "title": "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      "rating": 4.0,
      "brand": "NestFood",
      "price": 32.85,
      "oldPrice": 33.8,
      "image": "/mnt/data/14ea3a49-f6c3-44c5-9836-a875d447f0c1.png",
      "button": "Add"
    },
    {
      "title": "Perdue Simply Smart Organics Gluten Free",
      "rating": 4.0,
      "brand": "Old El Paso",
      "price": 24.85,
      "oldPrice": 26.8,
      "image": "/mnt/data/14ea3a49-f6c3-44c5-9836-a875d447f0c1.png",
      "button": "Add"
    },
    {
      "title": "Signature Wood-Fired Mushroom and Caramelized",
      "rating": 3.0,
      "brand": "Progresso",
      "price": 12.85,
      "oldPrice": 13.8,
      "image": "/mnt/data/14ea3a49-f6c3-44c5-9836-a875d447f0c1.png",
      "button": "Add"
    },
    {
      "title": "Simply Lemonade with Raspberry Juice",
      "rating": 3.0,
      "brand": "Yoplait",
      "price": 15.85,
      "oldPrice": 16.8,
      "image": "/mnt/data/14ea3a49-f6c3-44c5-9836-a875d447f0c1.png",
      "button": "Add"
    }
  ]
  
const DealsDay = () => {
  return (
    <div>
        {dealsDayData.map((product) => (
            <div key={product.image} className='bg-white rounded-lg p-4 flex flex-col items-center justify-center'>
                <img src={product.image} alt={product.title} className='w-full h-full object-cover' />
                <h3 className='text-2xl font-bold'>{product.title}</h3>
                <p className='text-sm text-gray-600'>{product.brand}</p>
                <p className='text-sm text-gray-600'>{product.price}</p>
                <p className='text-sm text-gray-600'>{product.oldPrice}</p>
                <p className='text-sm text-gray-600'>{product.rating}</p>
                <button className='bg-red-500 text-white px-4 py-2 rounded-md'>{product.button}</button>
            </div>
        ))}
    </div>
  )
}

export default DealsDay