import React from 'react'

import { DigitPosition } from '../types';
import { useMouseHoverHandlers } from '../use-hover';

interface PositionNameProps {
    position: DigitPosition;
    highlight?: boolean;
    onHover?: (isHover: boolean) => void;
}

export const PositionName : React.FC<PositionNameProps> = ({
    position,
    highlight = false,
    onHover
}) => {
    const mouseEventHandlers = useMouseHoverHandlers(onHover);
    
    return (
        <div className={`position-name ${highlight ? 'highlighted': ''}`} {...mouseEventHandlers} >
            {position}
        </div>
    );
};