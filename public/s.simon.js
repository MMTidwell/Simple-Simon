(function(){ 
	// ==================== VARIABLES ====================
	var clientArray = [];
	var gameArray = [];
	var level = 0;

	// ==================== START BUTTON ====================
	function play() {
		$("#playGame").click(function() {
			// sets it to where you can not click play more than once
			if (level == 0) {
				gameOrder();
			}
		});
	}

	// ==================== GAME ORDER ====================
	function gameOrder() {
		gameArray.push(Math.floor(Math.random() * 4) + 1);

		// let declares i for each iteration, not the loop. This way what is passed to the setTimeout is exactly what we want. let is scoped for the loop, var is scoped to the function. 
		for (let i = 0; i < gameArray.length; i++) {
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
			}, i * 400);
		}
	} 

	// ==================== LIGHTS UP ====================
	function lightUp(box) {
		$(box).fadeTo("fast", 1).fadeTo("fast", 0.5);
	}	

	// ==================== CLIENT CLICKS ====================
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
	function compareArrays() {
		for (var i = 0; i < gameArray.length; i++) {
			if (gameArray[i] != clientArray[i]) {
				alert("You have died a miserable death \nand my little puppy can do better than you!");
				// sets everything back to 0
				gameArray = [];
				level = -1;
				break;
			}
		}

		clientArray = [];
		level++
		// updates the score 
		$('#winCounts').html(level);

		// sets a delay between client clicks and game clicks
		setTimeout(function() {
			gameOrder();
		}, 800);
	}

play();

})();






