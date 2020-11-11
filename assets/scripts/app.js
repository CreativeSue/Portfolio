const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "persistent",
				weight: 12.3
			}, {
				text: "organized",
				weight: 8
			}, {
				text: "fun",
				weight: 11
			}, {
				text: "creative",
				weight: 10
			}, {
				text: "hard-working",
				weight: 7
			}, {
				text: "trust-worthy",
				weight: 6
			}, {
				text: "dedicated",
				weight: 13
			}, {
				text: "Passionate",
				weight: 15
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"love learning.", "know basic programming.", "know a lot about computers.", "like solving problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
