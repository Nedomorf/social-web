export const required = value => {
    if (!value) return "The field is required.";
    return undefined;
}

export const maxLengthCreator = (maxLength) => value => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols.`;
    return undefined;
}

export const minLengthCreator = (minLength) => value => {
    if (value && value.length < minLength) return `Min length is ${minLength} symbols.`;
    return undefined;
}