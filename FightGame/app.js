

let xp=0;
let health=100;
let gold=50;
let currentWeapon=0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1= document.querySelector("#button1");
const button2= document.querySelector("#button2");
const button3= document.querySelector("#button3");
const text= document.querySelector("#text");
const xpText= document.querySelector("#xpText");
const healthText= document.querySelector("#healthText");
const goldText= document.querySelector("#goldText");
const monsterStats= document.querySelector("#monsterStats");
const monsterNameText= document.querySelector("#monsterName");
const monsterHealthText= document.querySelector("#monsterHealth");


const weapons=[
    {
        name:"stick",
        damage:5
    },
    {
        name:"dagger",
        damage:30
    },
    {
        name:"claw hammer",
        damage:50
    },
    {
        name:"sword",
        damage:100
    }
];

const locations=[
    { 
        name:"town square",
        "button text":["Go to store","Go to cave","Fight the dragon"],
        "button functions":[goStore, goCave, fightDragon],
        text:"You are in the town square.You should see a sign that says \"store\""

    },
    {
        name:"store",
        "button text":["Buy 10 health (10 gold)","Buy weapon (30 gold)","Go to town square"],
        "button functions":[buyHealth, buyWeapon, goTown],
        text:"Welcome to the store! What would you like to buy?"
    },
    {
        name:"cave",
        "button text":["Fight slime","Fight fanged beast","Go to town square"],
        "button functions":[fightSlime, fightbeast, goTown],
        text:"You enter the cave. You see some monsters."
    },
  
];

button1.onClick= goStore;
button2.onClick= goCave;
button3.onClick= fightDragon;



function update(location){
    button1.innerText=location["button text"][0];
    button2.innerText=location["button text"][1];
    button3.innerText=location["button text"][2];
    button1.onClick= location["button functions"][0];
    button2.onClick= location["button functions"][1];
    button3.onClick= location["button functions"][2];

    text.innerText=location.text;
}

function goTown(){
  update(locations[0]);
}

function goStore(){
    update(locations[1]);
  
}

function goCave(){
  update(locations[2]);
   
}

function fightDragon(){
  update(locations[2]);
   
}

function buyHealth(){ 
    if(gold>=10){
        gold-=10;
        health+=10;
        goldText.innerText= gold;
        healthText.innerText= health;
    }else{
        text.innerText="You don't have enough gold!";
    }
}

function buyWeapon(){ 
    if(currentWeapon<weapons.length-1){
        if(gold>=30){
            gold-=30;
            currentWeapon++;
            goldText.innerText= gold;
            let weapon=weapons[currentWeapon].name;
            text.innerText="You bought a "+weapon.name;
            inventory.push(weapon);
            text.innerText="In your inventory you have: "+ inventory;
        }else{
            text.innerText="You don't have enough gold to buy a weapon!";
        }
    }else{
      text.innerText="You already have the best weapon!";
      button2.innerText="Sell weapon for 15 gold";
      button2.onClick= sellWeapon;
    }    
}
 
function sellWeapon(){
    if(inventory.length==0){
        gold+=15;
        goldText.innerText= gold;
    
      
    }
   
 
}



function fightSlime(){ 
     
}
function fightbeast(){ 
     
}