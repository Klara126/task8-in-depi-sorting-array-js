function quicksort(arr) {
    //remove duplicate
    function removeDuplicates(array) {
        return [...new Set(array)];
    }

    
    const pivot = arr[arr.length - 1];

    const lessThan = removeDuplicates(arr.filter(num => num < pivot));
    const greaterThan = removeDuplicates(arr.filter(num => num > pivot));

    //recursive function
    function partitionOnce(array) {
        if (array.length === 0) return { less: [], greater: [] }; // Base case if empty
        const newPivot = array[array.length - 1]; // Take the last element 
        const less = removeDuplicates(array.filter(num => num < newPivot)); // Less
        const greater = removeDuplicates(array.filter(num => num > newPivot)); // Greater 
        return { less, greater }; 
    }

    const lessThanSplit = partitionOnce(lessThan);
    const greaterThanSplit = partitionOnce(greaterThan);

    return {
        lessThan: lessThanSplit.less,
        greaterThan: greaterThanSplit.greater
    };
}

const arr = [10, 5, 2, 4, 8, 20, 5, 2, 3, 20, 9, 7, 11, 10];
const result = quicksortProcess(arr);

console.log("Final Less Than Array:", result.lessThan);
console.log("Final Greater Than Array:", result.greaterThan);