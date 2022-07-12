import React from "react";

const Card = ({ brandName, displayName, heroImage, rating, reviews }) => {
  return (
    <article className="p-4 flex flex-col items-center shadow-md">
      <img src={heroImage} alt={`${brandName}_product`} />
      <h1 className="text-center pl-2 pr-2 font-bold text-coffeePot2">
        {displayName}
      </h1>
      <p className="mt-2 uppercase text-lavendar font-bold font-brandName">
        {brandName}
      </p>
      <p className="mt-2 text-coffeePot1">
        Rating: {parseFloat(rating).toFixed(1)}/5
      </p>
      <p className="mt-1 text-coffeePot1">{reviews} reviews</p>
    </article>
  );
};

export default Card;
