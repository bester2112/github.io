// enemy Hit the player with a bullet
function enemyHitPlayer (player,bullet) {
        
    bullet.kill();
    live = lives.getFirstAlive();
        
    if (live) {
        live.kill();
    }
        
    // TODO explusion 
    //  And create an explosion :)
    //var explosion = explosions.getFirstExists(false);
    //explosion.reset(player.body.x, player.body.y);
    //explosion.play('kaboom', 30, false, true);
    if (lives.countLiving() < 1) {
        player.kill();
        enemyBullets.callAll('kill');
        bullets.callAll('kill');
            
        //winText.text = "U won!";
        //winText.visible = true;
    }
}

// enemy crashed into player
function enemyBouncedPlayer (player, enemy) {
    text = "player crahed at X: " + player.x + " Y : " + player.y + " ENEMY NAME " + enemy.name;
    for(var i = 0; i < 10; i++)  {
        live = lives.getFirstAlive();

        if (live) {
            live.kill();
        }
    }
        
    if (lives.countLiving() < 1) {
        player.kill();
        enemy.kill();
        enemyBullets.callAll('kill');
        bullets.callAll('kill');
            
        //winText.text = "U are crashed... !";
        //winText.visible = true;   
    }
}

// player hit the enemy with a bullet
function playerHitEnemy (bullet, enemy) {
    bullet.kill();
    enemies.remove(enemy);
    enemy.kill();
        
    text = enemy.name;
        
    //this.calculateRestEnemies();

    score += 100;
        
    if (enemies.countLiving() == 0 ) {
        winText.visible = true;
        scoreText.visible = false;
        lvlUp();
    }
}

// enemy is under the Player
function enemyUnderPlayer () {
    text = "player crahed at X: " + player.x + " Y : " + player.y;
    for(var i = 0; i < 10; i++)  {
        live = lives.getFirstAlive();
        if (live) {
            live.kill();
        }
    }
        
    if (lives.countLiving() < 1) {
        player.kill();
        enemyBullets.callAll('kill');
        bullets.callAll('kill');
            
        //winText.text = "Enemies Survived... U lost !";
        //winText.visible = true;
            
    }
}