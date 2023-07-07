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
        <button className="buttonED buttonEditDelete" onClick={onClick}>Edit</button>
        <button className="buttonED buttonEditDelete" onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default Item;
