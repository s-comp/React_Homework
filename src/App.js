import React, { Component } from 'react';
import './App.scss';

const name = "Andrey";

class Question extends Component {
    render() {
        return (
            <div className="box">
              <div className="box__line">
                  <h1>Hello {name}</h1>
                  <p>Do you wont stady ReactJS?</p>
              </div>
              <div className="box__line">
                <button className="btn">Yes</button>
                <button className="btn">No</button>
              </div>
            </div>
        )
    }
}

export default Question;
