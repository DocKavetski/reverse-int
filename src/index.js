function reverse(num) {
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);
}
