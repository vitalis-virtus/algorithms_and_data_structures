const cashFunction = (fn) => {
  const cash = {};
  return function (n) {
    if (cash[n]) {
      console.log("from cash");
      return cash[n];
    }
    let result = fn(n);
    //we store result in cash
    cash[n] = result;
    return result;
  };
};

const factorial = (n) => {
  let result = 1;
  while (n != 1) {
    result *= n;
    n -= 1;
  }
  return result;
};

const cashFactorial = cashFunction(factorial);

console.log(cashFactorial(1));
console.log(cashFactorial(2));
console.log(cashFactorial(3));
console.log(cashFactorial(2));
console.log(cashFactorial(5));
