import React from 'react';
import ReactDOM from 'react-dom';
import Table from './';
import TableBody from './atoms/TableBody';
import Row from './atoms/Row';
import Cell from './atoms/Cell';

describe(Table, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table><TableBody><Row><Cell>Example</Cell></Row></TableBody></Table>, div);
  });
});
