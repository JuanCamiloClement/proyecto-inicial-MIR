import React from "react";

const Item = (props) => {
  const { name, color, category, price, onShowEditForm } = props;

  const handleClick = () => onShowEditForm();

  return (
          <div className="item-spans">
            <span>{name}</span>
            <span>{color}</span>
            <span>{category}</span>
            <span>{price}</span>
            <button className="button" onClick={handleClick}>Edit</button>
            <button className="button">Delete</button>
          </div>
  );
};

export default Item;
