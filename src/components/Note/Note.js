import React from 'react';
import Fingering from '../Fingering/Fingering';
import FingeringModel from '../../models/Fingerings';


class Note extends React.Component {
    state = {
        fingering: {},
    }
    
    componentDidMount() {
        FingeringModel.getByName(this.props.note.name)
            .then((result) => {
                this.setState({fingering: result})
            })
    }
    
    render() {
        return (
            <div>
                <div>
                    {this.props.note && (
                        <img src={this.props.note.images[0]} alt={this.props.note.name} />
                    )}
                </div>
                <div>
                    {this.props.visible && (
                        <Fingering fingering={this.state.fingering} key={this.state.fingering.name} />
                    )}
                </div>
            </div>
        )
    }
}

export default Note;