import React from 'react';
import './Dice.css'

function digitToName(digitString) {
    if (digitString === '6')
        return 'six';
    else if (digitString === '5')
        return 'five';
    else if (digitString === '4')
        return 'four';
    else if (digitString === '3')
        return 'three';
    else if (digitString === '2')
        return 'two';
    else
        return 'one';
}

export default function Dice({ initalValue }) {
    const roll = e => {
        const newValue = Math.floor(Math.random() * 6 + 1);
        setValue(newValue);
        switch (newValue) {
            case 1:
                e.target.className = 'one';
                break;
            case 2:
                e.target.className = 'two';
                break;
            case 3:
                e.target.className = 'three';
                break;
            case 4:
                e.target.className = 'four';
                break;
            case 5:
                e.target.className = 'five';
                break;
            case 6:
                e.target.className = 'six';
                break;
            default:
                break;
        }
    };
    const [value, setValue] = React.useState(initalValue || 1);
    
    return (
        <div className="buttonDiv">
            <button className={digitToName(initalValue)} onClick={roll} />
            <p>Läsvänligt värde: {value}</p>
        </div>
    );
}