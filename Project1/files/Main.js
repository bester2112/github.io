
var Main = function() {
    
};

var game;

var ax;
var ay;
var az;

var mobile = false;

var scaleFactor = 1;

window.addEventListener('DOMContentLoaded', function(event) {
    game = new Phaser.Game($(window).width(), $(window).height(), Phaser.CANVAS, 'mygame');
    game.state.add('Main', Main);
    game.state.start('Main');
    
    if($(window).width() <= 1080) {
        scaleFactor = 1.77;
    }
});

window.ondevicemotion = function(event) { 
    ax = event.accelerationIncludingGravity.x;
    ay = event.accelerationIncludingGravity.y;
	az = event.accelerationIncludingGravity.z;
}


Main.prototype = {
    init:function() {
        game.input.maxPointers = 1;
        game.stage.disableVisibilityChange = true;
    },
    
    preload:function() {  
        game.load.script('preloader', 'files/Preloader.js');
        game.load.image('brand', 'assets/images/logo.jpg');
        game.load.image('background', 'assets/images/starfield.jpg');
        game.load.image('preloaderBar', 'assets/images/preloader.png');
    },
    
    create:function() {
        game.state.add('Preloader', Preloader);
            
        game.state.start('Preloader');
    }
};

//game.state.add('Main', Main);
//game.state.start('Main');
