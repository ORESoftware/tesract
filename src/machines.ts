


const m = new Map<string, Set<number>>();


export const alloc = (k: string) : string => {

  if(!m.has(k)){
    m.set(k , new Set());
  }

  const s = m.get(k);

  let i = 1;

  while(i <= s.size){
    if(!s.has(i)){
      break;
    }
    i++;
  }

  s.add(i);
  return k + i;

};


const parseInput = (v: string) : [string, number]=> {

  const z= v.match(/^([A-Z]+)([0-9]+)$/);

  if(!z){
    throw new Error('Could not parse the input value');
  }

  // 0 => whole string
  // 1, 2, ...

  // 0293

  const [whole, k, second] = z;


  const n = parseInt(second);

  if(Number.isNaN(n)){
    throw new Error('Could not parse integer from tail of string.');
  }

  return [k, n];

};

export const dealloc = (v: string) : boolean => {

  const [k,n] = parseInput(v);

  if(!m.has(k)){
   return false;
  }

  return m.get(k).delete(n);
};


const initializeMap = () => {

  [
    'WEB1',
    'SEARCH1',
    'WEB3'

  ].forEach(v => {

    const [k, n] = parseInput(v);

    if(!m.has(k)){
      m.set(k , new Set());
    }

    const s = m.get(k);
    s.add(n);

  });
};

initializeMap();

console.log(m);

alloc('SEARCH');
alloc('WEB');
alloc('WEB');
alloc('DB');
const r = alloc('DB');
dealloc(r);
alloc('DB');

console.log(m);

