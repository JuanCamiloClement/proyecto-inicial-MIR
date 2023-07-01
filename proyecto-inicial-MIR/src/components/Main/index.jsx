import React from 'react';
import { useState } from 'react';
import './Main.scss'

const Main = () => {
  
    let products = [{
        id: 0,
        name: '',
        color: '',
        category: '',
        price: 0
    }]

    const [ object,setObject ] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        const newObject = {...object,[name]:value};
        setObject(newObject);
    }

    const [ list,setList ] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setList([...list,object]);
        products = list;
    }

  return (
      <div>
        <header>
            <h1>My Site</h1>
        </header>
        <div>
            <article>
                <h2>Product List</h2>
                <button>Add</button>
                <ul>
                    <li>
                        <span>{ products[0].name }</span>
                    </li>
                </ul>
            </article>
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
      </div>
  )
}

export default Main;
