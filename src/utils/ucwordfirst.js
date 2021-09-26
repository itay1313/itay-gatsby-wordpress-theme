export const ucwordfirst = (str) => {
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2
}

export const toPascalCase = (str) => {
    return str.split('-').map(el => ucwordfirst(el)).join('')
}

export default { ucwordfirst, toPascalCase };