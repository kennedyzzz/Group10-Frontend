import React, { useState } from 'react';

const Rating = ({ value, onChange }) => {
  const handleClick = (rating) => {
    onChange(rating);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          style={{
            cursor: 'pointer',
            color: star <= value ? 'gold' : 'grey',
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
