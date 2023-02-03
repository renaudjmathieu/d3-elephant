import seedrandom from 'seedrandom'

export const seed = new Date().getTime();

const seededRandom = seedrandom(seed);
export const random = (min, max, decimals = 2) => {
    return (min + seededRandom() * (max - min)).toFixed(decimals)
}