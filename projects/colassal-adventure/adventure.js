const ask = require("readline-sync");

let enemies = [
    {
        name: "Vampire",
        health: 50,
        strength: "drinking all the blood",
        weakness: "silver stakes",
        reward: 25,
        bounty: "Amulet of Healing"
    },
    {
        name: "Dementors",
        health: 75,
        strength: "sucking out all the happiness",
        weakness: "patronus spell",
        reward: 35,
        bounty: "Chocolate"
    },
    {
        name: "Voldermort",
        health: 100,
        strength: "avada kedavra curse",
        weakness: "elder wand",
        reward: 50,
        bounty: "Peace"
    },
    {
        name: "Shia Lebouf",
        health: 125,
        strength: "cannibalism",
        weakness: "axe",
        reward: 75,
        bounty: "Shia's decapitated head"
    },
    {
        name: "Marcus Chair Thief",
        health: 25,
        strength: "failing grade",
        weakness: "boot",
        reward: 25,
        bounty: "Freedom to sit in your own chair"
    }
]

let playerInfo = {
    health: 100,
    weapons: ["stick", "boot"],
    expLvl: 0,
    loot: []
}

console.clear()
playerInfo.name = ask.question("Welcome Stranger, we don't get many visitors in these parts. Does the stranger have a name?\n")
console.clear()
console.log(`Welcome ${playerInfo.name}.\nBe careful, there are many monsters lurking about. You never know when you'll get attacked by one. Stay vigilant!`);


while(playerInfo.health > 0 && playerInfo.expLvl <= 150){
    if(playerInfo.expLvl >= 100){
        console.log("You've reached the maximum experience level. You are a Boss master. You win the game and life!")
        break;
    }
    let action = ask.keyIn("type [w] for walk, [i] for inventory, [q] to give up adventuring.", {limit: "$<wiq>"} );
    if(action === "w"){
        walk()
    } else if( action === "i"){
        console.log(playerInfo)
    } else if(action === "q"){
        break;
    }
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
    let fightOrFlight = ask.keyIn(`\x1b[33m An enemy approaches! Type [r] to try and escape or [f] to fight the enemy \x1b[0m \n`, {limit: "$<rf>"})
    let enemy = enemySelector();
    let weapon = weaponSelector();
    if(fightOrFlight === "f"){
        console.log(`You must fight ${enemy.name} with ${weapon}!`)
        fight(enemy, weapon)
        
    }
    else if (fightOrFlight === "r"){
        let escapeChance = Math.floor(Math.random() * 2)
        if(escapeChance === 1){
            console.log(`You escaped!\n`)
        }else {
            console.clear()
            console.log(`Escape is impossible!\n`)
            console.log(`You are fighting ${enemy.name} with ${weapon}.`)
            fight(enemy, weapon) 
        }
    }
}

function gainExp(){
    playerInfo.expLvl += 5;
    if(playerInfo.expLvl >= 10 && !playerInfo.weapons.includes("silver stakes")){
        playerInfo.weapons.push("silver stakes")
    } else if(playerInfo.expLvl >= 20 && !playerInfo.weapons.includes("patronus spell")){
        playerInfo.weapons.push("patronus spell")
    } else if( playerInfo.expLvl >= 30 && !playerInfo.weapons.includes("elder wand")){
        playerInfo.weapons.push("elder wand")
    } else if( playerInfo.expLvl >= 30 && !playerInfo.weapons.includes("axe")){
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

function fightExchange(victim, attacker){
    let damageGiven = hitStrength();
    victim.health -= damageGiven;
    console.log(`\x1b[31m ${attacker.name} hit ${victim.name} with ${damageGiven}. ${victim.name}'s health is now ${victim.health} \x1b[0m`)
}

function victory(enemy, weapon){
    console.clear()
    console.log(`You defeated ${enemy.name} with one blow using ${weapon}! ${weapon} was destroyed in the process. 
    You gained ${enemy.reward} experience points and ${enemy.bounty} from this battle.`);
    playerInfo.expLvl += enemy.reward;
    playerInfo.loot.push(enemy.bounty)
    enemies.splice(enemies.indexOf(enemy.name), 1);
    playerInfo.weapons.splice(playerInfo.weapons.indexOf(weapon), 1);
}

function fight(enemy, weapon){
    if(weapon === enemy.weakness){
        victory(enemy, weapon);
    }else {
        while(playerInfo.health > 0 && enemy.health > 0){
            fightExchange(enemy, playerInfo);
            fightExchange(playerInfo, enemy);
            if(enemy.health <= 0){
                playerInfo.expLvl += enemy.reward;
                playerInfo.health += 50;
                playerInfo.loot.push(enemy.bounty);
                console.log(`You've defeated ${enemy.name}! Your health is now ${playerInfo.health} and 
                you gained ${enemy.reward} experience points and ${enemy.bounty} from this battle.`)
                enemies.splice(enemies.indexOf(enemy.name), 1);
            } 
            if(playerInfo.health <= 0){
                console.log(`${enemy.name} defeated ${playerInfo.name} with ${enemy.strength}.`)
                console.log("GAME OVER, MAN. GAME OVER.")
            }
        }
    }
}