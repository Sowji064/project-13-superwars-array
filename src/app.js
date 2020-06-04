const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    //let detailedPlayers = '';
    // Instead of forloop use Map method
    // Code here
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for (let i = 0; i < players.length; i++) {
        let typeGet = 'villain';
        if (i % 2 == 0) { // can you explain why you gave this condition da?if heroes are in the array it will return heroes else villains
            typeGet = "hero"
        }
        detailedPlayers.push({
            name: players[i],
            strength: getRandomStrength(),
            image: "images/super-" + (i + 1) + ".png",
            type: typeGet
        });
    }

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = [];

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    for (let i = 0; i < players.length; i++) {
        if (players[i].type == type) {
            fragment.push(`<div class="player">
            <img src="${players[i].image}" alt=" ">
            <div class="name">${players[i].name}</div>
            <div class="strength">${players[i].strength}</div>
         </div>`);
        }
    }
    return fragment.join("");
}
//calculate score
const calculateScore = (players) => {
    let heroScore = 0;
    let heroes = [];
    let villainScore = 0;
    let villains = [];
    for (let i = 0; i < players.length; i++) {
        if (players[i].type == 'hero') {
            heroes.push(players[i]);
        } else {
            villains.push(players[i]);
        }
    }
    for (let j = 0; j < heroes.length; j++) {
        if (heroes[j].strength > villains[j].strength) {
            heroScore += 1;
        } else if (heroes[j].strength < villains[j].strength) {
            villainScore += 1;
        }
    }

    return heroScore + '-' + villainScore;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
    document.getElementById('score').innerHTML = calculateScore(players);
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}