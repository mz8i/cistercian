import * as React from 'react';
import { Digit, DigitPosition } from '../types';
import { HoverUpdate } from '../use-hover';
import { CistercianDigitPositioned } from './CistercianDigitPositioned';

import './CistercianNumber.css';

interface CistercianNumberProps {
    number: number;
    highlightedPosition?: DigitPosition;

    onPositionHover: HoverUpdate<DigitPosition>;
}

function getDigits(num: number): Digit[] {
    if (num < 0 || num > 9999) {
        throw new Error('A Cistercian number can only be shown for integers from 0 to 9999');
    }

    return num.toString().padStart(4, '0').split('').map(n => parseInt(n, 10)) as Digit[];
}

export const CistercianNumber: React.FC<CistercianNumberProps> = ({
    number,
    highlightedPosition,
    onPositionHover
}) => {
    const [thousands, hundreds, tens, ones] = React.useMemo(() => getDigits(number), [number]);

    return <svg className="cistercian-number" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 340">
        <g transform="translate(20,20)">
            <g key="group-ones" transform="translate(100,0)" >
                <CistercianDigitPositioned
                    digit={ones} position='ones'
                    highlight={highlightedPosition === 'ones'}
                    onHover={onPositionHover('ones')}
                />
            </g>
            <g key="group-tens"transform="translate(0,0)" >
                <CistercianDigitPositioned
                    digit={tens} position='tens'
                    highlight={highlightedPosition === 'tens'}
                    onHover={onPositionHover('tens')}
                />
            </g>
            <g key="group-thousands"transform="translate(0, 200)" >
                <CistercianDigitPositioned
                    digit={thousands} position='thousands'
                    highlight={highlightedPosition === 'thousands'}
                    onHover={onPositionHover('thousands')}
                />
            </g>
            <g key="group-hundreds"transform="translate(100, 200)" >
                <CistercianDigitPositioned
                    digit={hundreds} position='hundreds'
                    highlight={highlightedPosition === 'hundreds'}
                    onHover={onPositionHover('hundreds')}
                />
            </g>
            <line x1="100" y1="0" x2="100" y2="300" strokeLinecap="square"/>
        </g>
    </svg>;
}