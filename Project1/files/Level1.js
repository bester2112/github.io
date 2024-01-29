Level1 = function (game) {};

var pauseButton; // pause Button
var spacefield;  // background
var backgroundv; // background speed
var player;      // the player

var cursor;
var touch;

var bullets;    // player bullets
var bulletTime; // the time that the bullets came from the player
var fireTime = 0;   // the time that the bullets came from the enemy
var lvlTextTime = 0; // time that the text is shown in up
//var enemyBullets; // TODO das kann anscheinend auskommentiert werden
var enemyBullet;
var fireButton;

var enemies;

var score;
var scoreText;
var winText;

var titlescreen;
//var titlescreenText;
var continueButton;
var menuButton;
var menuText;
var continueText;

var pauseIsGone;

var tweens;
var live; 
var text;
var level = 1;

var columnEnemy;//spalte 
var disR = 480;     // distance Right
var disL = 0;       // distance Left
var enemiesY = 0;   // enemies Y heigth at the moment
var livingEnemies = [];

var looseAnimation;
var playerStartXPos = $(window).width() / 2; // for the first time startposition should be written here, because later it could not be changed.
var playerStartYPos = 5 * $(window).height() / 6;

var customPlayerSpeed = 200;    // default  350
var customDistance = 10;        // default   10
var customEnemyFireTime = 2000; // default 1000
var customFireRate = 550;       // default  200
var customPlayerFireSpeed = 500;// default  400

var tempScore = 0;  // oldScore
var spaceF = 0; // spacefield tilefield Y koordinate
var nextLVL = false;

//var textDisplayTime = 1000;

