/**
 * jQuery Word Magik plugin
 *
 * Copyright (c) 2014 Amyth Arora
 * Licensed under MIT License
 *
 * https://github.com/amyth/WordMagik
 *
 * VERSION: 0.0.1
 *
 */

(function($) {
	$.fn.wordmagik = function(options) {

		// Defines default options for word magik plugin
		var defaults = {
			randomize: true,				// Randomize change of words
			wordList: [],					// List of words to choose from
			onEvent: "hover",				// Event to change the word on
			eventSelector: ".wmgk",			// Selector to bind the event to
			animationIn: "bounceInRight",	// In animation
			animationOut: "bounceOutLeft",	// Out animation
		};
		var settings = $.extend({}, defaults, options);

		var logError = function(err) {
			var prefix = "WordMagikError: ";
			console.error(prefix + err);
		};

		return this.each(function() {

			// Define globals and variables
			var $element = $(this);
			var wordArray = [];

			// change words only if wordArray has words
			if (settings.wordList.length) {

				// Create a word array
				wordArray = $.extend(true, [], settings.wordList);

				// Define word index
				wordIndex = settings.randomize ? Math.floor(Math.random() * wordArray.length): 0;

				var changeWord = function() {
					$element.html("<span class=\"wmagik_out\"><span>" + wordArray[wordIndex] + "</span></span>");
					getNextWord();
					var wordIn = $("<span class=\"wmagik_in\"><span>" + wordArray[wordIndex] + "</span></span>");
					wordIn.appendTo($element);
					$element.wrapInner("<span class=\"wmagik_word\" />");

					// Add animation classes
					$element.find(".wmagik_in").addClass("animated " + settings.animationIn);
					$element.find(".wmagik_out").addClass("animated " + settings.animationOut);
				};

				var getNextWord = function() {
					if (settings.randomize) {
						wordIndex = Math.floor(Math.random() * wordArray.length);
					} else {
						wordIndex = wordIndex === wordArray.length ? 0: wordIndex++;
					}
					return wordArray[wordIndex];
				};

				var $selector = $(settings.eventSelector);

				// Bind the change word method to the given selector
				// for the given event
				$selector.on(settings.onEvent, changeWord);


			} else {
				logError("Word list is empty");
			}
		});
	};
}(jQuery));
