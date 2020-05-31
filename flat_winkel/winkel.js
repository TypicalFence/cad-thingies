const length = 60;
const width = 40;
const thickness = 2; 
const screw_size = 6;
const screw_position = {
    x: 10,
    y: 20,
}

function main() {
    const screw_hole = circle({
        r: (screw_size + 1)/2, 
        center: true 
    });
    let winkel = square({ size: [width, length], center: true});

    const pos = screw_position;
    const screw_hole_1 = translate([-pos.x, -pos.y, 0], screw_hole);
    const screw_hole_2 = translate([pos.x, -pos.y, 0], screw_hole);
    const screw_hole_3 = translate([-pos.x, pos.y, 0], screw_hole);
    const screw_hole_4 = translate([pos.x, pos.y, 0], screw_hole);
    winkel = difference(winkel, 
                        screw_hole_1, 
                        screw_hole_2, 
                        screw_hole_3, 
                        screw_hole_4
    );

    return linear_extrude({height: thickness}, winkel);
}
