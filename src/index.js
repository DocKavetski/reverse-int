function reverse(number) {
  return (
    parseFloat(number.toString().split("").reverse().join("")) *
    Math.sign(number)
  );
}
