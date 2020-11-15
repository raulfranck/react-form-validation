import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  function onSubmitForm(data) {
    console.log(data)
  }


  return (
    <div className="App">
      <Form onSubmit={onSubmitForm} />

    </div>
  );
}



export default App;