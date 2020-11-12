/*
    Game Variables--------------------------
*/

//    Variables for Money area's
var gMoney = {
    //Coins
    coins: 0,
    coinsPerClick: 1,
    coinsAuto: 10,
    
    //Souls
    souls: 0,
    soulsPerClick: 0,
    soulsAuto: 10
}

//    Variables for Hand area's
var gHand = {
    //hands
    hands: 0,
    handCost: 10,
    handclicks: 0,
    
    //free hand
    freeHand: 0,
    freeHandCost: 50,
    freeHandClicks: 0,
    
    //great hand
    greatHand: 0,
    greatHandCost: 100,
    greatHandClicks: 0,
    
    //consts
    hd: 0,
    fd: 0,
    const: 0
}

//    Variables for Soul area's
var gSoul = {
    //soul generator
    soulGen: 0,
    soulGenCost: 100,
    soulGenClicks: 0,
    
    //soul summoner
    soulSum: 0,
    soulSumCost: 100,
    soulSumClicks: 0
}

//    Variables for Fate area's
var gFate = {
    
}

var hd = 2 // clicks for Hands
var fh = 10 // clicks for Free Hands
var gh = 15 // clicks for Great Hands
var sg = 10 // clicks for Soul Gen
var ss = 15 // clicks for Soul Sum
var totalC = 0 // total coins per click
var totalCs = 0 // total coins per second
var totalS = 0 // total souls per click
var totalSs = 0 // total souls per second
var idC = "coinsG" // Id for coins
var idS = "soulsG" // Id for souls
var monIdC = " Coins" // name of money
var monIdS = " Souls" // name of money

/*
    Clicker--------------------------------
*/
//Grabs coins with hand
function grabCoin() {
    gMoney.coins += gMoney.coinsPerClick
    document.getElementById("coinsG").innerHTML = gMoney.coins + " Coins"
}

//Grab Soul with soul hand
function grabSoul() {
    if(gSoul.soulGen >= 1){
        gMoney.souls += gMoney.soulsPerClick
        document.getElementById("soulsG").innerHTML = gMoney.souls + " Souls"
    }
}

function autoGrabC(number) {
    gMoney.coins = gMoney.coins + number
    document.getElementById("coinsG").innerHTML = gMoney.coins + " Coins"
}

function autoGrabS(number) {
    gMoney.souls = gMoney.souls + number
    document.getElementById("soulsG").innerHTML = gMoney.souls + " Souls"
}

/*
    Items and Upgrades----------------------
*/

//------------- Hands --------------

//Buys a Hand adds extra coins per click (2c)
function buyHand() {
    if (gMoney.coins >= gHand.handCost) {
        gMoney.coins -= gHand.handCost
        gMoney.coinsPerClick += hd
        gHand.handCost *= 2
        gHand.hands += 1
        gHand.handclicks = gHand.handclicks + hd
        
        //Updates coin amount
        document.getElementById("coinsG").innerHTML = gMoney.coins + " Coins"
        
        //Updates amount of hands you have
        document.getElementById("hands").innerHTML = gHand.hands + " Hands (" + gHand.handclicks + "c)"
        
        //Updates the cost and level of hands
        document.getElementById("HandUpgrade").innerHTML = "Grow a hand |" + " Cost: " + gHand.handCost + " Coins"
        
        console.log("hands all around")
    }
}

//Buys a Hand adds extra coins per click (2c*hands)
function buyFreeHand() {
    if (gMoney.coins >= gHand.freeHandCost) {
        gMoney.coins -= gHand.freeHandCost
        gMoney.coinsPerClick += fh
        gHand.freeHandCost *= 2
        gHand.freeHand += 1
        gHand.freeHandClicks = gHand.freeHandClicks + fh
        
        //Updates coin amount
        document.getElementById("coinsG").innerHTML = gMoney.coins + " Coins"
        
        //Updates amount of free hands you have
        document.getElementById("freeHands").innerHTML = gHand.freeHand + " Free Hands (" + gHand.freeHandClicks + "c)"
        
        //Updates the cost and level of free hands
        document.getElementById("FreeHandUpgrade").innerHTML = "Free a hand |" + " Cost: " + gHand.freeHandCost + " Coins"
        
        console.log("take the hands of the people")
    }
}

