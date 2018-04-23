import React, { Component } from 'react';

class Colorbox extends Component {
    constructor(props) {
        super(props);

        this.state = {color: "red"}

        this.changeColor = this.changeColor.bind(this);
    }

    changeColor()
    {
        if (this.state.color === "red")
        {
            this.setState({color: "blue"});
        }
        else
        {
            this.setState({color: "red"});
        }
    }

    render () {
        return (
            <div 
                className={"colorbox " + this.state.color}
                onClick={this.changeColor}
                >
            </div>
        );
    }
}

export default Colorbox;