import React, { useState } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  fetch("http://localhost:5000/allReview")
    .then((res) => res.json())
    .then((data) => setReviews(data));
  return (
    <div className="container my-5">
      <h1 className="my-5 text-center">
        <strong>CUSTOMER</strong> REVIEWS
      </h1>
      <div className="row">
        {reviews.map((review) => (
          <div key={review._id} className="col-md-4 my-3 text-center">
            <div className="shadow p-3 h-100">
              <h3>{review.name}</h3>
              <p>{review.describtion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
