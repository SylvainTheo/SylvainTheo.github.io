var over = {
    preload: function() {
        game.load.image('fond', 'assets/fond.png');
        game.load.image('menu', 'assets/menu.png');
        game.load.image('start', 'assets/restart.png');
        game.load.image('over', 'assets/GameOver.png');

        if(trollOnOff == 0){
            game.load.audio('musiqueOver', ['sounds/youdied.mp3']);
        }
        else if (trollOnOff == 1){
            game.load.audio('musiqueOver', ['sounds/mario.mp3']);
        }
    },
    create: function() {
        monFond= game.add.sprite(0, 0, 'fond');
        monFond.width=largeur;
        monFond.height=hauteur;

        music = game.add.audio('musiqueOver');
        music.play();

        this.labelScore = game.add.text(20, 20, "Votre score est de : "+ score +" point(s) !", {font: hauteur/20+"px Arial", fill: "#fff"});

        tailleXMenu= largeur*(20/100);
        tailleYMenu = hauteur*(15/100);
        boutonMenu = game.add.button(game.world.centerX - tailleXMenu/2, hauteur*(25/100)-tailleYMenu/2, 'menu', function() {
        game.state.start('menu');
        });
        boutonMenu.width=tailleXMenu;
        boutonMenu.height=tailleYMenu;

        tailleXStart= largeur*(20/100);
        tailleYStart = hauteur*(15/100);
        start = game.add.button(game.world.centerX - tailleXStart/2, hauteur*(75/100)-tailleYStart/2, 'start', function() {
        if(lvl == 1){
            game.state.start('dodger');
        }
        else if (lvl == 2){
            game.state.start('dodger2');
        }
        });
        start.width=tailleXStart;
        start.height=tailleYStart;

        tailleXOver= largeur*(60/100);
        tailleYOver = hauteur*(20/100);
        died = game.add.sprite(game.world.centerX - tailleXOver/2, game.world.centerY-tailleYOver/2, 'over');
        died.width=tailleXOver;
        died.height=tailleYOver;
    },
    update: function() {
    },
};