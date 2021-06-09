import React from 'react';

function Note(props) {
    return (
        <div>
            <img src='logo512.png' alt={props.name} />
        </div>
    )
}

export default Note;