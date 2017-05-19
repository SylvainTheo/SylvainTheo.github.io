var dodger2 = {
    preload: function() {
        //Chargement image
        if(trollOnOff == 0){
            game.load.image('fond', 'assets/espace.jpg');
            game.load.image('player', 'assets/Stiphyx.png');
            game.load.image('asteroide', 'assets/asteroide.png');

            game.load.audio('musiqueJeu', ['sounds/jeutheme.ogg']);
        }
        else if (trollOnOff == 1){
            game.load.image('fond', 'assets/adibou.jpg');
            game.load.image('player', 'assets/kappapride.png');
            game.load.image('asteroide', 'assets/nyancat.png');

            game.load.audio('musiqueJeu', ['sounds/nyan.mp3']);
        }
    },
    create: function() {
        //setup + affichage

        lvl = 2;

        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        this.monFond = game.add.sprite(0, 0, 'fond');
        this.monFond.width=largeur;
        this.monFond.height=hauteur;

        music = game.add.audio('musiqueJeu');
        music.loop = true;
        music.play();

        this.player = game.add.sprite(game.world.centerX-30, game.world.centerY-30, 'player');
        this.player.anchor.set(0.5,0.5);
        this.player.width=50;
        this.player.height=50;
        game.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;
        
        upKey = game.input.keyboard.addKey(Phaser.Keyboard.Z);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
        
        this.asteroides = game.add.group();
        
        this.createAsteroide = game.time.events.loop(2000, this.ajouterUnasteroide, this);
        
        score = 0;
        this.labelScore = game.add.text(20, 20, "0", {font: "30px Arial", fill: "#fff"});
        this.pointTime = game.time.events.loop(100, this.updateTimer, this);
        
    },
    update: function() {
        //Logique du jeu
        game.physics.arcade.overlap(this.player, this.asteroides, this.ToOver, null, this);
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;
        if (leftKey.isDown) {
            this.player.body.velocity.x = vitesse * -1;
            if(this.player.angle != -90){
            	if(this.player.angle < -90 && this.player.angle < 90){
            		this.player.angle += 10;
            	}
            	else {
            		this.player.angle -= 10;
            	}
            }
        }
        if (rightKey.isDown) {
            this.player.body.velocity.x = vitesse;
            if(this.player.angle != 90){
            	if(this.player.angle >= -90 && this.player.angle < 90){
            		this.player.angle += 10;
            	}
            	else {
            		this.player.angle -= 10;
            	}
        	}
        }
        if (upKey.isDown) {
            this.player.body.velocity.y = vitesse * -1;
            if(this.player.angle != 0){
            	if(this.player.angle < 0){
            		this.player.angle += 10;
            	}
            	else if(this.player.angle >= 0){
            		this.player.angle -= 10;
            	}
            }
        }
        if (downKey.isDown) {
            this.player.body.velocity.y = vitesse;
            if(this.player.angle != -180){
            	if(this.player.angle < 0){
            		this.player.angle -= 10;
            	}
            	else if(this.player.angle >= 0){
            		this.player.angle += 10;
            	}
            }
        }
    },
    restartGame: function() {
        game.state.start('dodger');
    },
    ajouterUnasteroide: function() {

        var vitessex = Math.floor(Math.random() * 200) +1;
        var vitessey = Math.floor(Math.random() * 200) +1;
        var position = Math.floor(Math.random() * largeur) + 1;

        var asteroide = game.add.sprite(position, 0 , 'asteroide');
        game.physics.arcade.enable(asteroide);
        asteroide.body.velocity.x = vitessex;
        asteroide.body.velocity.y = vitessey;
        asteroide.body.angularVelocity = 20;
        
        asteroide.width=50;
        asteroide.height=50;

        this.asteroides.add(asteroide);
        
        asteroide.body.collideWorldBounds = true;
        asteroide.body.bounce.x = 1;
        asteroide.body.bounce.y = 1;
    },
    updateTimer: function() {
        score += 1;
        this.labelScore.text = score;
    },
    ToOver: function() {
        music.stop();
        game.state.start('over');
    },
};