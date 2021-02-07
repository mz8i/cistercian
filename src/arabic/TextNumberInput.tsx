import React, { useEffect, useMemo, useState } from 'react';

interface TextNumberInputProps {
    value: number;
    onChange: (val: number) => void;
    
    className?: string;
    maxLength?: number;
}

function trimZeros(val: string) {
    return val.replace(/^(0+)(?=\d+)/, '');
}

export const TextNumberInput: React.FC<TextNumberInputProps> = ({
    value,
    onChange,

    className,
    maxLength
}) => {
    const [textNumber, setTextNumber] = useState(value.toString());
    const [isEditing, setIsEditing] = useState(false);

    const textNumberValue = useMemo(() => parseInt(textNumber, 10), [textNumber]);

    useEffect(() => {
        if(textNumberValue !== value) {
            if(isEditing) {
                if(!isNaN(textNumberValue)) {
                    onChange(textNumberValue);
                }
            } else {
                setTextNumber(value.toString());
            }
        }
    }, [textNumberValue, value, onChange, isEditing]);

    return (
        <input
            className={className}
            type="text"

            pattern="[0-9]*"
            inputMode="numeric"
            maxLength={maxLength}

            value={textNumber}
            onChange={e => {
                const newVal = e.target.value.replaceAll(/[^0-9]/g, '');
                if(newVal !== textNumber) {
                    setTextNumber(newVal);
                } else {
                    e.preventDefault();
                }
            }}
            onFocus={() => setIsEditing(true)}
            onBlur={() => {
                setIsEditing(false);
                setTextNumber(trimZeros(textNumber));
            }}
        />
    );
};