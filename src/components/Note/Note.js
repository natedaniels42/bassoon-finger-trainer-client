import React from 'react';

function Note(props) {
    return (
        <div>
            <img src={props.note.images[0]} alt={props.note.name} />
        </div>
    )
}

export default Note;