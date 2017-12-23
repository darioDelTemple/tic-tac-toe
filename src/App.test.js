import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import App from './App';
import Board from './components/Board';

configure({ adapter: new Adapter() });

beforeAll(() => {
  // ReactDOM.render(<App />);
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

// test('adds 1 + 2 to equal 3', () => {
//   expect(1 + 2).toBe(3);
// });

it('has a board', () => {
  const board = shallow(<Board />);
  expect(board.state().board).toEqual(
    [['', '', ''],
     ['', '', ''],
     ['', '', '']]
  )
});

// it('plays a move', () => {
// });

// it('plays a move to the same square only once', () => {
// });

// it('alternates between X and O', () => {
// });

// it('finds a winner on a row', () => {
// });

// it('finds a winner on a column', () => {
// });

// it('finds a winner on the left diagonal', () => {
// });

// it('finds a winner on the right diagonal', () => {
// });

// it('finds a draw', () => {
// });

// it('adds a new board', () => {
// });
