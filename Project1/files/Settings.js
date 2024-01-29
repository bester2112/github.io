Settings = function(game) {
    
};

var button1Text;
var button2Text;
var first = true;
var myButton1;
var myButton2;
var temp;

Settings.prototype = {
    create:function(game) {
        game.add.tileSprite(0, 0, $(window).width(), $(window).height(), 'background');
        
        console.log("mainmenu:create:function");
        this.createButton(game,"Keyboard", game.world.centerX, game.world.centerY + 32, 300, 100, function() {            
            game.add.tween(titleText).to({ alpha: 0 }, 500, "Linear", true);
            game.add.tween(button1Text).to({ alpha: 0 }, 500, "Linear", true);
            var tween1 = game.add.tween(button2Text).to({ alpha: 0 }, 500, "Linear", true);
            tween1.onComplete.add(completeA, this);
            
            myButton1.inputEnabled = false;
            myButton2.inputEnabled = false;
            temp = "Keyboard";
            mobile = false;
        });
      
        this.createButton(game,"Mobile", game.world.centerX, game.world.centerY + 192, 300, 100, function() {
            game.add.tween(titleText).to({ alpha: 0 }, 500, "Linear", true);
            game.add.tween(button1Text).to({ alpha: 0 }, 500, "Linear", true);
            var tween1 = game.add.tween(button2Text).to({ alpha: 0 }, 500, "Linear", true);
            tween1.onComplete.add(completeA, this);

            myButton1.inputEnabled = false;
            myButton2.inputEnabled = false;
            temp = "Mobile";
            mobile = true;
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
        titleText = game.make.text(game.world.centerX, 100, "GameInput", titlestyle);
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
        
        if (first) {
            first = false;
            myButton1 = button1;
            button1Text = text;
        } else {
            myButton2 = button1;
            button2Text = text;
        }
    }
}

function complete() {
    first = true;

    game.state.start('MainMenu');
}

function completeA() {
    titleText.text = temp;
    button1Text.text = "was";
    button2Text.text = "selected";
    
    game.add.tween(titleText).to({ alpha: 1 }, 1000, "Linear", true);
    game.add.tween(button1Text).to({ alpha: 1 }, 1000, "Linear", true);
    var tween1 = game.add.tween(button2Text).to({ alpha: 1 }, 1000, "Linear", true);
    tween1.onComplete.add(complete, this);
}