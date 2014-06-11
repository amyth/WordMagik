WordMagik
=========

A simple event based word animation plugin using jQuery and CSS animations. This plugin is inspired by [WordsRotator Plugin](https://github.com/andreapace/wordsrotator) by [Andrea Pace](https://github.com/andreapace). I required a similar functionality to wordsrotator but based on events so I wrote WordMagik.

Dependencies
=============

### 1. [jQuery](http://jquery.com/download/)
### 2. [Animate.css](https://github.com/daneden/animate.css)

Installation and Usage
=======================

### 1. Include jQuery to your project
```
<head>
	<!-- Javascript Files -->
	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
</head>
```

### 2. Include your build of Animate.css
```
<head>
	<!-- CSS Stylesheets -->
	<link rel="stylesheet" type="text/css" href="https://rawgit.com/daneden/animate.css/master/animate.min.css" />

	<!-- Javascript Files -->
	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
</head>
```

### 3. Add WordMagik JS and CSS
```
<head>
	<!-- CSS Stylesheets -->
	<link rel="stylesheet" type="text/css" href="https://rawgit.com/daneden/animate.css/master/animate.min.css" />
	<link rel="stylesheet" type="text/css" href="css/wordmagik.animate.css" />

	<!-- Javascript Files -->
	<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script type="text/javascript" src="js/jquery.wordmagik.js"></script>
</head>
```

### 4. Initialize the plugin
```
<script type="text/javascript">
	$(document).ready(function() {
		$(".the-word").wordmagik({
			wordList: ["Awesome", "Cute", "Sexy", "Hot", "Swagging", "Perfect"],
			eventSelector: "#changeWord",
			onEvent: "click"
		});
	});
</script>
```

Options
=======================

### 1. randomize
A boolean of whether to pickup random words from the list or not. This is set to `true` by default. Setting this to `false` will use words indexwise.

### 2. wordList
An array of words. Words could be plain text or even HTML.

### 3. eventSelector
A selector to which the change word method will be bound. Example `button.change-word`, `.change`, `#change`, etc.

### 4. onEvent
An event on which the change word method will be called. Example `hover`, `click` etc.

### 5. animationIn
Type of animation for the appearing word. For more info see [animate.css](https://github.com/daneden/animate.css)

### 5. animationOut
Type of animation for the disappearing word. For more info see [animate.css](https://github.com/daneden/animate.css)


Author
=========================

[Amyth Arora](http://www.pythoninja.com)
[Facebook](http://www.facebook.com/d0uble.A)
[@mytharora](http://www.twitter.com/mytharora)