Level1.prototype = {
    
    create:function () {
        console.log('create');
        initParam(); // initialisate parameter for the game
        
        // setting up the spacefield
    	spacefield = game.add.tileSprite(0, 0, $(window).width(), $(window).height(), 'starfield');
        spacefield.tilePosition.y = spaceF;
        spacefield.scale.setTo(1, scaleFactor);

        // setting up the physic for the player
        player = game.add.sprite(playerStartXPos, playerStartYPos, 'player');
        player.anchor.setTo(0.5, 0.5);
        game.physics.enable(player, Phaser.Physics.ARCADE);
        player.scale.setTo(1, scaleFactor);
        
        // player lives 
        lives = game.add.group();
        var liveText = game.add.text(game.world.width - 100, 10, 'lives : ', {font : '34px Roboto', fill:'#fff'});
        //liveText.scale.setTo(scaleFactor, scaleFactor);
        //lives.add(liveText);
        
        for (var i = 0; i < 3; i++) 
        {
            var ship = lives.create(game.world.width - 100 + (30 * i), 60, 'player', 0);
            ship.anchor.setTo(0.5, 0.5);
            ship.angle = 90;
            ship.alpha = 0.4;
        }
        //lives.scale.setTo(1.25, 1.25);
        
 		// setting up the bullets for the player
 		bullets = game.add.group();
 		bullets.enableBody = true; 
 		bullets.physicsBodyType = Phaser.Physics.ARCADE;
 		bullets.createMultiple(30, 'bullet-green');
 		bullets.setAll('anchor.x', 0.5);
 		bullets.setAll('anchor.y', 1); 
 		bullets.setAll('outOfBoundsKill', true); 
 		bullets.setAll('checkWorldBounds', true);
        //bullets.scale.set(2, 2);
        
        // setting up the bullets from the enemy
        enemyBullets = game.add.group();
        enemyBullets.enableBody = true;
        enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
        enemyBullets.createMultiple(30, 'bullet'); // TODO enemyBullet hinzufügen
        enemyBullets.setAll('anchor.x', 0.5);
        enemyBullets.setAll('anchor.y', 0.5);
        enemyBullets.setAll('outOfBoundsKill', true);
        enemyBullets.setAll('checkWorldBounds', true);

        // input to move the player on PC
 		cursor = game.input.keyboard.createCursorKeys();
        touch = game.input.pointer1;
        
        // firebutton = Spacebar
 		fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR); 

 		// setting up the enemies
 		enemies = game.add.group();
		enemies.enableBody = true; 
 		enemies.physicsBodyType = Phaser.Physics.ARCADE;
        
        createEnemies();

        scoreText = game.add.text($(window).width() - 300,$(window).height() - 75,'Score: ', {font: '32px Roboto', fill: '#fff'});
        winText = game.add.text($(window).width()/ 2 - 75, $(window).height() / 2 - 75, '', {font: '50px Roboto', fill: '#fff'});
        winText.visible = false;
        
        createPauseButton();  
        
        this.input.onDown.add(unpause, this);
        
        function unpause(event){
            if (game.paused) {
                if (continueButton.getBounds().contains(this.game.input.x, this.game.input.y)) {
                    console.log("continue Button wurde mittels unpause event gedrückt");
                    this.game.paused = false;
                    pauseIsGone = true; // and create pause button again
                    pauseGone();
                    console.log("continue Button wurde mittels unpause event gedrückt");
                }
                if (menuButton.getBounds().contains(this.game.input.x, this.game.input.y)) {
                    this.game.paused = false;        
                    pauseGone();
                    game.state.start('MainMenu');
                }
            }
        };
    },
    
    update:function () {
        spacefield.tilePosition.y += backgroundv;

        if (player.alive) {
            game.physics.arcade.overlap(bullets, enemies, playerHitEnemy, null, this); 
            game.physics.arcade.overlap(enemyBullets, player, enemyHitPlayer, null, this); 
            for (var i = 0, len = enemies.children.length; i < len; i++) 
            { 
                game.physics.arcade.overlap(player, enemies.children[i], enemyBouncedPlayer, null, this); 

                if (enemies.y + enemies.children[i].y > player.y) {
                    enemyUnderPlayer();
                }
            }

            player.body.velocity.x = 0;

            if (cursor.left.isDown && !mobile) {
                if (player.x > 50) {
                    player.body.velocity.x = -customPlayerSpeed;
                }
            }

            if (cursor.right.isDown && !mobile) {
                if (player.x < $(window).width() - 50) {
                    player.body.velocity.x = customPlayerSpeed;
                }
            }
            
            if (ax != null && mobile) {
                if (player.x < $(window).width() - 50) {
                    if (ax > 0.5) {
                        player.body.velocity.x = customPlayerSpeed;
                    } 
                }
                
                if (ax < 0.5 && ax > -0.5) {
                    player.body.velocity.x = 0;
                } 

                if (player.x > 50) {
                    if (ax < -0.5){
                        player.body.velocity.x = -customPlayerSpeed;
                    }
                }
            }

            if (fireButton.isDown || touch.isDown) {
                fireBullet();
            }

            if (game.time.now > fireTime) {
                enemyFires();
            }
            
            if (game.time.now > lvlTextTime && nextLVL) {
                nextLVL = false;
                game.state.start('Level1');
            }

            scoreText.text = 'Score: ' + score;

            if (pauseIsGone) {
                pauseIsGone = false;
                createPauseButton();
            }

           /*for (var i = 0, len = enemies.children.length; i < len; i++) 
           {  
               console.log(enemies.children[i]);     
               console.log(enemies.children[i].alive);     
           }*/

            checkTween();
        } else {
            if (!looseAnimation) {
                looseAnimation = true;
                tweens = game.add.tween(enemies).to({x:enemies.x, y: enemies.y + $(window).height() + 2000}, 2000, Phaser.Easing.Linear.None, true);
                enemiesY = enemies.y + $(window).height() + 3000;
                
                createRestart();
            } 
            if (enemies.y >= enemiesY - 1000) {
                //looseAnimation = false;
                text = "Enemies Y : "  + enemies.y;

                enemies.callAll('kill');
                enemies.destroy();
                game.tweens.removeAll();
            }
        }
    }, 
    
    render:function() {
        /*if (text === '') {
            game.debug.text("Kill enemies", 32, 32);
        }
        else {
            game.debug.text("You Killed " + text, 32, 32);
        }
        
        //game.debug.body(player);
        //game.debug.body(enemies);
        
        for (var i = 0, len = enemies.children.length; i < len; i++) 
        {  
            //game.debug.body(enemies.children[i]);    
        }
        
        //game.debug.pointer(game.input.pointer1);
        */
    },
};

// Listen for orientation changes
window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
    if(window.innerWidth > window.innerHeight){
        alert("Not Possible to play the game in Landscape!, change to Portait Mode");
    }
}, false);