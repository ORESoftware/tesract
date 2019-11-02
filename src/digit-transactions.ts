'use strict';


export const canGetZeroNonRecursive = (l: Array<number>) => {

  const stk = [0], s = new Set();
  
  while(stk.length > 0){
    
    const v = stk.pop();
  
    if (s.has(v)) {
      continue;
    }
  
    s.add(v);
    
    const val = l[v];
    
    if(val === 0){
      return true;
    }
    
    if(v - val >= 0){
      stk.push(v - val);
    }
  
    if(v + val < l.length){
      stk.push(v + val);
    }
    
  }
  
  return false;
  
};



export const canGetZero = (l: Array<number>, v: number, s: Set<number>) => {
  
  if (s.has(v)) {
    return false;
  }
  
  s.add(v);
  
  const val = l[v];
  
  if (val === 0) {
    return true;
  }
  
  if (v - val >= 0) {
    let b = canGetZero(l, v - val, s);
    if (b) {
      return true;
    }
  }
  
  if (v + val < l.length) {
    let b = canGetZero(l, v + val, s);
    if (b) {
      return true;
    }
  }
  
  return false;
  
};

console.log(
  canGetZero([1, 1, 1, 1, 0] , 0, new Set<number>())
);

console.log(
  canGetZeroNonRecursive([1, 1, 1, 1, 0])
);


