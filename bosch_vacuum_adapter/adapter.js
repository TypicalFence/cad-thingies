// units are in mm
const BOSH_RAD = 35 / 2;
const MID_RAD_1 = 34 / 2
const MID_RAD_2 = 32 / 2;
const OTHER_RAD = 31 / 2;
const CONE_1_LENGTH = 35;
const CONE_2_LENGTH = 20;
const CONE_3_LENGTH = 45;
const THICC = 2;

function main () {
    let cone_1_in = cylinder({
      r1: BOSH_RAD, 
      r2: MID_RAD_1, 
      h: CONE_1_LENGTH,
    }); 

    let cone_2_in = cylinder({
      r1: MID_RAD_1, 
      r2: MID_RAD_2 - THICC, 
      h: CONE_2_LENGTH,
    });

    let cone_3_in = cylinder({
      r1: MID_RAD_2 - THICC, 
      r2: OTHER_RAD - THICC, 
      h: CONE_3_LENGTH,
    });

    let adapter_inner = union(
        cone_1_in,
        translate([0, 0, CONE_1_LENGTH], cone_2_in),
        translate([0, 0, CONE_1_LENGTH + CONE_2_LENGTH], cone_3_in)
    );

    let cone_1_out = cylinder({
      r1: BOSH_RAD + THICC, 
      r2: MID_RAD_1 + THICC, 
      h: CONE_1_LENGTH,
    }); 

    let cone_2_out = cylinder({
      r1: MID_RAD_1 + THICC, 
      r2: MID_RAD_2, 
      h: CONE_2_LENGTH,
    });

    let cone_3_out = cylinder({
      r1: MID_RAD_2, 
      r2: OTHER_RAD, 
      h: CONE_3_LENGTH,
    });

    let adapter_outer = union(
        cone_1_out,
        translate([0, 0, CONE_1_LENGTH], cone_2_out),
        translate([0, 0, CONE_1_LENGTH + CONE_2_LENGTH], cone_3_out)
    );

    let adapter = difference(adapter_outer, adapter_inner);

    return adapter;
}

