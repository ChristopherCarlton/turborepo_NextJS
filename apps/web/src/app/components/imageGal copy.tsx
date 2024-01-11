'use client'
import React, { useState } from 'react';
import { images, sortImagesByCategory } from '../data/images'; // Update the path
import { gsap } from 'gsap'; // Import gsap
import EndlessScroll from './endlessScroll'; // Import the EndlessScroll component

const ImageGal: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('politics');
  const [filteredImages, setFilteredImages] = useState(sortImagesByCategory(selectedCategory).slice(0, 10)); // Initial images

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
    setFilteredImages(sortImagesByCategory(category).slice(0, 10)); // Reset to initial 10 images when category changes
  };

  const loadMore = (): void => {
    console.log('Loading more images...'); // Check if this log appears in the console



    // Simulate fetching more images (you can replace this with your API call or any other logic)
    const additionalImages = sortImagesByCategory(selectedCategory).slice(filteredImages.length, filteredImages.length + 50);
    console.log('Additional Images:', additionalImages); // Check if this log appears in the console
    setFilteredImages(prevImages => [...prevImages, ...additionalImages]);

    // GSAP animation for smoother scroll
    gsap.fromTo(window, { scrollTop: window.scrollY }, { scrollTop: window.scrollY + 200, duration: 0.5 });
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

      {/* Endless Scroll Component */}
      <EndlessScroll loadMore={loadMore} />
    </div>
  );
};

export default ImageGal;
