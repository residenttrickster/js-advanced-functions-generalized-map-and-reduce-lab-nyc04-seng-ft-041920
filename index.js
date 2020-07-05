// Add your functions here
function map(arr, callback) {
    return arr.map(element => callback(element))
};

function reduce(arr, callback, startPoint=0) {
    if(!startPoint) {
        return arr.reduce((accumulator, element) => callback(accumulator, element))
    } else {
        return arr.reduce((accumulator, element, startPoint) => callback(accumulator, element), startPoint)
    }
};


