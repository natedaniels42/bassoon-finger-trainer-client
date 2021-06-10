import React from 'react';
import Fingering from '../Fingering/Fingering';
import FingeringModel from '../../models/Fingerings';


class Note extends React.Component {
    state = {
        fingering: []
    }
    
    handleClick = (event) => {
        FingeringModel.getByName(event.target.alt)
            .then((result) => {
                this.setState({fingering: result})
            })
    }
    
    render() {
        return (
            <div onClick={this.handleClick}>
                <img src={this.props.note.images[0]} alt={this.props.note.name} />
                
                <Fingering />
            </div>
        )
    }
}

export default Note;