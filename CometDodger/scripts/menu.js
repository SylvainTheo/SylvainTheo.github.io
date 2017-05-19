var menu = {
    preload: function() {
        game.load.image('fond', 'assets/fond.png');
        game.load.image('start1', 'assets/lvl1.png');
        game.load.image('start2', 'assets/lvl2.png');
        game.load.image('titre', 'assets/titre.png');
        game.load.image('options', 'assets/options.png');

        game.load.audio('musiqueMenu', ['sounds/menutheme.ogg']);

    },
    create: function() {
        monFond= game.add.sprite(0, 0, 'fond');
        monFond.width=largeur;
        monFond.height=hauteur;

        music = game.add.audio('musiqueMenu');
        music.loop = true;
        music.play();

        tailleXTitre= largeur*(40/100);
        tailleYTitre = hauteur*(30/100);
        titre = game.add.sprite(game.world.centerX - tailleXTitre*0.5, game.world.centerY-tailleYTitre, 'titre');
        titre.width=tailleXTitre;
        titre.height=tailleYTitre;

        tailleXStart2= largeur*(20/100);
        tailleYStart2 = hauteur*(20/100);
        start2 = game.add.button(game.world.centerX - tailleXStart2*1.5, hauteur*(3/4)-tailleYStart2/2, 'start1', function() {
            music.stop();
            game.state.start('dodger');
        });
        start2.width=tailleXStart2;
        start2.height=tailleYStart2;


        tailleXStart= largeur*(20/100);
        tailleYStart = hauteur*(20/100);
        start = game.add.button(game.world.centerX + tailleXStart*0.5, hauteur*(3/4)-tailleYStart/2, 'start2', function() {
            music.stop();
            game.state.start('dodger2');
        });
        start.width=tailleXStart;
        start.height=tailleYStart;

        tailleXOptions= largeur*(10/100);
        tailleYOptions = hauteur*(10/100);
        options = game.add.button(game.world.centerX - tailleXOptions/2, hauteur*(3/4)-tailleYOptions/2, 'options', function(){
            game.state.start('options')
        });
        options.width=tailleXOptions;
        options.height=tailleYOptions;
    },
    update: function() {
    },
};