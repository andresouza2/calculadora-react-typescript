import React from 'react';

import * as C from './style';

interface Props {
  valor: string | number;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Tecla: React.FC<Props> = ({ valor, handleClick }) => {
  return (
    <C.Container>
      <button type="button" value={valor} onClick={handleClick}>
        {valor}
      </button>
    </C.Container>
  );
};

export default Tecla;
