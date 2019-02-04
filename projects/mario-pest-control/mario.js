
const goombaInput = document.counter.goomba;
const bombInput = document.counter.bomb;
const cheepInput = document.counter.cheep;
let totalOutput = document.getElementById("total-amount")
let goombaCount = 0, bombCount = 0, cheepCount = 0;
const update = (e) => {
    if(e.target.name === "goomba"){
        goombaCount = +e.target.value * 5
    } else if(e.target.name === "bomb"){
        bombCount = +e.target.value * 7
    } else {
        cheepCount = +e.target.value * 11
    }
    addPests(goombaCount, bombCount, cheepCount);
}
const addPests = (x,y,z) => totalOutput.innerText = x + y + z;

counter.addEventListener("input", update)