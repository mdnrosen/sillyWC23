export const getOptions = (array, labelKey, valueKey) => {
    return array.map(item => {
        return {
            label: item[labelKey],
            value: item[valueKey]
        }
    })
}

// will work (...?) for each round, not just the England round?
export const filteredGuessesByRound = (allData, roundPrefix) => {
    return allData.body.map(object => {
        return {
            name: object.name,
            id: object.id,
            guesses: filterGuessObject(object.guesses, roundPrefix)
        }
    })
}

const filterGuessObject = (object, prefix) => {
    return Object.keys(object)
        .filter(key => key.startsWith(prefix))
        .reduce((newObject, key) => {
            newObject[key] = object[key];
            return newObject;
        }, {});
}