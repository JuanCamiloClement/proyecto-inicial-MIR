import React from 'react';
import { useState } from 'react';
import './Main.scss'

const Main = ( props ) => {

    const { onAddProduct } = props;

    const [ object,setObject ] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        const newObject = {...object,[name]:value};
        setObject(newObject);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddProduct(object);
    }

  return (
      <div>
            <section>
                <h2>Add Product</h2>
                <form action="" onSubmit = { handleSubmit }>
                    <label htmlFor="name">PRODUCT NAME</label><br />
                    <input type="text" name="name" onChange = { handleChange }/><br />
                    <label htmlFor="color">COLOR</label><br />
                    <input type="text" name="color" onChange = { handleChange }/><br />
                    <label htmlFor="category">CATEGORY</label><br />
                    <select name="category" onChange = { handleChange }>
                        <option value=""></option>
                        <option value="music">Music</option>
                        <option value="home">Home</option>
                        <option value="clothing">Clothing</option>
                        <option value="baby">Baby</option>
                        <option value="books">Books</option>
                    </select><br />
                    <label htmlFor="price">PRICE</label><br />
                    <input type="number" name="price" onChange = { handleChange }/><br />
                    <button type='submit'>Add</button>
                </form>
            </section>
        </div>
  )
}

export default Main;
