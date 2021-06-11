import React from 'react';
import Fingering from '../../components/Fingering/Fingering';

class Game extends React.Component {
    render() {
        return (
            <div>
                <Fingering active={true}/>
            </div>
        )
    }
}

export default Game;