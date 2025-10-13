

const getSliceSizes = (array: number[], groups: number) => {
    const remainder = array.length % groups;

    // if the groups (except last) would not be equal we floor
    // result will be a bigger "remainder group" > "regular groups"
    if (remainder < groups - 1) {
        return Math.floor(array.length / groups);
    }

    // if we can have all equal groups except last
    // result will be "regular groups" > "remainder group"
    return Math.ceil(array.length / groups);

};

export const groupArray = (array: number[], groups: number): number[][] => {
    // handle the case where we don't have enough array elements to fill the required groups
    if (array.length < groups) {
        return [array];
    }

    const sliceSize = getSliceSizes(array, groups);
    const groupedArray: number[][] = [];

    for (let i = 0; i <= (array.length - sliceSize); i += sliceSize) {
        groupedArray.push(array.slice(i, i + sliceSize));

        if (groupedArray.length == groups - 1) {
            groupedArray.push(array.slice(i + sliceSize));
            break;
        }
    }

    return groupedArray;
};
