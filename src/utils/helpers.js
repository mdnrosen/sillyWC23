export const getOptions = (array, labelKey, valueKey) => {
    return array.map(item => {
        return {
            label: item[labelKey],
            value: item[valueKey]
        }
    })
}

export const filterByRound = (all, subStr) => {
    return all.filter(q => {
        const regexp = new RegExp(subStr)
        return regexp.test(q.name) ?? q
    })
}

export const getPos = (pos) => {
    // return st, nd, or rd etc
    switch (pos) {
        case 1:
            return `${pos}st`
        case 2:
            return `${pos}nd`
        case 3:
            return `${pos}rd`
        default:
            return `${pos}th`
    }
}
    
    
