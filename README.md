# Mock e-commerce Site for CS 0134
> Purely a static e-commerce site for Pitt's CS 0134, Web Development Class

[![Travis branch](https://travis-ci.org/twhite96/The-Lens-Cap.svg?branch=gh-pages)](https://travis-ci.org/twhite96/The-Lens-Cap) [![GitHub followers](https://img.shields.io/github/followers/twhite96.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/twhite96) [![Twitter Follow](https://img.shields.io/twitter/follow/TiffanyW_412.svg?style=social&label=Follow&maxAge=2592000)](https://twitter.com/TiffanyW_412)

This site is simple: How do you design and code a functional e-commerce site? By using Bootstrap and customizing it with a few CSS animations and JavaScript thrown in for a quickie site that is up and running fast. We will also use jQuery and a few jQuery plugins for functionality.

## Installation
If you want to improve upon what I have done here, there are really not a lot of dependencies. You will need Bootstrap and [Slick.js](http://kenwheeler.github.io/slick/) jQuery slider plugin.

## Usage examples

You could use this to practice building static sites and hosting them on your free server of choice.

## Development setup

If you wish to test each build with Travis CI, you can do so by making a ```package.json``` file using

```sh
npm init
```
And filling out the details. You will also need to install `Gulp`:

```sh
npm install gulp --save
```
You will also need a Gulpfile and a `.travis.yml` file. 

You make the Travis CI YAML file: 

```yaml
language: node_js
node_js:
  - "6.3.1"
```

### Installing Slick

Download Slick from Ken's [repo](https://github.com/kenwheeler/slick/). Add the slick folder to your project. Place the `slick.css` and `slick-theme.css` in your `<head>` tags. You will also need jQuery to use slick. 

When adding jQuery and Slick to your project, add the jQuery file first and then `slick.min.js` afterwards before the closing `<body>` tag.

A lot of tutorials and instructions tell you to initialize slick in a `<script>` tag at the bottom of your `index.html` file. **Don't do this**. Depending on the slick settings you use, it will slow down the slider. As Ken suggests, try initialzing the `slick.js` script: 

```javascript
$(document).ready(function() {
  $('.your-class').slick({
    setting-name: setting-value,
  });
});
``` 

in another script file. Once you have it set up how you like it, it's smooth sailing after that. Style it as you see fit.

## Popover Functionality for Cart Page

I didn't really want or need to include the JavaScript for the popover. I would need to tinker with it, as I found something that would work for this particular site instance somewhere else. If you'd like to play with it, it is: 

```javascript
$(function() {
	var pop = $('.popbtn');
	var row = $('.row:not(:first):not(:last)');


	pop.popover({
		trigger: 'manual',
		html: true,
		container: 'body',
		placement: 'bottom',
		animation: false,
		content: function() {
			return $('#popover').html();
		}
	});


	pop.on('click', function(e) {
		pop.popover('toggle');
		pop.not(this).popover('hide');
	});

	$(window).on('resize', function() {
		pop.popover('hide');
	});

	row.on('touchend', function(e) {
		$(this).find('.popbtn').popover('toggle');
		row.not(this).find('.popbtn').popover('hide');
		return false;
	});

});
```

## Release History

None right now.

## Meta

You can follow my dev happenings on Twitter: [@TiffanyW_412](https://twitter.com/TiffanyW_412/) or on my blogs [Just Another DevBlog](https://twhite96.surge.sh/) and [Just Another Software Engineering Blog](https://helloburgh.me/), or you can email me at <hey@tiffanyrwhite.com> for any concerns or comments.

Distributed under the MIT License. See ```LICENSE``` for more information.
