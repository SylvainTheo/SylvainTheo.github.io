var largeur = (window.innerWidth);
var hauteur = (window.innerHeight);
var game = new Phaser.Game(largeur-10, hauteur-10);

var vitesse = 600;
var lvl = 0;
var trollOnOff = 0;

game.state.add('options', options);
game.state.add('over', over);
game.state.add('menu', menu); 
game.state.add('dodger', dodger);
game.state.add('dodger2', dodger2);
game.state.start('menu');