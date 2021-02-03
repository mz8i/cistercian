import * as React from 'react';

interface NumberChangeButtonProps {
    number: number;
    change: number;
    minNumber: number;
    maxNumber: number;
    onChangeNumber: (number: number) => void;
    onMouseOver?: (e: React.MouseEvent) => void;
    onMouseOut?: (e: React.MouseEvent) => void;
}
export const NumberChangeButton: React.FC<NumberChangeButtonProps> = ({
    number,
    change,
    minNumber,
    maxNumber,
    onChangeNumber,
    onMouseOver,
    onMouseOut
}) => {
    const afterChange = number + change;
    const active = afterChange >= minNumber && afterChange <= maxNumber;
    
    return <button
        className="number-btn"
        disabled={!active}
        onClick={e => onChangeNumber(afterChange)}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
    >
        {(change>0 ? "+" : "") + change}
    </button>;
}