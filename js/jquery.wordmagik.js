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

		var plugin = this;

		plugin.update = function(options) {
			plugin.settings = $.extend({}, plugin.settings, options);
			if ("wordList" in options) {
				wordIndex = plugin.settings.randomize ? Math.floor(Math.random() * plugin.settings.wordList.length): 0;
			}
		};

		// Defines default options for word magik plugin
		var defaults = {
			randomize: true,				// Randomize change of words
			wordList: [],					// List of words to choose from
			onEvent: "hover",				// Event to change the word on
			eventSelector: ".wmgk",			// Selector to bind the event to
			animationIn: "bounceInRight",	// In animation
			animationOut: "bounceOutLeft",	// Out animation
		};

		plugin.settings = $.extend({}, defaults, options);

		var logError = function(err) {
			var prefix = "WordMagikError: ";
			console.error(prefix + err);
		};

		return this.each(function() {

			// Define globals and variables
			var $element = $(this);

			// change words only if wordList has words
			if (plugin.settings.wordList.length) {

				// Define word index
				wordIndex = plugin.settings.randomize ? Math.floor(Math.random() * plugin.settings.wordList.length): 0;
				lastWord = $element.html();

				var changeWord = function() {
					$element.html("<span class=\"wmagik_out\"><span>" + lastWord + "</span></span>");
					getNextWord();
					var wordIn = $("<span class=\"wmagik_in\"><span>" + plugin.settings.wordList[wordIndex] + "</span></span>");
					wordIn.appendTo($element);
					$element.wrapInner("<span class=\"wmagik_word\" />");

					// Add animation classes
					$element.find(".wmagik_in").addClass("animated " + plugin.settings.animationIn);
					$element.find(".wmagik_out").addClass("animated " + plugin.settings.animationOut);
				};

				var getNextWord = function() {
					if (plugin.settings.randomize) {
						wordIndex = Math.floor(Math.random() * plugin.settings.wordList.length);
					} else {
						wordIndex = wordIndex === plugin.settings.wordList.length ? 0: wordIndex++;
					}
					lastWord = plugin.settings.wordList[wordIndex];
					return lastWord;
				};

				var $selector = $(plugin.settings.eventSelector);

				// Bind the change word method to the given selector
				// for the given event
				$selector.on(plugin.settings.onEvent, changeWord);


			} else {
				logError("Word list is empty");
			}
		});
	};
}(jQuery));
