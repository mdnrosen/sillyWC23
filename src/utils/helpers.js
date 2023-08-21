export const getOptions = (array, labelKey, valueKey) => {
    return array.map(item => {
        return {
            label: item[labelKey],
            value: item[valueKey]
        }
    })
}