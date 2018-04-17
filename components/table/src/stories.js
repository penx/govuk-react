import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from '.';
import TableHeader from './atoms/TableHeader';
import TableBody from './atoms/TableBody';
import CellHeader from './atoms/CellHeader';
import Cell from './atoms/Cell';
import Row from './atoms/Row';

const example1Body = (
  <React.Fragment>
    <Row>
      <CellHeader>First 6 weeks</CellHeader>
      <Cell>£109.80 per week</Cell>
    </Row>
    <Row>
      <Cell>Next 33 weeks</Cell>
      <Cell>£109.80 per week</Cell>
    </Row>
    <Row>
      <Cell>Total estimated pay</Cell>
      <Cell>£4,282.20</Cell>
    </Row>
    <Row>
      <Cell>Tell the mother&rsquo;s employer</Cell>
      <Cell>28 days before they want to start maternity pay</Cell>
    </Row>
  </React.Fragment>
);

const example2Head = (
  <Row>
    <CellHeader>Month you apply</CellHeader>
    <CellHeader alignRight>Rate for vehicles</CellHeader>
    <CellHeader alignRight>Rate for bicycles</CellHeader>
  </Row>
);

const example2Body = (
  <React.Fragment>
    <Row>
      <CellHeader>January</CellHeader>
      <Cell alignRight>£165.00</Cell>
      <Cell alignRight>£85.00</Cell>
    </Row>
    <Row>
      <CellHeader>February</CellHeader>
      <Cell alignRight>£165.00</Cell>
      <Cell alignRight>£85.00</Cell>
    </Row>
    <Row>
      <CellHeader>March</CellHeader>
      <Cell alignRight>£151.00</Cell>
      <Cell alignRight>£77.00</Cell>
    </Row>
    <Row>
      <CellHeader>April</CellHeader>
      <Cell alignRight>£136.00</Cell>
      <Cell alignRight>£70.00</Cell>
    </Row>
  </React.Fragment>
);

storiesOf('Table', module).add('default', () => (
  <Table caption="Dates and amounts" body={example1Body} />
));

storiesOf('Table', module).add('Numeric tabular data', () => (
  <Table caption="Attention, I am the caption of this ship!" head={example2Head} body={example2Body} />
));

// storiesOf('Table', module).add('Numeric tabular data bold left column', () => (
//   <Table caption="Attention, I am the caption of this ship!">
//     <TableHeader>
//       <Row>
//         <CellHeader bold>Month you apply</CellHeader>
//         <CellHeader alignRight>Rate for vehicles</CellHeader>
//         <CellHeader alignRight>Rate for bicycles</CellHeader>
//       </Row>
//     </TableHeader>
//     <tbody>
//       <Row>
//         <CellHeader bold>January</CellHeader>
//         <Cell alignRight>£165.00</Cell>
//         <Cell alignRight>£85.00</Cell>
//       </Row>
//       <Row>
//         <CellHeader bold>February</CellHeader>
//         <Cell alignRight>£165.00</Cell>
//         <Cell alignRight>£85.00</Cell>
//       </Row>
//       <Row>
//         <CellHeader bold>March</CellHeader>
//         <Cell alignRight>£151.00</Cell>
//         <Cell alignRight>£77.00</Cell>
//       </Row>
//       <Row>
//         <CellHeader bold>April</CellHeader>
//         <Cell alignRight>£136.00</Cell>
//         <Cell alignRight>£70.00</Cell>
//       </Row>
//     </tbody>
//   </Table>
// ));
