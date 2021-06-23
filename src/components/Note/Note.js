import React from 'react';
import Fingering from '../Fingering/Fingering';
import FingeringModel from '../../models/Fingerings';
import './Note.css';

class Note extends React.Component {
    state = {
        fingering: {},
    }
    
    componentDidMount() {
        if (this.props.note) {
            FingeringModel.getByName(this.props.note.name)
                .then((result) => {
                    this.setState({fingering: result})
                })
        }
    }
    
    render() {
        return (
            <div className="note-container">
                <div onClick={this.props.handleClick ? this.props.handleClick : null} >
                    {this.props.note && (
                        <img src={this.props.note.images[0]} alt={this.props.note.name} />
                    )}
                </div>
                <div>
                    {this.props.visible && (
                        <Fingering fingering={this.state.fingering} key={this.state.fingering.name} color='purple' />
                    )}
                </div>
            </div>
        )
    }
}

export default Note;