import React from "react";

const Item = (props) => {

  const { name, color, category, price, onClick, onDelete } = props;

  return (
    <tr>
      <td data-cell="name">{name}</td>
      <td data-cell="color">{color}</td>
      <td data-cell="category">{category}</td>
      <td data-cell="price">{price}</td>
      <td data-cell="button">
        <tr className="buttonED">
          <button className="buttonEditDelete" onClick={onClick}>Edit</button>
        </tr>
        <tr className="buttonED">
          <button className="buttonEditDelete" onClick={onDelete}>Delete</button>
        </tr>
      </td>
    </tr>
  );
};

export default Item;
