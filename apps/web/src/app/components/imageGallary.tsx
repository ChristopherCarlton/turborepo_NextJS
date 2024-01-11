'use client'
import React, { useState } from 'react';
import { images, sortImagesByCategory } from '../data/images'; // Update the path

const ImageGallery: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('politics'); // Default category
    
    // Define the sorting function
    const filteredImages = sortImagesByCategory(selectedCategory);
    
    // Handle category change
    const handleCategoryChange = (category: string): void => {
      setSelectedCategory(category);
    };
    
    return (
      <div>
        {/* Category Selection */}
        <div className="tabs">
          {/* Tab Menu */}
          <div className="flex mb-4">
            <button onClick={() => handleCategoryChange('trending')} className="flex-1 px-8 py-3 text-red-500 hover:bg-blue-600 hover:text-white text-5xl">Trending</button>
            <button onClick={() => handleCategoryChange('politics')} className="flex-1 px-8 py-3 text-purple-500 hover:bg-blue-600 hover:text-white text-5xl">#Politics</button>
            <button onClick={() => handleCategoryChange('entertainment')} className="flex-1 px-8 py-3 text-white hover:bg-blue-600 hover:text-white text-5xl">#Entertainment</button>
            <button onClick={() => handleCategoryChange('cryptocurrency')} className="flex-1 px-8 py-3 text-white hover:bg-blue-600 hover:text-white text-5xl">#Cryptocurrency</button>
          </div>
        </div>
        
        {/* Display Images in Grid */}
        <div className="grid grid-cols-3 gap-4">
          {filteredImages.map((image) => (
            <div key={image.id} className="spark-wrapped-card spark-stacked">
              <a href="#" className="w-inline-block">
              <img
                width={300} // Increase or adjust as needed
                src={image.src} // Update with the actual path to the image
                alt={image.category}
                loading="eager"
                className="rounded-lg w-full h-auto"
              />
              </a>
              <div className="spark-card-details">
                <p className="spark-bold-heading spark-card-title">
                  {image.category} Title {/* Update with actual title or metadata */}
                </p>
                <p className="spark-small-sub-paragraph">
                  Product information, Lorem Ipsum. Fuga atque qui. Ullam facere quibusdam. Dolorem ut id. Eum ullam laborum et. Aliquam voluptate ut.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageGallery;
