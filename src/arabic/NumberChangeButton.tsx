import React from 'react'
import { useMouseHoverHandlers } from '../use-hover';

import './NumberChangeButton.css';

interface NumberChangeButtonProps {
    number: number;
    change: number;
    minNumber: number;
    maxNumber: number;
    onChangeNumber: (delta: number) => void;
    onHover: (isHover: boolean) => void;
}
export const NumberChangeButton: React.FC<NumberChangeButtonProps> = ({
    number,
    change,
    minNumber,
    maxNumber,
    onChangeNumber,
    onHover,
    children
}) => {
    const mouseEventHandlers = useMouseHoverHandlers(onHover);
    
    const { onMouseOver: onFocus, onMouseOut: onBlur} = mouseEventHandlers;
    const focusEventHandlers = {onFocus, onBlur};

    const afterChange = number + change;
    const active = afterChange >= minNumber && afterChange <= maxNumber;

    return <button
        className={`number-btn`}
        disabled={!active}
        onClick={e => onChangeNumber(change)}
        {...mouseEventHandlers}
        {...focusEventHandlers}
    >
        <div className="number-btn-change">{(change>0 ? "+" : "") + change}</div>
        {children}
    </button>;
}