import React, { ReactElement } from 'react'

interface Props {
    location: string;
    searchVal: string | undefined;
}

const getHighlightIndices = (location: string, searchVal: string | undefined): number[] | undefined => {
    if (searchVal) {
        const searchRegex: RegExp = new RegExp(searchVal, 'gi');
        let positions: number[] = []
        let result: RegExpExecArray | null;
        let searchLen: number = searchVal.length;
        
        // assignment as boolean condition bad?
        while (result = searchRegex.exec(location)) {
            positions.push(result.index);
        }
        let positionsAll: number[] = positions
            .map((nOne: number) => Array(searchLen).fill(nOne).map((nTwo: number, iTwo: number) => nTwo + iTwo))
            .flat();
        return positionsAll;
    }
    return Array(location.split('').length).fill(-1);
}

// always need to import React when returning JSX (see here: http://tiny.cc/f7lomz)
export const HighlightedLocation: React.FC<Props> = ({location, searchVal}): ReactElement | null => {
    const highlightedIndicies: number[] | undefined = getHighlightIndices(location, searchVal);
    if (highlightedIndicies && highlightedIndicies.length > 0) {
        return (
            <span>
                {location.split('').map((char: string, i: number) => {
                    const matchSearch: boolean = highlightedIndicies.some((n: number) => n === i);
                    return <span key={i} className={matchSearch ? 'highlighted': ''}>{char}</span>
                })}
            </span>
        )
    }
    return null;
}