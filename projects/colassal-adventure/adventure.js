const ask = require("readline-sync");

let enemies = [
    {
        name: "vampire",
        health: 50,
        strength: 10,
        weakness: "silver stakes",
        reward: 25,
        bounty: "Amulet of Healing"
    },
    {
        name: "dementors",
        health: 75,
        strength: 15,
        weakness: "patronus spell",
        reward: 35,
        bounty: "Chocolate"
    },
    {
        name: "voldermort",
        health: 100,
        strength: 20,
        weakness: "elder wand",
        reward: 50,
        bounty: "Peace"
    },
    {
        name: "Shia Lebouf",
        health: 125,
        strength: 25,
        weakness: "axe",
        reward: 75,
        bounty: "Shia's decapitated head"
    }
]

let playerInfo = {
    health: 100,
    weapons: ["stick"],
    expLvl: 0,
    loot: []
}



console.clear()
playerInfo.name = ask.question("Welcome Stranger, we don't get many visitors in these parts. Does the stranger have a name?\n")
console.clear()
console.log(`Welcome ${playerInfo.name}.\nBe careful, there are many monsters lurking about. You never know when you'll get attacked by one. Stay vigilant!`);



while(playerInfo.health > 0 && playerInfo.expLvl <= 100){
    let action = ask.keyIn("type [w] for walk, [i] for inventory ", {limit: "$<wi>"} );
    if(action === "w"){
        walk()
    } else if( action === "i"){
        console.log(playerInfo)
    }
    playerInfo.expLvl === 100 ? console.log("You won the game!") : '';
}

function walk(){
    gainExp()
    let chance = Math.floor(Math.random() * 3);
    if(chance === 2){
        getAttacked()
    }
}

function getAttacked(){
    console.clear()
    let fightOrFlight = ask.keyIn("An enemy approaches! Type [r] to try and escape or [f] to fight the enemy\n", {limit: "$<rf>"})
    let enemy = enemySelector();
    let weapon = weaponSelector();
    if(fightOrFlight === "f"){
        console.log(`You must fight ${enemy.name} with ${weapon}!`)
        fight(enemy, weapon)
        
    }
    else if (fightOrFlight === "r"){
        let escapeChance = Math.floor(Math.random() * 2)
        if(escapeChance === 1){
            console.log("You escaped!\n")
        }else {
            console.log("Escape is impossible!\n")
            console.log(`You are fighting ${enemy.name} with ${weapon}.`)
            fight(enemy, weapon) 
        }
    }
}

function gainExp(){
    playerInfo.expLvl += 5;
    if(playerInfo.expLvl >= 10 && !playerInfo.weapons.includes("silver stakes")){
        playerInfo.weapons.push("silver stakes")
    } else if( playerInfo.expLvl >= 20 && !playerInfo.weapons.includes("patronus spell")){
        playerInfo.weapons.push("patronus spell")
    } else if( playerInfo.expLvl === 30 && !playerInfo.weapons.includes("elder wand")){
        playerInfo.weapons.push("elder wand")
    } else if( playerInfo.expLvl === 30 && !playerInfo.weapons.includes("axe")){
        playerInfo.weapons.push("axe")
    }
}

function enemySelector(){ 
    return enemies[Math.floor(Math.random()*enemies.length)] 
}

function weaponSelector(){ 
    return playerInfo.weapons[Math.floor(Math.random()*playerInfo.weapons.length)]
}
function hitStrength(){
    return Math.floor(Math.random()*15)+5
}

function victory(enemy, weapon){
    console.log(`You defeated ${enemy.name} with one blow using ${weapon}! ${weapon} was destroyed in the process. 
    You gained ${enemy.reward} experience points and ${enemy.bounty} from this battle.`);
    playerInfo.expLvl += enemy.reward;
    playerInfo.loot.push(enemy.bounty)
    enemies.splice(enemies.indexOf(enemy.name), 1);
    playerInfo.weapons.splice(playerInfo.weapons.indexOf(weapon), 1);
}

function fight(enemy, weapon){
    if(weapon === enemy.weakness){
        victory()
    }else {
        while(playerInfo.health > 0 && enemy.health > 0){
            let damageGiven = hitStrength();
            let damageTaken = hitStrength();
            enemy.health -= damageGiven;
            console.log(`You hit ${enemy.name} with ${damageGiven}`)
            playerInfo.health -= damageTaken;
            console.log(`You took a hit of ${damageTaken}, your health is now ${playerInfo.health}`)
            if(enemy.health <= 0){
                playerInfo.expLvl += enemy.reward;
                playerInfo.health += 50;
                console.log(`You've defeated ${enemy.name}! Your health is now ${playerInfo.health} and 
                you gained ${enemy.reward} experience points and ${enemy.bounty} from this battle.`)
                enemies.splice(enemies.indexOf(enemy.name), 1);
            } 
            else if(playerInfo.health <= 0){
                console.log(`${playerInfo.name} was defeated by ${enemy.name}`)
                console.log("GAME OVER, MAN. GAME OVER.")
            }
        }
    }
}