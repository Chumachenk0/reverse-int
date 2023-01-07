module.exports = function reverse(n) {
    var n = n.toString().split("").reverse().join("");
    var n = parseFloat(n);
    return Math.abs(n);
};
