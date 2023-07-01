import React from 'react';
import Item from '../Item';

const List = ( props ) => {

    const { list } = props;

    const [{ name }] = list;

  return (
      <div>
        <header>
            <h1>My Site</h1>
        </header>
        <div>
            <article>
                <h2>Product List</h2>
                <button>Add</button>
                <div>
                    { list.map((object,index) => { 
                        return (<Item key={index} name={ object.name }/>)
                    })}
                </div>
            </article>
        </div>
      </div>
  )
}

export default List;
