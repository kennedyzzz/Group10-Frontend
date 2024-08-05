// src/components/ProductReview.js
import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

const ProductReview = () => {
  const [reviews, setReviews] = useState([]);

  const handleAddReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="product-review">
      <ReviewForm onSubmit={handleAddReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default ProductReview;
