import * as React from 'react';
import { Digit, DigitPosition } from '../types';
import { CistercianDigitPositioned } from './CistercianDigitPositioned';

import './CistercianNumber.css';

interface CistercianNumberProps {
    number: number;
    highlightedPosition?: DigitPosition;
}

function getDigits(num: number): Digit[] {
    if (num < 1 || num > 9999) {
        throw new Error('A Cistercian number can only be shown for integers from 1 to 9999');
    }

    return num.toString().padStart(4, '0').split('').map(n => parseInt(n, 10)) as Digit[];
}

export const CistercianNumber: React.FC<CistercianNumberProps> = ({
    number,
    highlightedPosition
}) => {
    const [thousands, hundreds, tens, units] = React.useMemo(() => getDigits(number), [number]);

    return <svg xmlns="http://www.w3.org/2000/svg" width="240" height="340" viewBox="0 0 240 340">
        <g className="cistercian-number" transform="translate(20,20)">
            <line x1="100" y1="0" x2="100" y2="300"/>
            <g transform="translate(100,0)" >
                <CistercianDigitPositioned digit={units} position='units' highlight={highlightedPosition === 'units'}/>
            </g>
            <g transform="translate(0,0)" >
                <CistercianDigitPositioned digit={tens} position='tens' highlight={highlightedPosition === 'tens'}/>
            </g>
            <g transform="translate(0, 200)" >
                <CistercianDigitPositioned digit={thousands} position='thousands' highlight={highlightedPosition === 'thousands'}/>
            </g>
            <g transform="translate(100, 200)" >
                <CistercianDigitPositioned digit={hundreds} position='hundreds' highlight={highlightedPosition === 'hundreds'}/>
            </g>
        </g>
    </svg>;
}