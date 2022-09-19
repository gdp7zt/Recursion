function mergeSort(arr){
    if(arr.length === 1) return arr;
    if(arr.length === 0) return "Error, empty array!";

    let middle = Math.floor(arr.length / 2);
    let leftHalf = arr.slice(0, middle);
    let rightHalf = arr.slice(middle);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(firstPart, secondPart){
    let first = 0;
    let second = 0;
    let arr = [];

    if(secondPart === undefined) return firstPart;

    while(first < firstPart.length || second < secondPart.length){
        if(firstPart[first] === undefined){
            arr.push(secondPart[second]);
            second++;
        } else if(secondPart[second] === undefined){
            arr.push(firstPart[first]);
            first++;
        } else if(firstPart[first] < secondPart[second]){
            arr.push(firstPart[first]);
            first++;
        } else if(firstPart[first] > secondPart[second]){
            arr.push(secondPart[second]);
            second++;
        } else{
            arr.push(firstPart[first]);
            arr.push(secondPart[second]);
            first++;
            second++;
        }
    }

    return arr;
}

console.log(mergeSort([1,6,3,5]));
console.log(mergeSort([1,6,3,5,45,92,24,10,8,76]));