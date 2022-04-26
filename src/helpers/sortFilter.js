export const sortAlph = (arr) => {
    return arr.map(el => el)
        .sort(el => el.name)
}

export const filterPopulation = (arr) => {
    return arr.map(el => el)
        .filter(el => Number(el.population) >= 50000)
}

export const mostPopulationFirst = (arr) => {
    const mostPopulation = arr.reduce((acc, curr) =>
        Number(acc.population) > Number(curr.population)
            ? acc
            : curr);
    const result = arr
        .filter(el => el.city !== mostPopulation.city)
    result.unshift(mostPopulation)
    return result;
}

export const filterSelectCities = (arr) => {
    return mostPopulationFirst(sortAlph(filterPopulation(arr)))
}

export const uniqueUniversities = (uni) => {
    const uniq = [...new Set(uni.map(uni => uni.name))]
    return uniq
}