function createEnemies () {
    for (var y = 0; y < 4; y++) {
        for (var x = 0; x < 10; x++) {
            var enemy = enemies.create(x*48, y*50 * scaleFactor, 'enemy'); // zwischen jeden Gegner sind 48 pixel
            enemy.name = x;
            enemy.anchor.setTo(0.5,0.5);
            enemy.scale.setTo(1,scaleFactor);
        } 
    }

    enemies.x = 50;
    enemies.y = 20;
    //enemies.scale.set(1,scaleFactor);
    checkTween();
        
    enemiesY = enemies.y + customDistance;
    tweens = game.add.tween(enemies).to({x:$(window).width() - disR, y: enemiesY}, 2000, "Linear", true, 0);

    //tweens.onStart.add(this.started, this);
    tweens.onComplete.add(completedLeft, this);

    //tween.onLoop.add(this.descend, this);
    //this.descend();
}

// one random selected enemie is fire bullets on the player
function enemyFires () {
    enemyBullet = enemyBullets.getFirstExists(false);   // Grab the first bullet 
        
    livingEnemies.length = 0;
        
    enemies.forEachAlive(function(enemy){
        // put every living enemy in an array
        livingEnemies.push(enemy);
    });
        
    if (enemyBullet && livingEnemies.length > 0) { // select an random enemy that shoots the bullet to the enemy
        var rand = game.rnd.integerInRange(0, livingEnemies.length - 1);
        var shoot = livingEnemies[rand];
        enemyBullet.reset(shoot.body.x, shoot.body.y);
        game.physics.arcade.moveToObject(enemyBullet, player, 120);
        fireTime = game.time.now + customEnemyFireTime;
    }
}

function checkTween () {
    calculateRestEnemies();
    calculateDistanceRight();
    calculateDistanceLeft();
}

function completedRight () {
    text = "tween Right complete";
    wasLeft = false;
    wasRight = true;
    console.log("enemies rechts");
    enemiesY = enemies.y + customDistance;
    tweens = game.add.tween(enemies).to({x:$(window).width() - disR, y: enemiesY}, 2000, "Linear", true, 0);
    tweens.onComplete.add(completedLeft, this);
}
    
function completedLeft () {
    text = "tween Left complete";
    console.log("enemies links und windows.width = ");
    console.log($(window).width());
    console.log("windows.height = ");
    console.log($(window).height());
        
    enemiesY = enemies.y + customDistance;
    tweens = game.add.tween(enemies).to({x:disL , y: enemiesY}, 2000, "Linear", true, 0);
    tweens.onComplete.add(completedRight, this);
}
    
function calculateDistanceRight () {
    res = true;
    disR = 480; 
        
    for (var i = 9; i >= 0; i--) {
        if (columnEnemy[i] == 0 && res) {
            res = true;
            disR -= 48; 
        } else {
            res = false;
        }   
    }
}
    
function calculateDistanceLeft () {
    res = true;
    disL = 50; 
        
    for (var i = 0; i < 10; i++) {
        if (columnEnemy[i] == 0 && res) {
            res = true;
            disL -= 48; 
        } else {
            res = false;
        }   
    }
}

function calculateRestEnemies() {
    // callculates if the column is away. 
    for (var i = 0; i < 10; i++) {
        columnEnemy[i] = 0;
    }
        
    for (var i = 0, len = enemies.children.length; i < len; i++)  {
        if (enemies.children[i].alive) { 
            switch (enemies.children[i].name) {
                case 0: 
                    columnEnemy[0] = 1;
                break;
                case 1: 
                    columnEnemy[1] = 1;
                break;
                case 2: 
                    columnEnemy[2] = 1;
                break;
                case 3: 
                    columnEnemy[3] = 1;
                break;
                case 4: 
                    columnEnemy[4] = 1;
                break;
                case 5: 
                    columnEnemy[5] = 1;
                break;
                case 6: 
                    columnEnemy[6] = 1;
                break;
                case 7: 
                    columnEnemy[7] = 1;
                break;
                case 8: 
                    columnEnemy[8] = 1;
                break;
                case 9: 
                    columnEnemy[9] = 1;
                break;
                default:
                    console.log("!!ERROR!!");
                break;
            }
        }
    }
}