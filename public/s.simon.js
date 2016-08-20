





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
		gameArray.push(Math.floor(Math.random() * 4) + 1);
		// console.log(gameArray + " game()");

	// ==================== LIGHTS UP ====================
		// let declares i for each iteration, not the loop. This way what is passed to the setTimeout is exactly what we want. let is scoped for the loop, var is scoped to the function. 
		for (let i = 0; i < gameArray.length; i++) {
			setTimeout(function() {
				switch (gameArray[i]) {
					case 1:
						lightUp("#green");
						// console.log("success1")
						break;
					case 2:
						lightUp("#red");
						// console.log("success2")
						break;
					case 3:
						lightUp("#blue");
						// console.log("success3")
						break;
					case 4:
						lightUp("#yellow");
						// console.log("success4")
						break;
				}
			}, i * 600);
		}

		function lightUp(box) {
			$(box).fadeTo("fast", 1).fadeTo("fast", 0.5);

			console.log(gameArray + " lightUp()");
			console.log("\n")
		}
		
	}

// ==================== CLIENT BUTTON ====================
// ==================== COMPARE ARRAYS ====================
// ==================== UPDATE SCORE ====================








