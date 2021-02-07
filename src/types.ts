export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export const ALL_DIGIT_POSITIONS = ['ones', 'tens', 'hundreds', 'thousands'] as const;

export type DigitPosition = typeof ALL_DIGIT_POSITIONS[number];

export const DIGIT_POSITION_BASE: {[k in DigitPosition]: number} = Object.fromEntries(
    ALL_DIGIT_POSITIONS.map((p, i) => [p, Math.pow(10, i)])
) as {[k in DigitPosition]: number};