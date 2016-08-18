// (function(){
	"use strict";

// ==================== VARIABLES ====================
// ==================== RANDOM SELECTOR ====================
	function getRandom() {
		// generates random number between 1 and 4
		var num = Math.floor(Math.random() * 4) + 1;

		// takes generated number and turns it into a color
		if (num == 1) {
			num = "green";
			// num = $("#box1");
		} if (num == 2) {
			num = "red";
			// num = $("box2");
		} if (num == 3) {
			num = "blue";
			// num = $("box3");
		} if (num == 4) {
			num = "yellow";
			// num = $("box4");
		};
		console.log(num) 
	};

// ====================  ====================

// ==================== LIGHTS BOX ====================
	function lightBox() {
		var order = [];
	};
// ====================  ====================
// ====================  ====================
// ====================  ====================
// ====================  ====================

getRandom();

// })();