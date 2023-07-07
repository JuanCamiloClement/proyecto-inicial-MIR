import React, { useState } from "react";
import "./Form.scss";

const Form = (props) => {

  const { onAddProduct, objectToEdit, onUpdateProduct, onHandleHide } = props;
  const [object, setObject] = useState({});
  const [editableObject, setEditableObject] = useState(objectToEdit);
  const [errorForm,setErrorForm] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newObject = { ...object, [name]: value };
    const newEditedObject = { ...editableObject, [name]: value };
    { editableObject ? setEditableObject(newEditedObject) : setObject(newObject) }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const configFetch = { method: 'POST', body: JSON.stringify(object), headers: { 'Content-Type': 'application/json'} }

    try {
      const response = await fetch('http://localhost:3000/products',configFetch);
      const product = await response.json();
      console.log(product);
      onAddProduct(product.data);
    } catch(error) {
      setErrorForm(`Ups! No se pudo aregar el producto. Error: ${error}`);
    }

    setObject({});
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    onUpdateProduct(editableObject);
  }

  if(errorForm) {
    return errorForm;
  }

  return (
    <div className="container__content--form">
      <section>

        <form action="" onSubmit={objectToEdit ? handleUpdate : handleSubmit} >
          <h2>{editableObject ? "Edit Product" : "Add Product"}</h2>
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
            <option value="Category"></option>
            <option value="Music">Music</option>
            <option value="Home">Home</option>
            <option value="Clothing">Clothing</option>
            <option value="Baby">Baby</option>
            <option value="Books">Books</option>
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
          {editableObject ? <div><button className="botonesPrincipales" type="submit">Update</button></div> : <button className="botonesPrincipales" type="submit">Add</button>}
          <button className="botonesPrincipales" onClick={onHandleHide}>Cancel</button>
        </form>

      </section>
    </div>
  );
};

export default Form;
