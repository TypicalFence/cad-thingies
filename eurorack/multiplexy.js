// https://synthracks.com/eurorack-rails

// hp in mm
hp = 5;

// 3U in mm
u3 = 128.5

railHeight = 9.25;

function panel(width, thicc=5) {
    let front = cube({
        size: [width, thicc, u3] 
    });
    
    railCutout = cube({size: [width, 5, 9.25]}).translate([0, 3, 0])

    front = difference(
        front,
        railCutout,
        railCutout.translate([0, 0, u3 - railHeight])
    );
    
    front = front.center([true, false, false])

    const screwHole = cylinder({r: 1.6, h: thicc, fn: 20})
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

function jack() {
    const jackHole = cylinder({r: 3.5, h: 3.5})
        .rotateX(-90)
        .center([true, false, true]);
    
    const jackBase = cube({size: [12, 11.5, 7]})
        .translate([0, 3, 0]) 
        .center([true, false, true]);
    
    return union(jackHole, jackBase)
}


function main() {
    const thicc = 5;
    frontPanel = panel(4 * hp, thicc);
    
    const jackAmount = 6;
    let jacks = []
    
    for(let i=0; i<jackAmount; i++) {
        jacks.push(jack().translate([0, 0, i * 17]));
    }
    
    jacks = union(jacks).center([false, false, true]).translate([0, 0, u3/2]);
    
    frontPanel = difference(frontPanel, jacks)
    return frontPanel;
}
