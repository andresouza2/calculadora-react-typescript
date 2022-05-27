import React, { useState } from 'react';
import Tecla from '../Teclas';
import * as C from './style';

export function Calculadora() {
  const [num, setNum] = useState<string | number>(0);
  const [oldNum, setOldNum] = useState<string | number>(0);
  const [operator, setOperator] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    console.log(value);

    if (num === 0) {
      setNum(value);
    } else {
      setNum(`${num}${value}`);
    }
  };

  const porcentagem = () => {
    const resultado = Number(num) / 100;
    setNum(resultado);
  };

  const torgleeSign = () => {
    if (Number(num) > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(Number(num)));
    }
  };

  const clear = () => {
    setNum(0);
  };

  const calculate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (operator === '+') {
      setNum(Number(num) + Number(oldNum));
    }
    if (operator === '-') {
      setNum(Number(oldNum) - Number(num));
    }
    if (operator === '*') {
      setNum(Number(oldNum) * Number(num));
    }
    if (operator === '/') {
      setNum(Number(oldNum) / Number(num));
    }
  };

  const operatorResult = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const value = e.currentTarget.value;
    if (value === '+') {
      setOperator('+');
      setOldNum(num);
      setNum(0);
    }
    if (value === '-') {
      setOperator('-');
      setOldNum(num);
      setNum(0);
    }
    if (value === '*') {
      setOperator('*');
      setOldNum(num);
      setNum(0);
    }
    if (value === '/') {
      setOperator('/');
      setOldNum(num);
      setNum(0);
    }
  };

  return (
    <C.Container>
      <h1>Calculadora</h1>
      <div className="interface">
        <div>{num}</div>
        <div className="teclas">
          <Tecla valor={'AC'} handleClick={clear} />
          <Tecla valor={'+/-'} handleClick={torgleeSign} />
          <Tecla valor={'%'} handleClick={porcentagem} />
          <Tecla valor={'/'} handleClick={operatorResult} />
          <Tecla valor={7} handleClick={handleClick} />
          <Tecla valor={8} handleClick={handleClick} />
          <Tecla valor={9} handleClick={handleClick} />
          <Tecla valor={'*'} handleClick={operatorResult} />
          <Tecla valor={4} handleClick={handleClick} />
          <Tecla valor={5} handleClick={handleClick} />
          <Tecla valor={6} handleClick={handleClick} />
          <Tecla valor={'-'} handleClick={operatorResult} />
          <Tecla valor={1} handleClick={handleClick} />
          <Tecla valor={2} handleClick={handleClick} />
          <Tecla valor={3} handleClick={handleClick} />
          <Tecla valor={'+'} handleClick={operatorResult} />
          <Tecla valor={0} handleClick={handleClick} />
          <Tecla valor={','} handleClick={handleClick} />
          <Tecla valor={'='} handleClick={calculate} />
        </div>
      </div>
    </C.Container>
  );
}
