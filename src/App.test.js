import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import App from './App';
import Board from './components/Board';

configure({ adapter: new Adapter() });

it('has a board', () => {
  const board = shallow(<Board />);
  expect(board.state().board).toEqual(
    [['', '', ''],
     ['', '', ''],
     ['', '', '']]
  )
});

it('plays a move', () => {
  const board = mount(<Board />);

  expect(board.find('.square')).toHaveLength(9);
  expect(board.state().turns).toEqual(1);

  const squares = board.find('.square');

  squares.at(0).simulate('click');

  expect(board.state().turns).toEqual(2);
  expect(squares.at(0).text()).toEqual('X');

});

it('plays a move to the same square only once', () => {
  const board = mount(<Board />);

  expect(board.find('.square')).toHaveLength(9);
  expect(board.state().turns).toEqual(1);

  const squares = board.find('.square');

  squares.at(0).simulate('click');

  expect(board.state().turns).toEqual(2);
  expect(squares.at(0).text()).toEqual('X');

  squares.at(0).simulate('click');

  expect(board.state().turns).toEqual(2);
  expect(squares.at(0).text()).toEqual('X');
});

it('alternates between X and O', () => {
  const board = mount(<Board />);

  expect(board.find('.square')).toHaveLength(9);
  expect(board.state().turns).toEqual(1);

  const squares = board.find('.square');

  squares.at(0).simulate('click');

  expect(board.state().turns).toEqual(2);
  expect(squares.at(0).text()).toEqual('X');

  squares.at(1).simulate('click');

  expect(board.state().turns).toEqual(3);
  expect(squares.at(1).text()).toEqual('O');

  squares.at(2).simulate('click');

  expect(board.state().turns).toEqual(4);
  expect(squares.at(2).text()).toEqual('X');
});

it('finds a winner on a row', () => {
  const board = mount(<Board />);

  expect(board.state().turns).toEqual(1);

  const squares = board.find('.square');

  squares.at(0).simulate('click');

  expect(board.state().turns).toEqual(2);
  expect(squares.at(0).text()).toEqual('X');

  squares.at(3).simulate('click');

  expect(board.state().turns).toEqual(3);
  expect(squares.at(3).text()).toEqual('O');

  squares.at(1).simulate('click');

  expect(board.state().turns).toEqual(4);
  expect(squares.at(1).text()).toEqual('X');

  squares.at(4).simulate('click');

  expect(board.state().turns).toEqual(5);
  expect(squares.at(4).text()).toEqual('O');

  squares.at(2).simulate('click');

  expect(board.state().turns).toEqual(6);
  expect(squares.at(2).text()).toEqual('X');
  expect(board.state().winner).toEqual('X');
});

it('finds a winner on a column', () => {
  const board = mount(<Board />);

  expect(board.state().turns).toEqual(1);

  const squares = board.find('.square');

  squares.at(0).simulate('click');

  expect(board.state().turns).toEqual(2);
  expect(squares.at(0).text()).toEqual('X');

  squares.at(1).simulate('click');

  expect(board.state().turns).toEqual(3);
  expect(squares.at(1).text()).toEqual('O');

  squares.at(3).simulate('click');

  expect(board.state().turns).toEqual(4);
  expect(squares.at(3).text()).toEqual('X');

  squares.at(2).simulate('click');

  expect(board.state().turns).toEqual(5);
  expect(squares.at(2).text()).toEqual('O');

  squares.at(6).simulate('click');

  expect(board.state().turns).toEqual(6);
  expect(squares.at(6).text()).toEqual('X');
  expect(board.state().winner).toEqual('X');
});

it('finds a winner on the left diagonal', () => {
  const board = mount(<Board />);

  expect(board.state().turns).toEqual(1);

  const squares = board.find('.square');

  squares.at(0).simulate('click');

  expect(board.state().turns).toEqual(2);
  expect(squares.at(0).text()).toEqual('X');

  squares.at(1).simulate('click');

  expect(board.state().turns).toEqual(3);
  expect(squares.at(1).text()).toEqual('O');

  squares.at(4).simulate('click');

  expect(board.state().turns).toEqual(4);
  expect(squares.at(4).text()).toEqual('X');

  squares.at(2).simulate('click');

  expect(board.state().turns).toEqual(5);
  expect(squares.at(2).text()).toEqual('O');

  squares.at(8).simulate('click');

  expect(board.state().turns).toEqual(6);
  expect(squares.at(8).text()).toEqual('X');
  expect(board.state().winner).toEqual('X');
});

it('finds a winner on the right diagonal', () => {
  const board = mount(<Board />);

  expect(board.state().turns).toEqual(1);

  const squares = board.find('.square');

  squares.at(2).simulate('click');

  expect(board.state().turns).toEqual(2);
  expect(squares.at(2).text()).toEqual('X');

  squares.at(1).simulate('click');

  expect(board.state().turns).toEqual(3);
  expect(squares.at(1).text()).toEqual('O');

  squares.at(4).simulate('click');

  expect(board.state().turns).toEqual(4);
  expect(squares.at(4).text()).toEqual('X');

  squares.at(0).simulate('click');

  expect(board.state().turns).toEqual(5);
  expect(squares.at(0).text()).toEqual('O');

  squares.at(6).simulate('click');

  expect(board.state().turns).toEqual(6);
  expect(squares.at(6).text()).toEqual('X');
  expect(board.state().winner).toEqual('X');
});

it('finds a draw', () => {
  const board = mount(<Board />);

  expect(board.state().turns).toEqual(1);

  const squares = board.find('.square');
  const message = board.find('.message');

  squares.at(0).simulate('click');

  expect(board.state().turns).toEqual(2);
  expect(squares.at(0).text()).toEqual('X');

  squares.at(2).simulate('click');

  expect(board.state().turns).toEqual(3);
  expect(squares.at(2).text()).toEqual('O');

  squares.at(1).simulate('click');

  expect(board.state().turns).toEqual(4);
  expect(squares.at(1).text()).toEqual('X');

  squares.at(3).simulate('click');

  expect(board.state().turns).toEqual(5);
  expect(squares.at(3).text()).toEqual('O');

  squares.at(5).simulate('click');

  expect(board.state().turns).toEqual(6);
  expect(squares.at(5).text()).toEqual('X');

  squares.at(4).simulate('click');

  expect(board.state().turns).toEqual(7);
  expect(squares.at(4).text()).toEqual('O');

  squares.at(6).simulate('click');

  expect(board.state().turns).toEqual(8);
  expect(squares.at(6).text()).toEqual('X');

  squares.at(8).simulate('click');

  expect(board.state().turns).toEqual(9);
  expect(squares.at(8).text()).toEqual('O');

  squares.at(7).simulate('click');

  expect(board.state().turns).toEqual(10);
  expect(squares.at(7).text()).toEqual('X');

  expect(message.text()).toEqual('It\'s a tie!');

});

it('adds a new board', () => {
  const app = mount(<App />);
  const boards = app.find('.board');
  const button = app.find('button');

  expect(boards).toHaveLength(1);

  button.at(0).simulate('click');

  expect(app.find('.board')).toHaveLength(2);

});
