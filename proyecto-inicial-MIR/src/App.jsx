import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import "./App.scss";
import "./components/Form/Form.scss";

function App() {

  const [list, setList] = useState([]);

  const [show, setShow] = useState(false);

  const handleAddProduct = (object) => {
    setList([object, ...list]);
  };

  const handleClick = () => {
    setShow(true);
  }

  return (
    <div className="container">
      <Header/>
      <div className="container__content">
        <List list={list} onClick={handleClick}/>
        {show && <Form onAddProduct={handleAddProduct} />}
      </div>
    </div>
  );
}

export default App;
