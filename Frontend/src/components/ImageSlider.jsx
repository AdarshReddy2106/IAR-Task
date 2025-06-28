import React, { useState } from 'react';
import './ImageSlider.css';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
];

function ImageSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="image-slider-container">
      <button className="image-slider-arrow left" onClick={prevSlide}>&#8592;</button>
      <img
        src={images[index]}
        alt="Campus"
        className="image-slider-img"
      />
      <button className="image-slider-arrow right" onClick={nextSlide}>&#8594;</button>
      <div className="image-slider-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`image-slider-dot${i === index ? ' active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;