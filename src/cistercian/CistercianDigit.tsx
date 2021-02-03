import * as React from 'react';
import { Digit } from '../types';

export interface CistercianDigitProps {
    digit: Digit;
    highlight?: boolean;
}

const baseFragments = [1, 2, 3, 4, 6] as const;
type BaseFragment = typeof baseFragments[number];

const digitFragments: {[K in Digit]: BaseFragment[] } = {
    0: [],
    1: [1],
    2: [2],
    3: [3],
    4: [4],
    5: [1, 4],
    6: [6],
    7: [1, 6],
    8: [2, 6],
    9: [1, 2, 6]
};

function getActiveFragmentsLookup(activeFragments: Digit[]) {
    const lookup = Object.assign({}, ...baseFragments.map(f => ({[f]: false})));
    for (let af of activeFragments) {
        lookup[af] = true;
    }

    return lookup;
}

export const CistercianDigit: React.FC<CistercianDigitProps> = ({
    digit,
    highlight = false,
}) => {
    const activeFragments = digitFragments[digit];

    if(activeFragments == undefined) {
        throw new Error('A cistercian digit can only be generated for Arabic digits 1-9');
    }

    const isOn = getActiveFragmentsLookup(activeFragments);

    return <g className={`cistercian-glyph ${highlight ? "highlighted" : ""}`} >
        {isOn[1] && <line x1="0" y1="0" x2={100} y2="0" />}
        {isOn[2] && <line x1="0" y1="100" x2="100" y2="100" />}
        {isOn[3] && <line x1="0" y1="0" x2="100" y2="100" />}
        {isOn[4] && <line x1="0" y1="100" x2="100" y2="0" />}
        {isOn[6] && <line x1="100" y1="0" x2="100" y2="100" />}
    </g>;
}