export interface Phrase {
	text: string;
	audio?: string;
	draggable: boolean;
	empty: boolean;
	trigger?: string;
	type?: string;
}

let phraseData = {
	"player": {
		text: "<empty>",
		audio: undefined,
		draggable: true,
		empty: true
	},

	"1a": {
		text: "You wake up, alone within a dark room",
		audio: "V_01",
		draggable: false,
		empty: false
	},
	"1b": {
		text: "<empty>",
		draggable: true,
		empty: true,
		type: "who is"
	},

	"2a": {
		text: "In front of you lies a door, which is",
		audio: "V_02_Start",
		draggable: false,
		empty: false
	},
	"2b": {
		text: "not",
		audio: "V_Not",
		draggable: true,
		empty: false,
		type: "not"
	},
	"2c": {
		text: "open",
		audio: "V_02_End",
		draggable: false,
		empty: false
	},

	"3": {
		text: "After heading through the door, you come across a tunnel",
		audio: "V_03",
		draggable: false,
		empty: false
	},

	"4a": {
		text: "A dense buildup of cobwebs are",
		audio: "V_04_Start",
		draggable: false,
		empty: false
	},
	"4b": {
		text: "<empty>",
		draggable: true,
		empty: true,
		type: "not"
	},
	"4c": {
		text: "blocking your way.",
		audio: "V_04_End",
		draggable: false,
		empty: false
	},

	// Cat sleeping
	"0a": {
		text: "Deep in a dungeon, there is",
		draggable: false,
		empty: false
	},
	"0b": {
		text: "<empty>",
		draggable: true,
		empty: true,
		trigger: "dead",
		type: "not"
	},
	"0c": {
		text: "a cat",
		draggable: false,
		empty: false
	},
	"0d": {
		text: "who is asleep",
		draggable: true,
		empty: false,
		trigger: "sleeping",
		type: "who is"
	},

	// Enemy guarding
	"guard_a": {
		text: "A mean monster is guarding the room",
		draggable: false,
		empty: false
	},
	"guard_b": {
		text: "<empty>",
		draggable: true,
		empty: true,
		type: "who is"
	},
};

let areaData = {
	"0": {
		hitarea: {x:300, y:300, w:100, h:100},
		phrases: ["0a", "0b", "0c", "0d"]
	},
	"1": {
		hitarea: {x:100, y:100, w:100, h:100},
		phrases: ["1a", "1b"]
	},
	"2": {
		hitarea: {x:400, y:100, w:100, h:100},
		phrases: ["2a", "2b", "2c"]
	},
	"3": {
		hitarea: {x:700, y:100, w:100, h:100},
		phrases: ["3"]
	},
	"4": {
		hitarea: {x:1000, y:100, w:100, h:100},
		phrases: ["4a", "4b", "4c"]
	},
	"guard": {
		hitarea: {x:600, y:400, w:100, h:100},
		phrases: ["guard_a", "guard_b"]
	},
};

for (let name in areaData) {
	areaData[name].phrases = areaData[name].phrases.map(key => {return phraseData[key];});
}

export { phraseData, areaData };