import React from 'react';
import './Fingering.css';
import Button from '../Button/Button';

class Fingering extends React.Component {
    state = {
        fingering: {},
        index: 0,
        length: 0,
    }

    componentDidMount() {
        let active = this.props.active ? this.props.active : false;
        let length = this.props.fingering ? this.props.fingering.keys.length : 0;
        this.setState({fingering: this.props.fingering, active: active, length: length});
        
        if (this.props.fingering) {
            this.props.fingering.keys[this.state.index].forEach(key => {
                document.getElementById(key).style.fill = this.props.color;
            })
            if (this.props.fingering.keys[this.state.index].includes('key1')) {
                document.getElementById('key27').style.fill = this.props.color;
            } 
        }
    }

    componentDidUpdate(prevProps) {
        if (!this.state.active) {
            this.eraseKeys();
            this.populateKeys();
        }
    }
    
    populateKeys = () => {
        if (this.props.fingering) {
            this.props.fingering.keys[this.state.index].forEach(key => {
                document.getElementById(key).style.fill = this.props.color;
            })
            if (this.props.fingering.keys[this.state.index].includes('key1')) {
                document.getElementById('key27').style.fill = this.props.color;
            } 
        }
    }

    eraseKeys = () => {
        for (let i = 0; i <= 27; i++) {
            document.getElementById(`key${i}`).style.fill = 'white';
        }
    }

    handleButtonClick = (event) => {
        this.setState({index: Number(event.target.id)});
        this.eraseKeys();
        this.populateKeys();
    }

    checkFingerings = () => {
        return this.state.fingering && !this.state.active;
    }

