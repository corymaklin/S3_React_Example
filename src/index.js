import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            flag: !this.state.flag
        });
    }

    render() {
        return (
            <div>
                 <h1>{this.state.flag ? "Hello From React App" : "Hello From S3"}</h1>
                 <button onClick={ this.handleClick }>Toggle</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));