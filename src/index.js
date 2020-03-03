module.exports = function reverse (n) {
    
    res = Math.abs(n);
    return res.toString().split('').reverse().join('');
}
