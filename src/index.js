function reverse(num) {
    let result = num.toString();
    console.log(result);
    console.log(typeof result);
    result = result.split("");
    console.log(result);
    result = result.reverse();
    console.log(result);
    result = result.join("");
    console.log(result);

    return +result;
}

console.log(typeof reverse(343684));
