import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
        return (
            <div className="button-inner">
                <div className="button" id={this.props.id} onClick={this.props.handleButtonClick}></div>
            </div>
        )
    }
}

export default Button;