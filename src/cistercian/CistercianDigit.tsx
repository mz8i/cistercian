import React, { useMemo } from 'react';
import { Digit } from '../types';
import { useMouseHoverHandlers } from '../use-hover';

export interface CistercianDigitProps {
    digit: Digit;
    highlight?: boolean;
    onHover?: (isHover: boolean) => void;
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
    onHover
}) => {
    const mouseHoverHandlers = useMouseHoverHandlers(onHover);

    const activeFragments = digitFragments[digit];

    if(activeFragments === undefined) {
        throw new Error('A cistercian digit can only be generated for Arabic digits 0-9');
    }

    const isOn = useMemo(
        () => getActiveFragmentsLookup(activeFragments),
        [activeFragments]
    );

    return <g className={`cistercian-glyph ${highlight ? "highlighted" : ""}`}  {...mouseHoverHandlers}>
        {isOn[1] && <line key="frag-1" x1="0" y1="0" x2={100} y2="0" />}
        {isOn[2] && <line key="frag-2" x1="0" y1="100" x2="100" y2="100" />}
        {isOn[3] && <line key="frag-3" x1="0" y1="0" x2="100" y2="100" />}
        {isOn[4] && <line key="frag-4" x1="0" y1="100" x2="100" y2="0" />}
        {isOn[6] && <line key="frag-6" x1="100" y1="0" x2="100" y2="100" />}
        <rect x={0} y={0} width={100} height={100} fillOpacity={0} stroke="none" />
    </g>;
}