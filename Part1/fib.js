function fibs(n){
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    let arr = [0, 1];
    for(let i = 2; i < n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr;
}