import memoize from "fast-memoize";
import { useMemo, useState } from "react";

function noop() {}

export function useMouseHoverHandlers(onHover?: (isHover: boolean) => void) {
    return useMemo(
        () => onHover !== undefined ? {
            onMouseOver: () => onHover(true),
            onMouseOut: () => onHover(false)
        } : {
            onMouseOver: noop,
            onMouseOut: noop
        },
        [onHover]
    );
}

export function useHoverTracker<T>() {
    const [currentHoverValue, setCurrentHoverValue] = useState<T | undefined>(undefined);

    const updateHover = (hoverValue: T, isHover: boolean) => {
        if(hoverValue !== currentHoverValue) {
            if(isHover) {
                setCurrentHoverValue(hoverValue);
            }
        } else if(!isHover) {
            setCurrentHoverValue(undefined);
        }
    };

    const onHoverFactory: HoverUpdate<T> = memoize(
        (hoverValue: T) => (isHover: boolean) => updateHover(hoverValue, isHover)
    );

    return [currentHoverValue, onHoverFactory, setCurrentHoverValue] as const;
}

export type HoverUpdate<T> = (value: T) => (isHover: boolean) => void;