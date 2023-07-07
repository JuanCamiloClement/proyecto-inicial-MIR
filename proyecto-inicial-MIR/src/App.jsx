import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import "./App.scss";
import "./components/Form/Form.scss";

const App = () => {

  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedObject, setSelectedObject] = useState();
  const [error,setError] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/products');
        const products = await response.json();
        setList(products.data);
      } catch(error) {
        setError(`Ups! No se pudieron cargar los productos. Error: ${error}`);
      }
    })();
  },[]);

  const handleAddProduct = (object) => {
    setList([object, ...list]);
    setShow(false);
  };

  const handleClick = (objectToEdit) => {
    setSelectedObject(objectToEdit);
    setShow(true);
  }

  const handleUpdateProduct = (editedProduct) => {
    setSelectedObject(editedProduct);
    const filteredList = list.filter((element) => element !== selectedObject);
    setList([...filteredList,editedProduct]);
    setShow(false);
    setSelectedObject(false);
  }

  const handleHide = () => setShow(false);

  const handleDelete = (objectToDelete) => {
    const filteredList = list.filter((element) => element !== objectToDelete);
    setList(filteredList);
  }

  return (
    <div className="container">
      <Header/>
      <div className="container__content">
        <List 
          list={list} 
          onClick={handleClick} 
          onDelete={handleDelete}
          error={error}
          //onClickAddButton={handleClickAddButton}
        />
        {show && <Form 
                  onAddProduct={handleAddProduct} 
                  onUpdateProduct={handleUpdateProduct} 
                  objectToEdit={selectedObject}
                  onHandleHide={handleHide}
        />}
      </div>
    </div>
  );
}

export default App;
