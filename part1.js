var test = [
    {
        name: "tuck",
        pace: 14,
        paceDuration: 10,
        restDuration: 138,
        cycle: 1,
        totalDistance: 0,
        totalPoints: 0
    }, {
        name: "sullivan",
        pace: 15,
        paceDuration: 11,
        restDuration: 152,
        cycle: 1,
        totalDistance: 0,
        totalPoints: 0
    }
];

var puppies = [
    {
        name: "alfie",
        pace: 5,
        paceDuration: 17,
        restDuration: 57,
        cycle: 1,
        totalDistance: 0,
        totalPoints: 0
    }, {
        name: "lincoln",
        pace: 28,
        paceDuration: 6,
        restDuration: 133,
        cycle: 1,
        totalDistance: 0,
        totalPoints: 0
    }, {
        name: "tuck",
        pace: 23,
        paceDuration: 4,
        restDuration: 83,
        cycle: 1,
        totalDistance: 0,
        totalPoints: 0
    }, {
        name: "sullivan",
        pace: 19,
        paceDuration: 7,
        restDuration: 108,
        cycle: 1,
        totalDistance: 0,
        totalPoints: 0
    }, {
        name: "stitch",
        pace: 4,
        paceDuration: 22,
        restDuration: 62,
        cycle: 1,
        totalDistance: 0,
        totalPoints: 0
    }, {
        name: "zema",
        pace: 16,
        paceDuration: 6,
        restDuration: 86,
        cycle: 1,
        totalDistance: 0,
        totalPoints: 0
    }, {
        name: "mara",
        pace: 27,
        paceDuration: 6,
        restDuration: 135,
        cycle: 1,
        totalDistance: 0,
        totalPoints: 0
    }, {
        name: "butter",
        pace: 12,
        paceDuration: 6,
        restDuration: 53,
        cycle: 1,
        totalDistance: 0,
        totalPoints: 0
    }, {
        name: "ember",
        pace: 15,
        paceDuration: 4,
        restDuration: 50,
        cycle: 1,
        totalDistance: 0,
        totalPoints: 0
    }
];

var raceLength = 3461;
var part1WinnerName = "";
var part1WinnerTotalDistance = 0;
var benchmarkDistance = 0;
var part2WinnerName = "";
var part2WinnerTotalPoints = 0;

function part1 (num) {
for (var i = 1; i <= num; i ++) {
    for (var j = 0; j < puppies.length; j ++) {
        if (i <= ((puppies[j].paceDuration * puppies[j].cycle) + (puppies[j].restDuration * (puppies[j].cycle - 1)))) {
            puppies[j].totalDistance += puppies[j].pace;
            if (puppies[j].totalDistance > benchmarkDistance) {
                benchmarkDistance = puppies[j].totalDistance;
            }
        } else if (i === ((puppies[j].paceDuration + puppies[j].restDuration) * puppies[j].cycle)) {
            puppies[j].cycle ++;
        }
    }
    for (var k = 0; k < puppies.length; k ++) {
        if (puppies[k].totalDistance === benchmarkDistance) {
            puppies[k].totalPoints ++;
        }
    }

}
};

function part1Winner() {
    part1(raceLength);
    for (var i = 0; i < puppies.length; i ++) {
        console.log(`${puppies[i].name}: ${puppies[i].totalDistance}\n`);
        if (puppies[i].totalDistance > part1WinnerTotalDistance) {
            part1WinnerTotalDistance = puppies[i].totalDistance;
            part1WinnerName = puppies[i].name;
        }
    }
    
    console.log(`The winning pup is ${part1WinnerName} with a total distance of ${part1WinnerTotalDistance}!`);
    
}

part1Winner();


function part2Winner() {
    part1(raceLength);
    for (var i = 0; i < puppies.length; i ++) {
        console.log(`${puppies[i].name}: ${puppies[i].totalPoints}\n`);
        if (puppies[i].totalPoints > part2WinnerTotalPoints) {
            part2WinnerTotalPoints = puppies[i].totalPoints;
            part2WinnerName = puppies[i].name;
        }
    }
    
    console.log(`The winning pup is ${part2WinnerName} with a point total of ${part2WinnerTotalPoints}!`);
    
}

part2Winner();