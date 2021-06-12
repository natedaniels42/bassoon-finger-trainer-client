import React from 'react';
import Fingering from '../Fingering/Fingering';
import FingeringModel from '../../models/Fingerings';


class Note extends React.Component {
    state = {
        fingering: {},
        visible: false
    }
    
    componentDidMount() {
        const visible = this.props.visible ? this.props.visible : false; 
        /*FingeringModel.getByName(this.props.note.name)
            .then((result) => {
                this.setState({fingering: result, visible: visible})
            })*/
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
                    {this.state.visible && (
                        <Fingering fingering={this.state.fingering} />
                    )}
                </div>
            </div>
        )
    }
}

export default Note;