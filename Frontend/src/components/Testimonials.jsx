import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    message: "My years at the campus were unforgettable. The faculty and friends made it special.",
    name: "Rahul",
    year: 2018
  },
  {
    message: "A beautiful campus and a vibrant student community!",
    name: "Priya",
    year: 2020
  }
];

function Testimonials() {
  return (
    <div className="testimonials-container">
      <h2>Alumni Testimonials</h2>
      <div className="testimonials-list">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p className="testimonial-message">"{t.message}"</p>
            <p>
              <span className="testimonial-name">{t.name}</span>
              <span className="testimonial-year"> ({t.year})</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;