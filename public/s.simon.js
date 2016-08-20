
// // ==================== VARIABLES ====================
// 	var playerOrder = []
// 	var gameOrder = []
// 	var score = 0


// // ==================== RANDOM SELECTOR ====================
// 	function getRandom(turns) {
// 		for (var i = 0; i < turns; i++) {
// 			this.gameOrder.push(Math.floor(Math.random() * 4) + 1);
// 			lightBox()
// 		}
// 	};

// // ==================== LIGHTS BOX ====================
// 	function lightBox(element, level, speed) {
// 		if (level > 0) {
// 			element.stop().animate({opacity: "1"}, {
// 				duration: 50, function() {
// 					element.stop().animate({opacity: "0.5"}, 200);
// 				}
// 			});
// 		}
// 		if (level > 0) {
// 			setTimeout(function(){
// 				this.lightBox(element, time, speed)
// 			}, speed);
// 			time -= 1;
// 		}
// 	};

// // ==================== GAME ORDER ====================
// 	function flashOrder() {
// 		$.each(gameOrder, function(index, value) {
// 			setTimeout(function() {
// 				this.lightBox($(this.shape + value), 1, 300, value);
// 			}, 500)
// 		});
// 	};

// // ==================== SCORE ====================
// 	function playerScore() {
// 		$("#winCounts").text(score)
// 	}
// // ==================== SCORE ====================




// $(document).ready(function(){

// });

// ==================== VARIABLES ====================
	var clientArray = [];
	var gameArray = [];

// ==================== START BUTTON ====================
	$("#playGame").click(function() {
		game();
	});

// ==================== GAME ====================
	function game() {
		// pulls random number between 1 and 4 and keeps an array
		gameArray = gameArray.push(Math.floor(Math.random() * 4) + 1);
		console.log(gameArray);

	// ==================== LIGHTS UP ====================
		switch (gameArray) {
			case 1:
				lightUp("#green");
				// console.log("green")
				break;
			case 2:
				lightUp("#red");
				// console.log("red")
				break;
			case 3:
				lightUp("#blue");
				// console.log("blue")
				break;
			case 4:
				lightUp("#yellow");
				// console.log("yellow")
				break;
		}

		function lightUp(box) {
			$(box).fadeTo("fast", 1).fadeTo("fast", 0.5);
		}
		

	};	

// ==================== CLIENT BUTTON ====================
// ==================== COMPARE ARRAYS ====================
// ==================== UPDATE SCORE ====================








