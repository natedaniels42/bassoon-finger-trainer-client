import React from 'react';
import Note from '../Note/Note';

class Notes extends React.Component {
    state = {
        notes: [{
            "name": "bflat1",
            "images": ["notes/bflat1.png"]
        },
        {
            "name": "b1",
            "images": ["notes/b1.png"]
        },
        {
            "name": "c2",
            "images": ["notes/c2.png"]
        },
        {
            "name": "dflat2",
            "images": ["notes/csharp2.png"]
        },
        {
            "name": "d2",
            "images": ["notes/d2.png"]
        },
        {
            "name": "eflat2",
            "images": ["notes/eflat2.png"]
        },
        {
            "name": "e2",
            "images": ["notes/e2.png"]
        },
        {
            "name": "f2",
            "images": ["notes/f2.png"]
        },
        {
            "name": "gflat2",
            "images": ["notes/gflat2.png"]
        },
        {
            "name": "g2",
            "images": ["notes/g2.png"]
        }]
    };

    render() {
        return (
            <div>
                {this.state.notes.map((note) => {
                    return <Note note={note} key={note.name} />
                })}
            </div>
        )
    }
}

export default Notes;