import React, { useState } from "react";
import "./Form.scss";

const Form = (props) => {

  const { onAddProduct } = props;

  const [object, setObject] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newObject = { ...object, [name]: value };
    setObject(newObject);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddProduct(object);
    setObject({});
  };

  return (
    <div className="container__content--form">
      <section>
       
        <form action="" onSubmit={handleSubmit} >
          <h2>Add Product</h2>
          <label htmlFor="name">PRODUCT NAME</label>
          <br />
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Your product name"
          />
          <br />
          <label htmlFor="color">COLOR</label>
          <br />
          <input
            type="text"
            name="color"
            onChange={handleChange}
            placeholder="Silver, black, white, etc"
          />
          <br />
          <label htmlFor="category">CATEGORY</label>
          <br />
          <select name="category" onChange={handleChange}>
            <option value="category"></option>
            <option value="music">Music</option>
            <option value="home">Home</option>
            <option value="clothing">Clothing</option>
            <option value="baby">Baby</option>
            <option value="books">Books</option>
          </select>
          <br />
          <label htmlFor="price">PRICE</label>
          <br />
          <input
            type="number"
            name="price"
            onChange={handleChange}
            placeholder="$0000,00"
          />
          <br />
          <button type="submit">Add</button>
        </form>

      </section>
    </div>
  );
};

export default Form;
