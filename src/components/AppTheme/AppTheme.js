import React, {Component} from 'react';

import './AppTheme.scss';
import Game from "../Game/Game";

class AppTheme extends Component {
    render () {
        return (
            <div className="app">
                <div className="app__wrap">
                    <Game/>
                </div>
            </div>
        )
    }
}

export default AppTheme;