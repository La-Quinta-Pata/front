import React, { useState } from 'react'
import Card from '../components/Card.Jsx';

const item_per_page = 12;

const catalogData = [
  {
    image: '/logo5_pata.png',
    author: 'Montse',
    country: 'Mexico',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione nemo aliquid dolores quo, quae architecto eveniet molestias itaque beatae repudiandae porro qui. Quasi corrupti expedita temporibus illo aliquid ipsam!'
  },
  {
    image: '/logo5_pata.png',
    author: 'Carolina',
    country: 'USA',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. '
  },
  {
    image: '/logo5_pata.png',
    author: 'Ana',
    country: 'Spain',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione nemo aliquid dolores quo, quae architecto eveniet molestias itaque beatae repudiandae porro qui. Quasi corrupti expedita temporibus illo aliquid ipsam!'
  },
  {
    image: '/logo5_pata.png',
    author: 'Lala',
    country: 'Canada',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione nemo aliquid dolores quo, quae architecto eveniet molestias itaque beatae repudiandae porro qui. Quasi corrupti expedita temporibus illo aliquid ipsam!'
  },
  {image: '/logo5_pata.png',
    author: 'Montse',
    country: 'Mexico',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione nemo aliquid dolores quo, quae architecto eveniet molestias itaque beatae repudiandae porro qui. Quasi corrupti expedita temporibus illo aliquid ipsam!'
  },
  {
    image: '/logo5_pata.png',
    author: 'Carolina',
    country: 'USA',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. '
  },
  {
    image: '/logo5_pata.png',
    author: 'Montse',
    country: 'Mexico',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione nemo aliquid dolores quo, quae architecto eveniet molestias itaque beatae repudiandae porro qui. Quasi corrupti expedita temporibus illo aliquid ipsam!'
  },
  {
    image: '/logo5_pata.png',
    author: 'Carolina',
    country: 'USA',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. '
  },
  {
    image: '/logo5_pata.png',
    author: 'Ana',
    country: 'Spain',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione nemo aliquid dolores quo, quae architecto eveniet molestias itaque beatae repudiandae porro qui. Quasi corrupti expedita temporibus illo aliquid ipsam!'
  },
  {
    image: '/logo5_pata.png',
    author: 'Lala',
    country: 'Canada',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione nemo aliquid dolores quo, quae architecto eveniet molestias itaque beatae repudiandae porro qui. Quasi corrupti expedita temporibus illo aliquid ipsam!'
  },
  {image: '/logo5_pata.png',
    author: 'Montse',
    country: 'Mexico',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione nemo aliquid dolores quo, quae architecto eveniet molestias itaque beatae repudiandae porro qui. Quasi corrupti expedita temporibus illo aliquid ipsam!'
  },
  {
    image: '/logo5_pata.png',
    author: 'Carolina',
    country: 'USA',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. '
  },
  
];

function Catalog() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(catalogData.length / item_per_page);
  const startIndex = (currentPage - 1) * item_per_page;
  const displayedItems = catalogData.slice(startIndex, startIndex + item_per_page);

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {displayedItems.map((item, index) => (
          <Card 
            key={index}
            image={item.image}
            author={item.author}
            country={item.country}
            description={item.description}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-10">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === 1 
              ? 'opacity-40 cursor-not-allowed' 
              : 'hover:bg-gray-100'
            }`}
          >
            ←
          </button>
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`
                  px-3 py-1 rounded-md border 
                  ${currentPage === idx + 1 
                    ? 'bg-lime-500 text-white border-lime-600' 
                    : 'hover:bg-gray-100'
                  }
                `}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === totalPages 
              ? 'opacity-40 cursor-not-allowed' 
              : 'hover:bg-gray-100'
            }`}
          >
             →
          </button>

        </div>
      )}

    </div>
  )
}

export default Catalog