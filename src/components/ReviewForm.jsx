// src/components/ReviewForm.js
import React, { useState } from 'react';
import Rating from './Rating';

const ReviewForm = ({ onSubmit }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText && rating) {
      onSubmit({ reviewText, rating });
      setReviewText('');
      setRating(0);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Leave a Review</h3>
      <Rating value={rating} onChange={setRating} />
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review here"
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
