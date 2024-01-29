About = function(game) {
    
};

About.prototype = {
    create:function(game) {
        game.add.tileSprite(0, 0, $(window).width(), $(window).height(), 'background');

        console.log("mainmenu:create:function");
        this.createButton(game,"To Menu", game.world.centerX, game.world.centerY + 32, 300, 100, function() {
            game.state.start('MainMenu');
        });
      
        
        
        
        
        titlescreen = game.add.sprite(game.world.centerX, game.world.centerY - 192, 'titlescreen-s');
        titlescreen.anchor.setTo(0.5,0.5);
        
        titleText.x = titlescreen.x;
        titleText.y = titlescreen.y;
        game.add.existing(titleText);
    },
    
    update:function(game) {
    
    },
    
    init: function () {
        titleText = game.make.text(game.world.centerX, 100, "@Thomas", {
            font: 'bold 75pt SpaceFont',
            fill: '#FFF',
            align: 'center'
        });
        titleText.setShadow(3, 3, 'rgba(0,0,0,1)', 5);
        titleText.anchor.set(0.5);
    },
    
    createButton(game, string, x, y, w, h, callback) {
        var button1 = game.add.button(x, y, 'button-s', callback, game, 2, 1, 0);
        button1.anchor.setTo(0.5, 0.5);
        button1.width = w;
        button1.height = h;
        
        var text = game.add.text(button1.x, button1.y, string, {font:"35px Roboto", fill:"#fff", allign:"center"});
        text.setShadow(3, 3, 'rgba(0,0,0,1)', 5);
        text.anchor.setTo(0.5, 0.5);
    }

}