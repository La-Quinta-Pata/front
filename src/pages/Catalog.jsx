import React, { useState } from 'react'
import Card from '../components/Card.Jsx';

const item_per_page = 12;

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