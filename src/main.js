
import Phaser from 'phaser'

import bootScene from './scenes/boot'
import battleScene from './scenes/battle'

function newGame () {
  if (game) return;
  game = new Phaser.Game({
    // type: Phaser.AUTO,
    fpsTarget: 60,
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    title: 'Phaser 3 with Parcel 📦',
    url: 'https://github.com/samme/phaser-parcel',
    scene: [bootScene, battleScene]
  });
}

function destroyGame () {
  if (!game) return;
  game.destroy(true);
  game.runDestroy();
  game = null;
}

let game;

if (module.hot) {
  module.hot.dispose(destroyGame);
  module.hot.accept(newGame);
}

if (!game) newGame();
