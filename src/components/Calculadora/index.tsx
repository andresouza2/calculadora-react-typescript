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
      setNum(
        Number(parseFloat(num.toString().replace(',', '.'))) +
          Number(parseFloat(oldNum.toString().replace(',', '.')))
      );
    }
    if (operator === '-') {
      setNum(
        Number(parseFloat(num.toString().replace(',', '.'))) -
          Number(parseFloat(oldNum.toString().replace(',', '.')))
      );
    }
    if (operator === '*') {
      setNum(
        Number(parseFloat(num.toString().replace(',', '.'))) *
          Number(parseFloat(oldNum.toString().replace(',', '.')))
      );
    }
    if (operator === '/') {
      setNum(
        Number(parseFloat(num.toString().replace(',', '.'))) /
          Number(parseFloat(oldNum.toString().replace(',', '.')))
      );
    }
  };

  const operatorResult = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const value = e.currentTarget.value;
    if (value === '+') {
      setOperator('+');
      setOldNum(parseFloat(num.toString().replace(',', '.')));
      setNum(0);
    }
    if (value === '-') {
      setOperator('-');
      setOldNum(parseFloat(String(num)));
      setNum(0);
    }
    if (value === '*') {
      setOperator('*');
      setOldNum(parseFloat(String(num)));
      setNum(0);
    }
    if (value === '/') {
      setOperator('/');
      setOldNum(parseFloat(String(num)));
      setNum(0);
    }
  };

  return (
    <C.Container>
      <div className="interface">
        <div className="print">{num}</div>
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
          <Tecla valor={'.'} handleClick={handleClick} />
          <Tecla valor={0} handleClick={handleClick} />
          <Tecla valor={','} handleClick={handleClick} />
          <Tecla valor={'='} handleClick={calculate} />
        </div>
      </div>
    </C.Container>
  );
}
