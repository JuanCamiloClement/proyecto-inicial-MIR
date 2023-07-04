import React, { useState } from "react";
import Main from "./components/Main";
import List from "./components/List";
import Header from "./components/Header";
import "./App.scss";
import "./components/Main/Main.scss";

function App() {
  const [list, setList] = useState([]);

  const [showEditForm,setShowEditForm] = useState(false);

  const handleAddProduct = (object) => {
    setList([object, ...list]);
  };

  const handleShowEditForm = () => {
    setShowEditForm(!showEditForm);
  }

  return (
    <div className="container">
      <Header/>
      <div className="container__content">
        <List list={list} onShowEditForm={handleShowEditForm}/>
        <Main onAddProduct={handleAddProduct} showEditForm={showEditForm}/>
      </div>
    </div>
  );
}

export default App;
