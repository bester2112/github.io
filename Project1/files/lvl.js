function initParam() {  // initialisating Parameter
    backgroundv = 5;    // speed to move the background
    bulletTime = 0;     // initialisate the bullet time 
    score = 0;          // initialisate the score
    pauseIsGone = false;
    text = '';
    columnEnemy = [1,1,1,1,1,1,1,1,1,1];
    looseAnimation = false;
    loadLvlData();
};

function lvlUp () { // store data for next session
    tempScore = score;
    spaceF = spacefield.tilePosition.y;
        
    playerStartXPos = player.x;
    playerStartYPos = player.y;        
    level++;
        
    winText.text = "Level " + level;
    winText.alpha = 0;

    game.add.tween(winText).to( { alpha: 1 }, 3000, "Linear", true);

    text = winText.text;
        
    lvlTextTime = game.time.now + 3000; 
    nextLVL = true;
}

function loadLvlData() {
    console.log("war hier");
    if (level != 1)
        score = tempScore;
        
    // load the Level Data
    switch(level) {
        case 1:
            
        break;   
        case 2:
            console.log("Lvl 2 erreicht ");
            customDistance = 30;// y + distance from the enemies 
            customEnemyFireTime = 1000; // the firetime from the enemy in ms
            customPlayerSpeed = 250; // movementspeed from the player 
            customFireRate = 400;   // the time that the player can fire in ms
            customPlayerFireSpeed = 300; // the spawn time of the bullets from the player
        break;
        case 3:
            console.log("Lvl 3 erreicht ");
            customDistance = 50;// y + distance from the enemies 
            customEnemyFireTime = 500; // the firetime from the enemy
            customPlayerSpeed = 350; // movementspeed from the player
            customFireRate = 300;   // the time that the player can fire in ms
            customPlayerFireSpeed = 250; // the spawn time of the bullets from the player
        break;
        case 4:
            console.log("Lvl 4 erreicht ");
            customDistance = 70;// y + distance from the enemies 
            customEnemyFireTime = 300; // the firetime from the enemy
            customPlayerSpeed = 450; // movementspeed from the player
            customFireRate = 200;   // the time that the player can fire in ms
            customPlayerFireSpeed = 200; // the spawn time of the bullets from the player
        break;
        default: 
            console.log("Lvl X erreicht ");
            customDistance = 100;// y + distance from the enemies 
            customEnemyFireTime = 300; // the firetime from the enemy
            customPlayerSpeed = 450; // movementspeed from the player
            customFireRate = 200;   // the time that the player can fire in ms
            customPlayerFireSpeed = 200; // the spawn time of the bullets from the player
        break;
    }
}