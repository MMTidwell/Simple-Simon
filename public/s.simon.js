// (function(){
	"use strict";

// ==================== VARIABLES ====================
	var playerOrder = []
	var gameOrder = []
	var score = 0


// ==================== RANDOM SELECTOR ====================
	function getRandom(turns) {
		for (var i = 0; i < turns; i++) {
			this.gameOrder.push(Math.floor(Math.random() * 4) + 1);
		}
	};

// ==================== LIGHTS BOX ====================
	function lightBox(element, level, speed) {
		if (level > 0) {
			element.stop().animate({opacity: "1"}, {
				duration: 50, function() {
					element.stop().animate({opacity: "0.5"}, 200);
				}
			});
		}
		if (level > 0) {
			setTimeout(function(){
				this.lightBox(element, time, speed)
			}, speed);
			time -= 1;
		}
	};

// ==================== GAME ORDER ====================
	function flashOrder() {
		$.each(gameOrder, function(index, value) {
			setTimeout(function() {
				this.lightBox($(this.shape + value), 1, 300, value);
			}, 500)
		});
	};

// ==================== SCORE ====================
	function playerScore() {
		$("#winCounts").text(score)
	}
// ====================  ====================
// ====================  ====================
getRandom();




// })();










