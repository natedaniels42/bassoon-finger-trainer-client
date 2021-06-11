import React from 'react';
import { Link } from   'react-router-dom';

class Levels extends React.Component {
    render() {
        return (
            <div>
                <Link to={{pathname: "/game", state: {
                    low: 7, high: 19
                    } 
                }}>
                    <button>Beginner</button>
                </Link>
                <Link to={{pathname: "/game", state: {
                    low: 0, high: 31
                    } 
                }}>
                    <button>Intermediate</button>
                </Link>
                <Link to={{pathname: "/game", state: {
                    low: 0, high: 42
                    } 
                }}>
                    <button>Advanced</button>
                </Link>
            </div>
        )
    }
}

export default Levels;