import React from 'react';
import Main from './components/Main';
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
        <Main
          onAddProduct = { handleAddProduct }
          list = { list }
          />
      </div>
  )
}

export default App;
