import { GameScene } from "../scenes/GameScene";

export class Player extends Phaser.GameObjects.Container {
	public scene: GameScene;

	private sprite: Phaser.GameObjects.Sprite;
	public thoughtBubble: Phaser.GameObjects.Sprite;
	// private thoughtText: Phaser.GameObjects.Text;
	private walkSpeed: number;

	constructor(scene: GameScene, x: number, y: number) {
		super(scene, x, y);
		this.scene = scene;
		this.scene.add.existing(this);

		this.sprite = this.scene.add.sprite(0, 0, "cat", 0);
		this.sprite.setScale(0.5);
		this.add(this.sprite);

		this.setupAnimations();
		this.walkSpeed = 5;


		this.thoughtBubble = this.scene.add.sprite(0, -50, "thought", 0);
		this.thoughtBubble.setOrigin(0.5, 1);
		this.thoughtBubble.setScale(0.6);
		this.thoughtBubble.play('thinking', true);
		this.add(this.thoughtBubble);

		// this.thoughtText = this.scene.createText(0, -116, 20, this.scene.weights.regular, "#000");
		// this.thoughtText.setOrigin(0.5);
		// this.thoughtText.setText("Sus is poggers...");
		// this.add(this.thoughtText);
	}

	update(time: number, delta: number) {
		let input = this.scene.getInputDirection();

		if (input.x == 0 && input.y == 0) {
			this.play('idle', true);
		}
		else {
			this.play('walk', true);

			if (input.x != 0) {
				this.sprite.scaleX = -0.5 * input.x;
			}
		}

		this.x += input.x * this.walkSpeed;
		this.y += input.y * this.walkSpeed;
	}

	play(key, ignoreIfPlaying=false) {
		this.sprite.play(key, ignoreIfPlaying);
	}

	setupAnimations() {
		this.scene.anims.create({
			key: 'idle',
			frames: [
				{key: 'cat', frame: 0, duration: 300},
				{key: 'cat', frame: 1, duration: 300},
			],
			repeat: -1
		});

		this.scene.anims.create({
			key: 'walk',
			frames: [
				{key: 'cat', frame: 3, duration: 100},
				{key: 'cat', frame: 2, duration: 100},
			],
			repeat: -1
		});

		this.scene.anims.create({
			key: 'thinking',
			frames: [
				{key: 'thought', frame: 0, duration: 300},
				{key: 'thought', frame: 1, duration: 300},
			],
			repeat: -1
		});
	}
}