# Mock e-commerce Site for CS 0134
> Purely a static e-commerce site for Pitt's CS 0134, Web Development Class

[![Travis branch](https://travis-ci.org/twhite96/The-Lens-Cap.svg?branch=gh-pages)](https://travis-ci.org/twhite96/The-Lens-Cap)

This site is simple: How do you design and code a functional e-commerce site? By using Bootstrap and customizing it with a few flexbox elements thrown in. We will also use jQuery and a few jQuery plugins for functionality.

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
You will also need a Gulpfile.

### Installing Slick

Download Slick from Ken's [repo](https://github.com/kenwheeler/slick/). Add the slick folder to your project. Place the `slick.css` and `slick-theme.css` in your `<head>` tags. You will also need jQuery to use slick. 

When adding jQuery and Slick to your project, add the jQuery file first and then `slick.min.js` afterwards before the closing `<body>` tag.

A lot of tutorials and instructions tell you to initialize slick in a `<script>` tag at the bottom of your `index.html` file. **Don't do this**. Depending on the slick settings you use, it will slow down the slider. As Ken suggests, try initialzing the `slick.js` script: 

`$(document).ready(function() {
  $('.your-class').slick({
    setting-name: setting-value,
  });
});` 

in another script file. Once you have it set up how you like it, it's smooth sailing after that. Style it as you see fit.

## Release History

None right now.

## Meta

You can follow my dev happenings on Twitter: [@TiffanyW_412](https://twitter.com/TiffanyW_412/)

Distributed under the MIT License. See ```LICENSE``` for more information.
