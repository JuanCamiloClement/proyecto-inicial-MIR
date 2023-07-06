import React from "react";

const Item = (props) => {

  const { name, color, category, price, onClick, onDelete } = props;

  return (
          <tr>
            <td>{name}</td>
            <td>{color}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td><button className="button" onClick={onClick}>Edit</button></td>
            <td><button className="button" onClick={onDelete}>Delete</button></td>
          </tr>
  );
};

export default Item;
