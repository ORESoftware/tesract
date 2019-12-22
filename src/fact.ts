

const getFactorialOf = (n: number) : number => {
  if(n <= 1){
    return 1;
  }
  return n * getFactorialOf(n-1);
};

console.log(2^3);

console.log(getFactorialOf(4));
