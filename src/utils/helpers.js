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