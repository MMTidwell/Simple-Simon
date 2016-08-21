(function(){ 

	// ==================== VARIABLES ====================
	var clientArray = [];
	var gameArray = [];
	var level = 0

	// ==================== START BUTTON ====================
	// starts game once the play button is clicked
	$("#playGame").click(function() {
		gameOrder();
	});

	// ==================== GAME ORDER ====================
	function gameOrder() {
		// pulls random number between 1 and 4 and keeps an array
		gameArray.push(Math.floor(Math.random() * 4) + 1);

		// let declares i for each iteration, not the loop. This way what is passed to the setTimeout is exactly what we want. let is scoped for the loop, var is scoped to the function. 
		for (let i = 0; i < gameArray.length; i++) {
			// initiate the delay between index of gameArray
			setTimeout(function() {
				switch (gameArray[i]) {
					case 1:
						lightUp("#green");
						break;
					case 2:
						lightUp("#red");
						break;
					case 3:
						lightUp("#blue");
						break;
					case 4:
						lightUp("#yellow");
						break;
				}
			// i represents the delay used after the button is added to the array
			}, i * 700);
		}
	} 

	// ==================== LIGHTS UP ====================
	// lights up the selected box
	function lightUp(box) {
		$(box).fadeTo("fast", 1).fadeTo("fast", 0.5);
	}	

	// ==================== CLIENT CLICKS ====================
	// makes the boxes clickable and sends them lightUp
	$(".boxed").click(function() {
		var lightOnClick = "#" + $(this).attr("id");
		lightUp(lightOnClick);
		// adds the click to array as a number
		clientArray.push(parseInt($(this).attr("class").split(' ')[1]));

		// checks to see if the lengths are the same for both arrays
		if (clientArray.length == gameArray.length) {
			compareArrays();
		} 
	});

	// ==================== COMPARE ARRAYS ====================
	// compares arrays
	function compareArrays() {
		for (var i = 0; i < gameArray.length; i++) {
			if (gameArray[i] != clientArray[i]) {
				alert("You have died a miserable death \nand my little puppy can do better than you!");
				break;
			}
		}
		// clears client array so they can play the next level
		clientArray = [];
		level++
		// updates the score 
		$('#winCounts').html(level);

		// sets a delay between client clicks and game clicks
		setTimeout(function() {
			gameOrder();
		}, 500);
	}

})();






