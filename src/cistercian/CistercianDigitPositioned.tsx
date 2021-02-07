import * as React from 'react';
import { DigitPosition } from '../types';
import { CistercianDigit, CistercianDigitProps } from './CistercianDigit';


interface CistercianDigitPositionedProps extends CistercianDigitProps {
    position: DigitPosition;
}

export const CistercianDigitPositioned: React.FC<CistercianDigitPositionedProps> = ({
    position,
    ...rest
}) => {
    const scaleX = (position === 'ones' || position === 'hundreds') ? 1 : -1;
    const scaleY = (position === 'tens' || position === 'ones')  ? 1 : -1;

    return (
        <svg width={100} height={100} viewBox="0 0 100 100" overflow="visible" >
            <g style={{
                transform: `scale(${scaleX}, ${scaleY})`,
                transformOrigin:"center", 
                transformBox: "view-box"
            }}>
                <CistercianDigit {...rest}/>
            </g>
        </svg>
    );
};

//