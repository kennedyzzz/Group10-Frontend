// src/components/ReviewList.js
import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      <h3>Reviews</h3>
      {reviews.length === 0 && <p>No reviews yet.</p>}
      {reviews.map((review, index) => (
        <div key={index} className="review-item">
          <div className="review-rating">Rating: {'★'.repeat(review.rating)}</div>
          <p>{review.reviewText}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
