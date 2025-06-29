import React, { useState } from 'react';
import './ImageSlider.css';

const images = [
  require('../images/Saraswati Block-1.jpg'),
  require('../images/hostel1.jpg'),
  require('../images/IMG-20240823-WA0016.jpg'),
  require('../images/entrance.jpg'),
  require('../images/IMG-20240823-WA0017.jpg'),
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