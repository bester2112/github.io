var Preloader = function () {};

var button;
var preloaderBar;

Preloader.prototype = {

    loadScripts:function() {
        game.load.script('WebFont', 'libs/webfontloader.js');
        game.load.script('MainMenu', 'files/MainMenu.js');
        game.load.script('Settings', 'files/Settings.js');
        game.load.script('Level1', 'files/Level1.js');
        //game.load.script('About', 'files/About.js');
        game.load.script('Player', 'files/player.js');
        game.load.script('Enemy', 'files/enemy.js');
        game.load.script('Collisions', 'files/collisions.js');
        game.load.script('Lvl', 'files/lvl.js');
        game.load.script('UI', 'files/ui.js');
    },
    
    loadImages:function() {
        preloaderBar = game.cache.getImage('preloaderBar');
        game.load.image('starfield', "assets/images/starfield.jpg");
   	    game.load.image('player', "assets/images/player.png");
   	    game.load.image('bullet', "assets/images/bullet.png");
   	    game.load.image('bullet-green', "assets/images/bullet-green.png");
   	    game.load.image('bullet-blue', "assets/images/bullet-blue.png");
   	    game.load.image('enemy', "assets/images/enemy-2.png");
        
        //Pause buttons
        game.load.spritesheet('buttons','assets/images/buttons-pause.png',101,101);
        
        //titlescreen
        game.load.image('titlescreen', 'assets/images/titlescreen.png');
        game.load.image('titlescreen-s', 'assets/images/titlescreen-s.png');
        
        //Menu Button
        button = game.load.image('button', 'assets/images/button.png');
        game.load.image('button-s', 'assets/images/button-s.png');
    },

    loadFonts: function () {
        WebFontConfig = {
            custom: {
                families: ['Roboto'],
                urls: ['assets/style/robotoblack.css']
            }
        }
    },
    
    init: function () {
        
        //console.log(preloaderBar.width/2); // TODO zuerst muss ich windows onload implementieren damit das geht 
        this.loadingBar = game.make.sprite($(window).width()/2 - game.cache.getImage('preloaderBar').width / 2, $(window).height()/2 , "preloaderBar");
        //this.loadFonts.scale.setTo(0.5, 0.5);
        //this.loadingBar = game.make.sprite(game.world.centerX-(387/2), 400, "preloaderBar");
      
        this.logo       = game.make.sprite($(window).width()/2, $(window).height()/4  - game.cache.getImage('brand').height / 4, 'brand');
        this.logo.scale.setTo(scaleFactor, scaleFactor);
        this.logo.anchor.setTo(0.5);

        this.status     = game.make.text($(window).width()/2,  3*$(window).height()/8, 'Loading...', {font:"50px Roboto", fill:"#fff", allign:"center"});
        this.status.setShadow(3, 3, 'rgba(0,0,0,1)', 5);
        this.status.scale.setTo(scaleFactor, scaleFactor);
        this.status.anchor.setTo(0.5, 0.5);

        //utils.centerGameObjects([this.logo, this.status]);
    },

  preload: function () {
  	/*spacefield = */
    game.add.tileSprite(0, 0, $(window).width(), $(window).height(), 'background');

    game.add.existing(this.logo).scale.setTo(0.5);
    game.add.existing(this.loadingBar);
    game.add.existing(this.status);
    this.load.setPreloadSprite(this.loadingBar);

    this.loadScripts();
    this.loadImages();
    this.loadFonts();
  },

  addGameStates:function() {
      game.state.add('MainMenu', MainMenu);
      game.state.add('Level1', Level1);
      game.state.add('Settings', Settings);
      //game.state.add('About', About);
  },
    
  create: function() {
    this.status.setText('One Moment pleas');
    this.addGameStates();

    setTimeout(function () {
      game.state.start("Settings");
    },  1);// time to wait 1 ms
  }
};
