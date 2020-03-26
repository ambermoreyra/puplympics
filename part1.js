var puppies = [
    {
        name: "alfie",
        pace: 5,
        paceDuration: 17,
        restDuration: 57,
        totalDistance: 0
    }, {
        name: "lincoln",
        pace: 28,
        paceDuration: 6,
        restDuration: 133,
        totalDistance: 0
    }, {
        name: "tuck",
        pace: 23,
        paceDuration: 4,
        restDuration: 83,
        totalDistance: 0
    }, {
        name: "sullivan",
        pace: 19,
        paceDuration: 7,
        restDuration: 108,
        totalDistance: 0
    }, {
        name: "stitch",
        pace: 4,
        paceDuration: 22,
        restDuration: 62,
        totalDistance: 0
    }, {
        name: "zema",
        pace: 16,
        paceDuration: 6,
        restDuration: 86,
        totalDistance: 0
    }, {
        name: "mara",
        pace: 27,
        paceDuration: 6,
        restDuration: 135,
        totalDistance: 0
    }, {
        name: "butter",
        pace: 12,
        paceDuration: 6,
        restDuration: 53,
        totalDistance: 0
    }, {
        name: "ember",
        pace: 15,
        paceDuration: 4,
        restDuration: 50,
        totalDistance: 0
    }
];

numberOfSeconds = 300;

var cycle = 1;

for (var i = 0; i < puppies.length; i++) {
    for (var j = 1; j <= numberOfSeconds; j++){
        if (j <= ((puppies[i].paceDuration * cycle) + (puppies[i].restDuration * (cycle - 1)))) {
            puppies[i].totalDistance += puppies[i].pace;
        } else if (j === ((puppies[i].paceDuration + puppies[i].restDuration) * cycle)) {
            cycle ++;
        }
    } 
    console.log (`${puppies[i].name}: ${puppies[i].totalDistance}`);
}
