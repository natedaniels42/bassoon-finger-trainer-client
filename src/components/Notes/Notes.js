import React from 'react';
import Note from '../Note/Note';
import NoteModel from '../../models/Notes';

class Notes extends React.Component {
    state = {
        notes: [],
        current: ''
    };

    componentDidMount() {
        NoteModel.getAllNotes()
            .then((result) => {
                this.setState({notes: result});
            })
            .catch((err) => console.log(err))
    }

    handleClick = (event) => {
        this.setState({current: event.target.alt});
    }

    render() {
        return (
            <div>
                {this.state.notes.map((note) => {
                    return <Note note={note} key={note.name} list={true} visible={note.name === this.state.current ? true : false} handleClick={this.handleClick} />
                })}
            </div>
        )
    }
}

export default Notes;