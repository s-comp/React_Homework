import React, {Component} from 'react';

import './AppTheme.scss';
import Game from "../Game/Game";

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: ''
        }

    }


    onFormSubmit(e){
        e.preventDefault()
        this.props.fechName(this.state.name);
        this.props.showTetris();
    }

    render () {
        return (
            <div>
                <form onSubmit={(e)=>this.onFormSubmit(e)}>
                    <input onChange={(e)=>this.setState({name: e.target.value})}/>
                    <button type={'submit'}>GO</button>
                </form>
            </div>
        )
    }
}

export default NameForm;