
export interface ParsedAddress {
  line1: string,
  line2: string,
  city: string,
  state: string,
  zip: string
}

const stMonikers = new Set([
  'st',
  'street',
  'way',
  'place',
  'pl',
  'blvd',
  'plaza',
  'ave'
]);

export const parseAddress = (address: string) : ParsedAddress => {

  const tokens = address.split(/\s+/g);
   let line1 = '';
   let zip = tokens.pop();
   let state = tokens.pop();
   let city = '';
   let line2 = '';

   // handle city :)
  while(tokens.length){

    const last = tokens[tokens.length - 1];

    if(stMonikers.has(last.toLowerCase())){
      break;
    }

    if(/[0-9]/.test(last)){
      break;
    }

    const curr  = tokens.pop();
    city = curr + (city.length < 1 ? city : ' ' + city);
  }


  let isLine2 = true;

  // parse line1 and line2 here :)

  while(tokens.length){
    const curr  = tokens.pop();

    if(stMonikers.has(curr.toLowerCase())){
      isLine2 = false;
    }

    if(isLine2){
      line2 = curr + (line2.length < 1 ? line2 : ' ' + line2);
    }
    else{
      line1 = curr +  (line1.length < 1 ? line1 : ' ' + line1);
    }
  }

  return {
    line1,
    line2,
    city,
    state,
    zip
  };

};


[
  '185 Berry St St Francis CA 94107',
  '185 Berry St Suite 6100 San Francisco CA 94107',
  '185 Berry St Unit 6100 San Francisco CA 94107-1796',
  '185 Berry St San Francisco XX 94107',
  '779 St Francis Ave Novato CA 94947',
  '222 W Merchandise Mart Plaza Chicago IL 60654'
].forEach(v => {
  console.log(parseAddress(v));
});
