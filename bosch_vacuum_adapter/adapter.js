const BOSH_RAD = 33 / 2;
const OTHER_RAD = 31 / 2;
const LENGTH = 50
const THICC = 2;

function main () {
  let adapter_inner = cylinder({
      r1: BOSH_RAD, 
      r2: OTHER_RAD, 
      h: LENGTH
      
  });
  
  let adapter_outer = cylinder({
      r1: BOSH_RAD + THICC, 
      r2: OTHER_RAD + THICC, 
      h: LENGTH
      
  });
  
  let adapter = difference(adapter_outer, adapter_inner);
  
  return adapter;
}
