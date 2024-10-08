
import React from 'react';
import ERDiagram from './ERDiagram';
import Form from './Form';

function App() {
  return (
    <div >
      <div className='flex p-1  justify-between items-center'>
        <h1>Entity Relationship Diagram</h1>
        <Form />
      </div>
      <ERDiagram />
    </div>
    //   <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  );
}

export default App;
