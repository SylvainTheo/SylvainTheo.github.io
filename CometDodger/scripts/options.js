var options = {
    preload: function() {
        game.load.image('normal', 'assets/modeNormal.png');
        game.load.image('troll', 'assets/modeTroll.png');
        game.load.image('option', 'assets/optionMenu.png');

        game.load.audio('musiqueMenu', ['sounds/menutheme.ogg']);

    },
    create: function() {
        monFond= game.add.sprite(0, 0, 'fond');
        monFond.width=largeur;
        monFond.height=hauteur;

        tailleXTitre= largeur*(30/100);
        tailleYTitre = hauteur*(18/100);
        titre = game.add.sprite(game.world.centerX - tailleXTitre*0.5, game.world.centerY-tailleYTitre, 'option');
        titre.width=tailleXTitre;
        titre.height=tailleYTitre;

        tailleXOption1= largeur*(20/100);
        tailleYOption1 = hauteur*(20/100);
        option1 = game.add.button(game.world.centerX - tailleXOption1*1.5, hauteur*(3/4)-tailleYOption1/2, 'normal', function() {
            music.stop();
            trollOnOff = 0;
            game.state.start('menu');
        });
        option1.width=tailleXOption1;
        option1.height=tailleYOption1;

        tailleXOption2= largeur*(20/100);
        tailleYOption2 = hauteur*(20/100);
        option2 = game.add.button(game.world.centerX + tailleXOption2/2, hauteur*(3/4)-tailleYOption2/2, 'troll', function() {
            music.stop();
            trollOnOff = 1;
            game.state.start('menu');
        });
        option2.width=tailleXOption2;
        option2.height=tailleYOption2;
    },
    update: function() {
    },
};