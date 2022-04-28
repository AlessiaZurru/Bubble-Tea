import React from "react";

const Card = ({ cards }) => {
  return (
    <>
      {cards.map((teas) => {
        const { id, name, image, price } = teas;
        return (
          <div key={id} className="cards--container">
            <img src={image} className="cards--image"></img>
            <div className="cards--info">
              <h3>{name}</h3>
              <span>{price} €</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
