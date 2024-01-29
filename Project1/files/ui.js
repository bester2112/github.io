function pauseGone() {
    console.log("pauseGone wurde aufgerufen");
    enemies.y += 10;
    
    continueButton.destroy();
    menuButton.destroy();
    titlescreen.destroy();
    continueText.destroy();
    menuText.destroy();
    titlescreenText.destroy();
    winText.visible = false;
}

function createRestart () {
    level = 1;
    score = 0;
    customPlayerSpeed = 200;// default 350
    customDistance = 10;    // default 10
    customEnemyFireTime = 2000; // default 1000
    customFireRate = 500; // default 200
    customPlayerFireSpeed = 400; // default 400
    pauseButton.destroy();
            
    continueButton = game.add.button($(window).width()/2 , $(window).height() / 2 + 32, 'button-s', function() {
        console.log("continue button wurde jetzt GEDRÜCKT");
        pauseGone();
        game.state.start('Level1');
    });
    continueButton.width = 300;
    continueButton.height = 100;
    continueButton.anchor.setTo(0.5, 0.5);
    console.log("continue button wurde jetzt erzeugt");
            
    continueText = game.add.text(continueButton.x, continueButton.y, "Restart", {font:"35px Roboto", fill:"#fff", allign:"center"});
    continueText.setShadow(3, 3, 'rgba(0,0,0,1)', 5);
    continueText.anchor.setTo(0.5, 0.5);
                        
    menuButton = game.add.button($(window).width()/2, $(window).height() / 2 + 192, 'button-s', function() {
        pauseGone();
        game.state.start('MainMenu');
    });
            
    menuButton.width = 300;
    menuButton.height = 100;
    menuButton.anchor.setTo(0.5, 0.5);
            
    menuText = game.add.text(menuButton.x, menuButton.y, "To Menu", {font:"35px Roboto", fill:"#fff", allign:"center"});
    menuText.setShadow(3, 3, 'rgba(0,0,0,1)', 5);
    menuText.anchor.setTo(0.5, 0.5);
        
    titlescreen = game.add.sprite(game.world.centerX, game.world.centerY - 192, 'titlescreen-s');
    titlescreen.anchor.setTo(0.5,0.5);
            
    titlescreenText = game.add.text(titlescreen.x, titlescreen.y, "Lost :(", {
        font: 'bold 75pt Roboto',
        fill: '#FFF',
        align: 'center'
    });
    titlescreenText.setShadow(3, 3, 'rgba(0,0,0,1)', 5);
    titlescreenText.anchor.set(0.5);        
       
}
    
function createPauseButton () {
    pauseButton = game.add.button(10 , 10 , 'buttons', function(){ //onclick
    //pauseButton = game.add.button($(window).width()- 151, $(window).height() - 151, 'buttons', function(){ //onclick Function
        console.log('pause');
        game.paused = true;
        pauseButton.destroy();
            
        console.log("button wird jetzt erstellt");
        continueButton = game.add.button($(window).width()/2 , $(window).height() / 2 + 32, 'button-s', function() {
            console.log("continue button wurde jetzt GEDRÜCKT");
            game.paused = false;                
            //pauseGone();
            //pauseIsGone = true; // and create pause button again
        });
        continueButton.width = 300;
        continueButton.height = 100;
        continueButton.anchor.setTo(0.5, 0.5);
        console.log("continue button wurde jetzt erzeugt");
            
        continueText = game.add.text(continueButton.x, continueButton.y, "Continue", {font:"35px Roboto", fill:"#fff", allign:"center"});
        continueText.setShadow(3, 3, 'rgba(0,0,0,1)', 5);
        continueText.anchor.setTo(0.5, 0.5);
                        
        menuButton = game.add.button($(window).width()/2, $(window).height() / 2 + 192, 'button-s', function() {
            //pauseGone();
            //game.state.start('MainMenu');
        });
            
        menuButton.width = 300;
        menuButton.height = 100;
        menuButton.anchor.setTo(0.5, 0.5);
            
        menuText = game.add.text(menuButton.x, menuButton.y, "To Menu", {font:"35px Roboto", fill:"#fff", allign:"center"});
        menuText.setShadow(3, 3, 'rgba(0,0,0,1)', 5);
        menuText.anchor.setTo(0.5, 0.5);
                        
        titlescreen = game.add.sprite(game.world.centerX, game.world.centerY - 192, 'titlescreen-s');
        titlescreen.anchor.setTo(0.5,0.5);
            
        titlescreenText = game.add.text(titlescreen.x, titlescreen.y, "Pause", titlestyle);
        titlescreenText.setShadow(3, 3, 'rgba(0,0,0,1)', 5);
        titlescreenText.anchor.set(0.5);            
            
    }, game,2,1,0); // frame position (2,1,0) of the spritesheet
    
    pauseButton.fixedToCamera = true;
}