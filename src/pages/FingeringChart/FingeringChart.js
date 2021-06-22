import React from 'react';
import Notes from '../../components/Notes/Notes';
import '../../App.css';
class FingeringChart extends React.Component {

    render() {
        return (
            <div className="fingering-chart">
                <h1>This is the fingering chart</h1>
                <p>Click a note to see the fingering. If there are multiple fingerings click the buttons below to look at the different options</p>
                <Notes />
            </div>
        )
    }
}

export default FingeringChart;