//Steals a soul to from a hand !!!!!!!COSTS SOULS!!!!!!!
function buyGreatHand() {
    if (gMoney.souls >= gHand.greatHandCost) {
        gMoney.souls -= gHand.greatHandCost
        gMoney.coinsPerClick += gh
        gHand.greatHandCost *= 2
        gHand.greatHand += 1
        gHand.greatHandClicks = gHand.greatHandClicks + gh
        
        //Updates coin amount
        document.getElementById("soulsG").innerHTML = gMoney.souls + " Souls"
        
        //Updates amount of free hands you have
        document.getElementById("greatHands").innerHTML = gHand.greatHand + " Great Hands (" + gHand.greatHandClicks + "c)"
        
        //Updates the cost and level of free hands
        document.getElementById("GreatHandUpgrade").innerHTML = "Unleash a Great Hand |" + " Cost: " + gHand.greatHandCost + " souls"
        
        console.log("fetch me there hands!")
    }
}

//------------- Souls --------------

//Gives you souls!! !!!!!COSTS COINS!!!!!
function buySoulGen() {
    if (gMoney.coins >= gSoul.soulGenCost) {
        gMoney.coins -= gSoul.soulGenCost
        gMoney.soulsPerClick += sg
        gSoul.soulGenCost *= 2
        gSoul.soulGen += 1
        gSoul.soulGenClicks = gSoul.soulGenClicks + sg
        
        //Updates coin amount
        document.getElementById("coinsG").innerHTML = gMoney.coins + " Souls"
        
        //Updates amount of hands you have
        document.getElementById("soulGens").innerHTML = gSoul.soulGen + " Soul Generators (" + gSoul.soulGenClicks + "s)"
        
        //Updates the cost and level of hands
        document.getElementById("SoulGenUpgrade").innerHTML = "Soul Generator |" + " Cost: " + gSoul.soulGenCost + " Coins"
        
        console.log("souls a plenty")
    }
}

//Gives you souls Automaticly !! !!!!!COSTS Souls!!!!!
function buySoulSum() {
    if (gMoney.souls >= gSoul.soulSumCost) {
        gMoney.souls -= gSoul.soulSumCost
        gMoney.soulsPerClick += ss
        gSoul.soulSumCost *= 2
        gSoul.soulSum += 1
        gSoul.soulSumClicks = gSoul.soulSumClicks + ss
        
        //Updates coin amount
        document.getElementById("soulsG").innerHTML = gMoney.souls + " Souls"
        
        //Updates amount of hands you have
        document.getElementById("soulSums").innerHTML = gSoul.soulSum + " Soul Summoners (" + gSoul.soulSumClicks + "s)"
        
        //Updates the cost and level of hands
        document.getElementById("SoulSumUpgrade").innerHTML = "Soul Summoner |" + " Cost: " + gSoul.soulSumCost + " Souls"
        
        console.log("souls a plenty")
    }
}

/*
    Game loop etc.-----------------------------
*/
//Game Loop
var mainGameLoop = window.setInterval(function () {
    totalC = gHand.handclicks + gHand.freeHandClicks + 1
    totalS = gSoul.soulGenClicks 
    totalCs = gHand.greatHandClicks
    totalSs = gSoul.soulSumClicks
    
    document.getElementById("totalC").innerHTML = "Items | (" + totalC + " cpc)" + " | " + totalCs + " (cps)" + " | " + totalS + " (spc)" + " | " + totalSs + " (sps)"
    
    if(gHand.greatHand >= 1) {
        autoGrabC(gHand.greatHandClicks)
    }
    if(gSoul.soulSum >= 1) {
        autoGrabS(gSoul.soulSumClicks)
    }
    if(gSoul.soulGen >= 1) {
        document.getElementById("sButton").classList.remove('event');
    }
}, 1000)











