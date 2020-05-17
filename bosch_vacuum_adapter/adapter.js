// units are in mm
const BOSH_RAD = 35 / 2;
const MID_RAD_1 = 34 / 2
const MID_RAD_2 = 32 / 2;
const OTHER_RAD = 31 / 2;
const CONE_1_LENGTH = 35;
const CONE_2_LENGTH = 20;
const CONE_3_LENGTH = 45;
const THICC = 1.2;


// adjust this function to adjust the thickness of the tube
// making it a function may have been a bit unnecessary 
function calc_outer_size(x) {
    return x * THICC;
}

function main () {
    let cone_1 = cylinder({
      r1: BOSH_RAD, 
      r2: MID_RAD_1, 
      h: CONE_1_LENGTH,
    }); 

    let cone_2 = cylinder({
      r1: MID_RAD_1, 
      r2: MID_RAD_2, 
      h: CONE_2_LENGTH,
    });

    let cone_3 = cylinder({
      r1: MID_RAD_2, 
      r2: OTHER_RAD, 
      h: CONE_3_LENGTH,
    });

    let adapter_inner = union(
        cone_1,
        translate([0, 0, CONE_1_LENGTH], cone_2),
        translate([0, 0, CONE_1_LENGTH + CONE_2_LENGTH], cone_3)
    );

    let adapter_outer = scale([calc_outer_size(1), calc_outer_size(1), 1], adapter_inner)

    let adapter = difference(adapter_outer, adapter_inner);
    return adapter;
}
