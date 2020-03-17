module.exports = function reverse (n) {
    let arr = String(n).split(''); 
    if (arr[0] === '-') {
        arr.shift();
    }   
    let rez = arr.reverse().join('');          
    return Number(rez);
}
