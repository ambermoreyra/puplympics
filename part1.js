var puppies = [
    {
        name: "alfie",
        pace: 5,
        paceDuration: 17,
        restDuration: 57,
        cycle: 1,
        totalDistance: 0
    }, {
        name: "lincoln",
        pace: 28,
        paceDuration: 6,
        restDuration: 133,
        cycle: 1,
        totalDistance: 0
    }, {
        name: "tuck",
        pace: 23,
        paceDuration: 4,
        restDuration: 83,
        cycle: 1,
        totalDistance: 0
    }, {
        name: "sullivan",
        pace: 19,
        paceDuration: 7,
        restDuration: 108,
        cycle: 1,
        totalDistance: 0
    }, {
        name: "stitch",
        pace: 4,
        paceDuration: 22,
        restDuration: 62,
        cycle: 1,
        totalDistance: 0
    }, {
        name: "zema",
        pace: 16,
        paceDuration: 6,
        restDuration: 86,
        cycle: 1,
        totalDistance: 0
    }, {
        name: "mara",
        pace: 27,
        paceDuration: 6,
        restDuration: 135,
        cycle: 1,
        totalDistance: 0
    }, {
        name: "butter",
        pace: 12,
        paceDuration: 6,
        restDuration: 53,
        cycle: 1,
        totalDistance: 0
    }, {
        name: "ember",
        pace: 15,
        paceDuration: 4,
        restDuration: 50,
        cycle: 1,
        totalDistance: 0
    }
];

function part1 (num) {
for (var i = 1; i <= num; i ++) {
    for (var j = 0; j < puppies.length; j ++) {
        if (i <= ((puppies[j].paceDuration * puppies[j].cycle) + (puppies[j].restDuration * (puppies[j].cycle - 1)))) {
            puppies[j].totalDistance += puppies[j].pace;
        } else if (i === ((puppies[j].paceDuration + puppies[j].restDuration) * puppies[j].cycle)) {
            puppies[j].cycle ++;
        }
    }
}
};

part1(1000);


