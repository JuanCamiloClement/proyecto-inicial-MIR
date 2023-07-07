import React from "react";
import Item from "../Item";

const List = (props) => {
  const { list, onClick, onDelete } = props;

  return (
    <article className="container__content--list">
      <div className="cabeza">
        <h2>Product List</h2>
        <button className="botonesPrincipales" id="buttonAdd" onClick={() => onClick()}>Add</button>
      </div>

      <table className="tabla">
        <thead className="categorias">
          <tr>
            <th>PRODUCT NAME</th>
            <th>COLOR</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((object, index) => (
            <Item key={index}
              id={index + 1}
              name={object.name}
              color={object.color}
              category={object.category}
              price={object.price}
              onClick={() => onClick(object)}
              onDelete={() => onDelete(object)}
            />
          ))}
        </tbody>
      </table>
    </article>
  );
};

export default List;