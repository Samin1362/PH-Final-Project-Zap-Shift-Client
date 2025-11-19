import React from "react";

const ReviewCard = ({ review }) => {
  const { userName, user_photoURL, ratings, review: reviewText, date } = review;

  console.log(review);

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={user_photoURL}
          alt={userName}
          className="rounded-full w-24 h-24 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{userName}</h2>
        <div className="flex items-center gap-2">
          <span className="text-yellow-500">⭐</span>
          <span className="font-bold">{ratings}</span>
        </div>
        <p>{reviewText}</p>
        <p className="text-sm text-gray-500">
          {new Date(date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
