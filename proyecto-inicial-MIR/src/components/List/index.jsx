import React from "react";
import Item from "../Item";

const List = (props) => {
  const { list, onClick } = props;

  return (
    <article className="container__content--list">
      <div className="cabeza">
        <h2>Product List</h2>
        <button className="buttonAdd" onClick={ () => onClick() }>Add</button>
      </div>
      <div className="categorias">
        <span>PRODUCT NAME</span>
        <span>COLOR</span>
        <span>CATEGORY</span>
        <span>PRICE</span>
      </div>
      <div>
        {list.map((object, index) => (
          <Item key={index}
                id={index + 1}
                name={object.name}
                color={object.color}
                category={object.category}
                price={object.price}
                onClick={()=>onClick(object)}
            />
        ))}
      </div>
    </article>
  );
};

export default List;