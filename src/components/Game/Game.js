import React, { Component } from 'react';
import NameForm from "../NameForm/NameForm";

class Game extends Component {

    constructor(props) {
        super(props);

        this.state = {
            started: false,
            startGame: false,
            userName: '',
            showTetris: false
        }
    }
    fetchName(name){

        this.setState({
            userName: name
        })
    }
    onShowTetris(){

        this.setState({
            showTetris: true,
            started: false,
        })
    }


    render() {
        let { started, showTetris, startGame } = this.state;
        return (
            <div className="first-screen">
                {!started && <div>
                    <h1 className="title">Tetris</h1>
                    <p className="title-text">
                        Thank you for choosing our tetris.
                    </p>
                    <div className="first-screen__img">
                        <img src="img/img_main.gif" alt="img_tetris"/>
                    </div>
                    <button onClick={this.startGame} className="btn">PLAY</button>
                </div>}
                {started && <div>
                    <NameForm
                        fechName={(name)=>this.fetchName(name)}
                        showTetris={()=>this.onShowTetris()}
                    />
                </div>}
                {startGame && <div>
                  game
                </div>}
            </div>
        );
    }

    startGame = () => {
        this.setState({
            started: true
        });
        console.log(this);
    }
}
export default Game;