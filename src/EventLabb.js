import React from 'react';
import Dice from './DiceLabb.js';

export default function EventLabb() {

    return (
        <div>
            <Dice initalValue="1"/>
            <Dice initalValue="2"/>
            <Dice initalValue="3"/>
            <Dice initalValue="4"/>
            <Dice initalValue="5"/>
            <Dice initalValue="6"/>
        </div>
    );
}