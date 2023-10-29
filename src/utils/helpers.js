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

export const getBorder = (results) => {
    const { result } = results;
    switch (result) {
      case 'correct':
        return 'green'
      case 'One Out':
        return 'success.main'
      case 'Two Out':
        return 'warning.main'
      default:
        return 'error.main'
    }
  }


  export const compare = ( a, b ) => {
    if ( a.score > b.score ){
      return -1;
    }
    if ( a.score < b.score ){
      return 1;
    }
    return 0;
  }
    
    
