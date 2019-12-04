


const mapNums = (l : Array<number>) => {

  let zeroCount = 0;

  const product = l.reduce((a,b) => {
     return b === 0 ? (zeroCount++, a): a*b;
  }, 1);

  return l.map(v => {

    if(zeroCount < 1){
      return product/v;
    }

    if(zeroCount === 1){
      return v === 0 ? product : 0;
    }

    return 0;

  });
};


console.log(
  mapNums([1,2,3,4])
);

console.log(
  mapNums([1,2,0,4])
);

console.log(
  mapNums([1,0,0,4])
);
