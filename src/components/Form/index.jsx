import React, { useState } from 'react';
import './style.css';

function Form() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('');

  return (
    <form className="form-container" onSubmit={(event) => {
      event.preventDefault();
      console.log(name, lastName);
    }}>

      <input type="text" className="input-text" placeholder="Nome" value={name} onChange={(event) => {
        let tmpName = event.target.value

        if (tmpName.length >= 3) {
          tmpName = tmpName.substr(0, 3);
        }

        setName(tmpName)
      }} />

      <input type="text" className="input-text" placeholder="Sobrenome" value={lastName} onChange={(event) => {
        setLastName(event.target.value);
      }} />

      <input type="text" className="input-text" placeholder="CPF" />

      <div className="button-container">
        <label className="label-check">Pormoções</label>
        <input type="checkbox" />

        <label className="label-check">Novidades</label>
        <input type="checkbox" />

      </div>
      <button type="submit" className="submit-button">Cadastrar</button>
    </form>
  )
}

export default Form;

// Conceitos aplicados.

// Validação de formulário.
// useState