import React, { useCallback } from 'react'
import MediaQuery from 'react-responsive';

import { NumberChangeButton } from './NumberChangeButton';
import { TextNumberInput } from './TextNumberInput';
import { ALL_DIGIT_POSITIONS, DigitPosition, DIGIT_POSITION_BASE } from '../types';

import './ArabicNumberInput.css';
import { HoverUpdate } from '../use-hover';
import { PositionName } from './PositionName';

interface ArabicNumberInputProps {
    value: number;
    onChange: (val: number) => void;
    onPositionHover: HoverUpdate<DigitPosition>;
    highlightedPosition: DigitPosition | undefined;
    minNumber: number;
    maxNumber: number;
}

const SCREEN_WIDTH_BREAK = 1300;

export const ArabicNumberInput: React.FC<ArabicNumberInputProps> = ({
    value,
    onChange,
    onPositionHover,
    highlightedPosition,
    minNumber,
    maxNumber
}) => {
    const handleNumberChange = useCallback(delta => onChange(value+delta), [onChange, value]);

    const btnProps = {
        minNumber: minNumber,
        maxNumber: maxNumber,
        onChangeNumber: handleNumberChange
    };

    return (
        <div>
            <MediaQuery maxDeviceWidth={SCREEN_WIDTH_BREAK - 1}>
                <div className='small'>
                    <TextNumberInput
                        className="year-text-input"
                        value={value}
                        onChange={onChange}
                        maxLength={4}
                    />
                    <div className="input-section position-column-list">
                    {
                        ALL_DIGIT_POSITIONS.slice(0).reverse().map(pos => (
                            <div key={`pos=${pos}`} className="position-column">
                                <NumberChangeButton 
                                    number={value}
                                    change={DIGIT_POSITION_BASE[pos]}
                                    onHover={onPositionHover(pos)}
                                    {...btnProps}
                                />
                                <PositionName position={pos} highlight={highlightedPosition === pos} onHover={onPositionHover(pos)} />
                                <NumberChangeButton
                                    number={value}
                                    change={-DIGIT_POSITION_BASE[pos]}
                                    onHover={onPositionHover(pos)}
                                    {...btnProps}
                                />
                            </div>
                        ))
                    }
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery minDeviceWidth={SCREEN_WIDTH_BREAK}>
                <div className="input-section large">
                    <span className="negative-change">
                    {
                        ALL_DIGIT_POSITIONS.slice(0).reverse().map(pos => (
                            <NumberChangeButton key={`btn-${pos}`} 
                                number={value}
                                change={-DIGIT_POSITION_BASE[pos]}
                                onHover={onPositionHover(pos)}
                                {...btnProps}
                            >
                                <PositionName position={pos} highlight={highlightedPosition === pos} />
                            </NumberChangeButton>
                        ))
                    }
                    </span>
                    <TextNumberInput
                        className="year-text-input"
                        value={value}
                        onChange={onChange}
                        maxLength={4}
                    />
                    <span className="positive-change">
                    {
                            ALL_DIGIT_POSITIONS.map(pos => (
                                <NumberChangeButton key={`btn-${pos}`} 
                                    number={value}
                                    change={DIGIT_POSITION_BASE[pos]}
                                    onHover={onPositionHover(pos)}
                                    {...btnProps}
                                >
                                    <PositionName position={pos} highlight={highlightedPosition === pos} />
                                </NumberChangeButton>
                            ))
                        }
                    </span>
                </div>
            </MediaQuery>

            <div className="input-section slider-container">
                <span className="slider-label">{minNumber}</span>
                <input
                    className="slider-input"
                    type="range"
                    min={minNumber} max={maxNumber} step={1} value={value} onChange={e => onChange(parseInt(e.target.value))} />
                <span className="slider-label">{maxNumber}</span>
            </div>
        </div>
    );
};