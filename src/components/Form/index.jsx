import React, { useState } from 'react';
import './style.css';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(true);

  return (
    <form className="form-container" onSubmit={(event) => {
      event.preventDefault();
      console.log(cpf)
      if (cpf.length === 11) {
        onSubmit({ name, lastName, cpf, promotions, news })
      } else {
        window.alert('CPF inválido')
      }
    }}>

      <input
        type="text"
        className="input-text"
        placeholder="Nome"
        required
        value={name}
        onChange={(event) => {
          setName(event.target.value)
        }}
      />

      <input
        type="text"
        className="input-text"
        placeholder="Sobrenome"
        required value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />

      <input
        type="text"
        className="input-text"
        placeholder="CPF"
        required
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}

      />

      <div className="button-container">
        <label className="label-check">Pormoções</label>
        <input type="checkbox" defaultChecked={promotions} checked={promotions} onChange={(event) => {
          setPromotions(event.target.checked)
        }} />

        <label className="label-check">Novidades</label>
        <input type="checkbox" defaultChecked={news} checked={news} onChange={(event) => {
          setNews(event.target.checked)
        }} />
      </div>

      <button type="submit" className="submit-button">Cadastrar</button>

    </form>
  )
}

export default Form;

// Conceitos aplicados.

// Validação de formulário.
// useState
// Passando propriedades entre componentes
// Propriedade checked para Switchs