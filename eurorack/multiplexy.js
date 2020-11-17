// https://synthracks.com/eurorack-rails

// hp in mm
hp = 5;

// 3U in mm
u3 = 128.5

railHeight = 9.25;

function panel(width) {
    let front = cube({
        size: [width, 5, u3] 
    });
    
    railCutout = cube({size: [width, 5, 9.25]}).translate([0, 3, 0])

    front = difference(
        front,
        railCutout,
        railCutout.translate([0, 0, u3 - railHeight])
    );
    
    front = front.center([true, false, false])

    const screwHole = cylinder({r: 1.6, h: 5, fn: 20})
        .rotateX(-90)
        .center([true, false, true]);
    
    const screwHoles = union(
        screwHole.translate([-hp, 0, 0]),
        screwHole.translate([hp, 0, 0])
    )

    front = difference(
        front,
        screwHoles.translate([0, 0, 3]),
        screwHoles.translate([0, 0, u3-3])
    );
     
    return front;
}

function main() {
    frontPanel = panel(4 * hp)
    
    return frontPanel;
}
