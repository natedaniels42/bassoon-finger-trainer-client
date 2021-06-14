import React from 'react';
import Notes from '../../components/Notes/Notes';

class FingeringChart extends React.Component {
    state = {
        current: ''
    }

    
    handleClick = (event) => {
        this.setState({current: event.target.alt});
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <h1>This is the fingering chart</h1>
                <Notes current={this.state.current} />
            </div>
        )
    }
}

export default FingeringChart;