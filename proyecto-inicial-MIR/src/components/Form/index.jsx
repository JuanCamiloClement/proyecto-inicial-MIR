import React, { useState } from "react";
import "./Form.scss";

const Form = (props) => {

  const { onAddProduct, objectToEdit, onUpdateProduct } = props;

  const [object, setObject] = useState({});

  const [editableObject,setEditableObject] = useState(objectToEdit);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newObject = { ...object, [name]: value };
    const newEditedObject = { ...editableObject, [name]: value };
    {editableObject ? setEditableObject(newEditedObject) : setObject(newObject)}
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddProduct(object);
    setObject({});
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    onUpdateProduct(editableObject);
  }

  return (
    <div className="container__content--form">
      <section>
       
        <form action="" onSubmit={objectToEdit ? handleUpdate : handleSubmit} >
          <h2>{ editableObject ? "Edit Product":"Add Product" }</h2>
          <label htmlFor="name">PRODUCT NAME</label>
          <br />
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Your product name"
            value={editableObject?.name}
          />
          <br />
          <label htmlFor="color">COLOR</label>
          <br />
          <input
            type="text"
            name="color"
            onChange={handleChange}
            placeholder="Silver, black, white, etc"
            value={editableObject?.color}
          />
          <br />
          <label htmlFor="category">CATEGORY</label>
          <br />
          <select name="category" onChange={handleChange} value={editableObject?.category}>
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
            value={editableObject?.price}
          />
          <br />
          {editableObject ? <div><button type="submit">Update</button><button>Cancel</button></div> : <button type="submit">Add</button>}
        </form>

      </section>
    </div>
  );
};

export default Form;
