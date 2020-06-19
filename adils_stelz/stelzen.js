const diameter = 39.6;
const diameter_ground = 30;
const edge_width = 5;
const height = 40;
const indet_height = 10;
const fn = 20;
const hollow = true;
const hollow_shit = 10;
const hollow_foot_print_factor = 0.8;


function main() {
    let stelz = cylinder({
        d1: diameter + edge_width,
        d2: diameter + edge_width + diameter_ground,
        h: height,
        fn,
    });

    const socket = cylinder({
        d: diameter, 
        h: indet_height,
        fn,
    });

    stelz = difference(stelz, socket);

    if (hollow) {
        const nom_nom = translate(
            [0, 0, indet_height],
            cylinder({
                d1: diameter - hollow_shit,
                d2: (diameter + diameter_ground) * hollow_foot_print_factor,
                h: height - indet_height,
                fn,
            })
        );

        stelz = difference(stelz, nom_nom);
    }
    
    return translate(
        [0, 0, height], 
        rotate([180, 0, 0], stelz)
    );
}
