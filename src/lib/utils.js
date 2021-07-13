/** Remove tags from html */
export const removeTags = (str) => {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    // Regular expression to identify HTML tags in  
    // the input string. Replacing the identified  
    // HTML tag with a null string. 
    return str.replace(/(<([^>]+)>)/ig, '');
}

// Shortens strings
export const extractor = (str, number = 15) => {
    if (!str) return '';
    let shortString;
    let array = str.split(' '); // turn to array
    shortString = array.slice(0, number).join(' ');
    shortString = array.length > number ? `${shortString}...` : shortString;
    return shortString;
};