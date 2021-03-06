import "phaser";
import { PreloadScene } from "./scripts/scenes/PreloadScene";
import { GameScene } from "./scripts/scenes/GameScene";
import RoundRectanglePlugin from "phaser3-rex-plugins/plugins/roundrectangle-plugin.js";

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.WEBGL, // Phaser.AUTO
	width: 1920/2,
	height: 1080/2,
	scale: {
		mode: Phaser.Scale.FIT
		// mode: Phaser.Scale.RESIZE
	},
	physics: {
		default: 'arcade',
		arcade: {
			// debug: true,
			gravity: { y: 0 }
		}
	},
	scene: [
		PreloadScene,
		GameScene
	],
	plugins: {
		global: [
			{
				key: "rexRoundRectanglePlugin",
				plugin: RoundRectanglePlugin,
				start: true
			}
		]
	}
};

const game = new Phaser.Game(config);