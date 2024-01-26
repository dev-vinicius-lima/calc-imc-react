/* eslint-disable react/prop-types */
import Button from './Button';
import { useState } from 'react';
import './ImcCalc.css';

const ImcCalc = ({ calcImc }) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const clearForm = (e) => {
    e.preventDefault();
    setWeight('');
    setHeight('');
  };
  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, '');
  };
  const handleHeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setHeight(updatedValue);
  };
  const handleWeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setWeight(updatedValue);
  };
  return (
    <div id="calcContainer">
      <h2>Calculadora de IMC</h2>
      <form id="imcForm">
        <div className="formInputs">
          <div className="formControl">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo 1,75"
              onChange={(e) => handleHeightChange(e)}
              value={height}
            />
          </div>
          <div className="formControl">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo 70,5"
              onChange={(e) => handleWeightChange(e)}
              value={weight}
            />
          </div>
        </div>
        <div className="actionControl">
          <Button
            id="calcButton"
            text="Calcular"
            action={(e) => calcImc(e, height, weight)}
          />
          <Button id="clearButton" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
