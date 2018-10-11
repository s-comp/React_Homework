import React, { Component } from 'react';

class Game extends Component {
    render() {
        return (
            <div className="first-screen">
                <h1 className="title">Tetris</h1>
                <p className="title-text">
                    Thank you for choosing our tetris.
                </p>
                <div className="first-screen__img">
                    <img src="img/img_main.gif" alt="img_tetris"/>
                </div>
                <button className="btn">PLAY</button>
            </div>
        );
    }
}

export default Game;