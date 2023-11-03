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

export const getPos = (num) => {
    // return st, nd, or rd etc
    if (num > 3 && num < 21) return `${num}th`;
    switch (num % 10) {
      case 1:
        return `${num}st`;
      case 2:
        return `${num}nd`;
      case 3:
        return `${num}rd`;
      default:
        return `${num}th`;
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
    
    
