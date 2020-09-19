import React from 'react';
import '../assets/styles/Board.scss';

const Board = ({ children }) => (
  <div className='board'>
    {children}
  </div>
);

export default Board;
