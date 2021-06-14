import React from 'react';
import Note from '../Note/Note';
import NoteModel from '../../models/Notes';

class Notes extends React.Component {
    state = {
        notes: []
    };

    componentDidMount() {
        NoteModel.getAllNotes()
            .then((result) => {
                this.setState({notes: result});
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.notes.map((note) => {
                    return <Note note={note} key={note.name} list={true} visible={note.name === this.props.current ? true : false} />
                })}
            </div>
        )
    }
}

export default Notes;