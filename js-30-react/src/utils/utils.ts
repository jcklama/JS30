export const generateUrlParam = (input: string): string => {
    return input.split(' ').map((word: string) => word.toLowerCase()).join('');
}

export const addCommasToNumber = (input: string): string => {
    let temp: string = input;
    return temp.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Source: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    // \B matches any position that isn't a word boundary (position between \w and \W (non-word char) 
    // e.g. in the string "-12" , it would match before the 1 or after the 2)

    // ?=(\d{3})+ is a positive lookahead to match any sequence of numbers that are multiple of length 3 after the current match position (i.e. any non-boundary character)
    // ?!\d is a positive lookahead to match any non-number 
    // so from any non-boundary character, matches if 3 digits following it and no digits following it

    // Note: empty strings are strings! That's why we can use replace() to find these empty string positions
}