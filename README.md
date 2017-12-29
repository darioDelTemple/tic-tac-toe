# Tic Tac Toe

By [Jane Philipps](mailto:jane.philipps@gmail.com)

[janephilipps.github.io](http://janephilipps.github.io)

## Instructions

1. Navigate to [repo](https://github.com/janephilipps/tic-tac-toe)
2. Clone locally using `git clone git@github.com:janephilipps/tic-tac-toe.git`
3. Install dependencies using `npm install`
4. Run tests using `npm test`
5. Start your server using `npm start`
6. Navigate to app in [browser](http://localhost:3000)
7. Enjoy!


## Discussion

The technologies I used to build this app are: HTML, CSS, React, Jest, and Enzyme. I used [create-react-app](https://github.com/facebookincubator/create-react-app) to generate the scaffolding for this app.

## Requirements

#### Build a two player tic tac toe app where a game can be played by alternating clicks until the game is won by X, O or is a tie.

I added a `message` that displays which player's turn it is based on the number of turns taken. The `message` also displays whether a player has won or if there is a tie.

#### Include a reset button so that when a game ends, the board can be cleared and a new game can begin.

The reset button calls a method `_resetBoard()` which calls another method `_getInitialState()` to reset the board.

## Bonuses!

#### Make the board fully responsive

I used the `vmin` unit of measure to make the `width`, `height`, and `border` of the squares fully responsive.

#### Allow for more than 1 game to be played simultaneously

I have a state within the `App` that keeps track of the number of boards. Because each board also has its own state, gameplay across multiple boards can happen simultaneously without interference.