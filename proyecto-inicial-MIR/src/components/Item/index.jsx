import React from "react";

const Item = (props) => {
  const { name, color, category, price, onClick } = props;

  return (
          <div className="item-spans">
            <span>{name}</span>
            <span>{color}</span>
            <span>{category}</span>
            <span>{price}</span>
            <button className="button" onClick={onClick}>Edit</button>
            <button className="button">Delete</button>
          </div>
  );
};

export default Item;
