import React from 'react';
import Fingering from '../Fingering/Fingering';

function Note(props) {
    return (
        <div>
            <img src={props.note.images[0]} alt={props.note.name} />
            <Fingering />
        </div>
    )
}

export default Note;