function reverse(num) {
    let result = num.toString();
    result = result.split("");
    result = result.reverse();
    result = result.join("");

    return +result;
}