    render() {
        return (
            <div className="fingering-container">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="193.000000pt" height="261.000000pt" viewBox="0 0 193.000000 261.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,261.000000) scale(0.100000,-0.100000)"
                        fill="white" stroke="black">
                    <path className="key" id="key0" onClick={this.props.handleClick} d="M518 1580 c-47 -36 -33 -90 28 -110 44 -15 91 -6 121 22 50 47 16 99
                        -70 106 -42 3 -57 0 -79 -18z" />
                    <path className="key" id="key1" onClick={this.props.handleClick} d="M1070 2320 A 120,120 0 1,0 1310 2320 L 1070, 2320"/>
                    <path className="key" id="key27" onClick={this.props.handleClick} d="M1070 2320 A 120,120 0 0,1 1310 2320 L 1070, 2320"/>
                    <path className="key" id="key2" onClick={this.props.handleClick} d="M1150 2107 c-39 -13 -80 -67 -80 -104 0 -58 64 -123 121 -123 14 0
                        41 10 60 23 113 76 29 247 -101 204z" />
                    <path className="key" id="key3" onClick={this.props.handleClick} d="M1129 1785 c-27 -15 -59 -69 -59 -100 0 -32 33 -86 61 -100 94 -49
                        205 43 166 137 -29 70 -104 98 -168 63z" />
                    <path className="key" id="key4" onClick={this.props.handleClick} d="M1124 1291 c-29 -18 -54 -63 -54 -98 0 -29 31 -79 59 -96 92 -54 208
                        39 168 135 -31 73 -108 99 -173 59z" />
                    <path className="key" id="key5" onClick={this.props.handleClick} d="M1124 971 c-29 -18 -54 -63 -54 -98 0 -29 31 -79 59 -96 63 -37 138
                        -10 167 59 43 103 -75 194 -172 135z" />
                    <path className="key" id="key6" onClick={this.props.handleClick} d="M1080 608 c-40 -20 -45 -27 -45 -57 0 -43 31 -67 103 -81 84 -16 192
                        13 209 56 3 8 2 26 -1 40 -16 61 -177 86 -266 42z" />
                    <path className="key" id="key7" onClick={this.props.handleClick} d="M1368 448 c-23 -19 -58 -83 -58 -105 0 -23 21 -43 69 -68 46 -23 72
                        -13 99 39 33 63 27 86 -33 118 -58 32 -57 32 -77 16z" />
                    <path className="key" id="key8" onClick={this.props.handleClick} d="M563 1369 c-24 -11 -57 -37 -74 -57 -31 -35 -68 -105 -69 -129 0 -27
                        38 -11 61 24 35 54 59 63 175 63 114 0 138 10 132 54 -7 62 -138 88 -225 45z
                        " />
                    <path className="key" id="key9" onClick={this.props.handleClick} d="M549 1227 c-102 -67 -78 -205 41 -237 119 -32 222 94 160 195 -40 64
                        -137 85 -201 42z" />
                    <path className="key" id="key10" onClick={this.props.handleClick} d="M675 973 c-46 -24 -66 -45 -86 -88 -25 -53 -25 -85 0 -85 12 0 21 9
                        25 25 12 46 41 65 100 65 36 0 60 5 70 16 19 18 21 55 4 72 -17 17 -77 14
                        -113 -5z" />
                    <path className="key" id="key11" onClick={this.props.handleClick} d="M795 880 c-63 -14 -110 -59 -134 -129 -15 -46 -14 -51 9 -51 13 0 25
                        12 34 35 17 40 47 55 109 55 51 0 63 7 72 41 10 40 -31 62 -90 49z" />
                    <path className="key" id="key12" onClick={this.props.handleClick} d="M1496 304 c-41 -73 -37 -85 44 -134 77 -45 108 -48 126 -11 17 33 3
                        72 -47 137 -33 43 -47 54 -69 54 -23 0 -33 -8 -54 -46z" />
                    <path className="key" id="key13" onClick={this.props.handleClick} d="M1258 273 c-28 -32 -50 -85 -44 -107 3 -13 35 -38 90 -69 71 -40 89
                        -46 106 -37 25 13 72 104 64 124 -7 19 -156 106 -182 106 -10 0 -26 -8 -34
                        -17z" />
                    <path className="key" id="key14" onClick={this.props.handleClick} d="M575 1761 c-32 -14 -57 -47 -53 -73 4 -32 57 -56 143 -65 l70 -8 3
                        -67 c3 -65 4 -68 27 -68 25 0 25 2 26 88 2 106 1 111 -13 139 -24 48 -142 79
                        -203 54z" />
                    <path className="key" id="key15" onClick={this.props.handleClick} d="M603 1916 c-28 -13 -33 -20 -33 -50 0 -56 32 -71 154 -71 106 0 162
                        13 190 44 21 24 12 47 -28 68 -43 24 -238 29 -283 9z" />
                    <path className="key" id="key16" onClick={this.props.handleClick} d="M730 2192 c0 -63 -12 -83 -60 -97 -63 -18 -79 -73 -35 -115 31 -29
                        85 -32 114 -6 30 27 37 68 33 179 -4 95 -4 97 -28 97 -23 0 -24 -3 -24 -58z
                        " />
                    <path className="key" id="key17" onClick={this.props.handleClick} d="M647 2373 c-3 -16 -26 -55 -51 -88 -52 -69 -58 -104 -22 -140 35 -35
                        73 -42 98 -18 26 27 37 81 38 186 l0 87 -29 0 c-23 0 -30 -5 -34 -27z " />
                    <path className="key" id="key18" onClick={this.props.handleClick} d="M170 1949 c-38 -14 -63 -63 -57 -109 3 -21 23 -85 45 -142 22 -57 48
                        -131 58 -165 16 -58 19 -63 46 -63 l28 0 0 211 c0 131 -4 218 -11 231 -8 16
                        -68 51 -81 47 -2 0 -14 -5 -28 -10z" />
                    <path className="key" id="key19" onClick={this.props.handleClick} d="M143 2211 c-74 -54 -101 -112 -78 -167 17 -42 63 -65 142 -72 51 -4
                        64 -2 69 11 11 30 -63 257 -84 257 -5 0 -27 -13 -49 -29z" />
                    <path className="key" id="key20" onClick={this.props.handleClick} d="M230 2300 c0 -28 7 -64 15 -80 9 -17 26 -69 39 -117 18 -71 28 -91
                        48 -102 23 -13 29 -13 53 3 36 24 31 50 -40 189 -30 60 -55 120 -55 133 0 20
                        -5 24 -30 24 -29 0 -30 -1 -30 -50z " />
                    <path className="key" id="key21" onClick={this.props.handleClick} d="M360 2303 c0 -45 46 -216 74 -273 13 -28 58 -39 82 -19 25 21 15 65
                        -41 174 -30 59 -55 121 -55 136 0 26 -4 29 -30 29 -29 0 -30 -1 -30 -47z " />
                    <path className="key" id="key22" onClick={this.props.handleClick} d="M1400 1733 c-37 -26 -50 -45 -47 -73 l2 -25 123 -3 c133 -3 142 1
                        123 51 -23 60 -144 90 -201 50z" />
                    <path className="key" id="key23" onClick={this.props.handleClick} d="M1357 1613 c-11 -10 -7 -47 6 -63 58 -74 207 -64 238 17 18 49 10 53
                        -119 53 -65 0 -122 -3 -125 -7z" />
                    <path className="key" id="key24" onClick={this.props.handleClick} d="M1308 1368 c-22 -7 -28 -16 -28 -39 0 -32 6 -35 34 -14 41 31 111 6
                        77 -28 -15 -15 -14 -50 1 -65 15 -15 61 -15 76 0 19 19 14 62 -11 99 -37 55
                        -86 71 -149 47z" />
                    <path className="key" id="key25" onClick={this.props.handleClick} d="M1332 2205 c-65 -14 -128 -44 -126 -60 5 -35 100 -23 213 26 100 42
                        47 63 -87 34z" />
                    <path className="key" id="key26" onClick={this.props.handleClick} d="M1374 2545 c-90 -16 -140 -32 -159 -52 -40 -40 38 -44 153 -8 84 26
                        127 57 97 69 -9 3 -17 6 -18 5 -1 0 -34 -7 -73 -14z" />
                    <path d="M962 1923 l-2 -493 -227 -3 -228 -2 227 -3 228 -2 3 -462 2 -463 3
                        462 2 463 228 3 227 2 -227 3 -228 2 -3 493 -2 492 -3 -492z"/>
                    </g>
                </svg>
                {this.state.length > 0 && (
                    <div className="button-container">
                        {this.state.fingering.keys.map((key, i) => (
                            <Button key={i} id={i} handleButtonClick={this.handleButtonClick} />
                            ))
                        }
                    </div>
                )}
            </div>
        )
    }
}

export default Fingering;