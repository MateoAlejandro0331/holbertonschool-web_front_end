#!/usr/bin/node
function studentHogwarts () {
    let privateScore = 0
    let name = null
    function changeScoreBy(points) {
        privateScore += points
    }
    return {
        setName: (newName) => { name = newName; },
        rewardStudent: () => { changeScoreBy(1); },
        penalizeStudent: () => { changeScoreBy(-1); },
        getScore: () => `${name}: ${privateScore}`
    }
}
let harry = new studentHogwarts();
harry.setName("Harry");
for (let i = 0; i < 4; i++) {
    harry.rewardStudent();
}
console.log(harry.getScore());

let draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
for (let i = 0; i < 3; i++) {
    draco.penalizeStudent();
}
console.log(draco.getScore());
