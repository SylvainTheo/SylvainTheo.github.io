var dodger = {
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
        lvl=1;

        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        monFond= game.add.sprite(0, 0, 'fond');
        monFond.width=largeur;
        monFond.height=hauteur;

        music = game.add.audio('musiqueJeu');
        music.loop = true;
        music.play();

        upKey = game.input.keyboard.addKey(Phaser.Keyboard.Z);
        downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
        leftKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
        rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
        
        this.player = game.add.sprite(game.world.centerX-30, game.world.centerY-30, 'player');
        this.player.anchor.set(0.5,0.5);
        this.player.width=60;
        this.player.height=60;
        game.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;
        
        
        score = 0;
        this.labelScore = game.add.text(20, 20, "0", {font: "30px Arial", fill: "#fff"});

        this.timer = game.time.events.loop(100, this.updateChallenge, this);

        var vitessex = Math.floor(Math.random() * 600) +200;
        var vitessey = Math.floor(Math.random() * 600) +200;

        this.asteroide = game.add.sprite(Math.floor(Math.random() * largeur - 60) + 1, 10, 'asteroide');
        this.asteroide.width=60;
        this.asteroide.height=60;
        game.physics.arcade.enable(this.asteroide);
        this.asteroide.body.collideWorldBounds = true;
        this.asteroide.body.velocity.x = vitessex;
        this.asteroide.body.velocity.y = vitessey;
        this.asteroide.body.bounce.x = 1;
        this.asteroide.body.bounce.y = 1;
    },
    update: function() {
        //Logique du jeu
        game.physics.arcade.overlap(this.player, this.asteroide, this.ToOver, null, this);
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
    ToOver: function() {
        music.stop();
        game.state.start('over');
    },
    updateChallenge: function() {
        score += 1;
        this.labelScore.text = score;

        this.asteroide.width *= 1.002;
        this.asteroide.height *= 1.002;

        this.asteroide.body.velocity.x *= 1.002;
        this.asteroide.body.velocity.y *= 1.002;
    }
};