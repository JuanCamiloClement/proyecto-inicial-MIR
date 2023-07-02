import React from "react";
import Item from "../Item";

const List = (props) => {
  const { list } = props;

  return (
    <article className="container__content--list">
      <div className="cabeza">
        <h2>Product List</h2>
        <button>Add</button>
      </div>
      <div className="categorias">
        <span>PRODUCT NAME</span>
        <span>COLOR</span>
        <span>CATEGORY</span>
        <span>PRICE</span>
      </div>
      <div>
        {list.map((object, index) => (
          <Item key={index} name={object.name} />
        ))}
      </div>
    </article>
  );
};

export default List;
