import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import "./App.scss";
import "./components/Form/Form.scss";

const App = () => {

  const [list, setList] = useState([]);

  const [show, setShow] = useState(false);

  const [selectedObject, setSelectedObject] = useState();

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
  }

  return (
    <div className="container">
      <Header/>
      <div className="container__content">
        <List list={list} onClick={handleClick}/>
        {show && <Form onAddProduct={handleAddProduct} onUpdateProduct={handleUpdateProduct} objectToEdit={selectedObject}/>}
      </div>
    </div>
  );
}

export default App;
