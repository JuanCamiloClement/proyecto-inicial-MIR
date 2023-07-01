import React from 'react';
import Main from './components/Main';
import List from './components/List';
import { useState } from 'react';
import './App.scss'

function App() {

  const products = [{
    id: 0,
    name: '',
    color: '',
    category: '',
    price: 0
}]

  const [list,setList] = useState(products)

  const handleAddProduct = (object) => {
    setList([...products,object])
  }

  return (
      <div>
        <List
          list = { list }
        />
        <Main
          onAddProduct = { handleAddProduct }
          />
      </div>
  )
}

export default App;
