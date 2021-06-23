import React from 'react';

class Next extends React.Component {
    render() {
        return (
            <div>
                <h2>Question: <span>{this.props.index + 1}</span></h2>
                <h2>Score: <span>{this.props.score}</span></h2>
                <h3>{this.props.message}</h3>
            </div>
        )
    }
}
export default Next;