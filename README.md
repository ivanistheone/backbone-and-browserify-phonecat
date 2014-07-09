# AngularJS Phone Catalog Tutorial coded in Backbone and compiled using Browserify by Gulp


## Overview

This tutorial builds a web application using ''Backbone.js'' 
based on the [AngularJS PhoneCat Tutorial App](http://docs.angularjs.org/tutorial)
and mirrors the functionality of each of the first 10 steps.
The full tutorial can be found on [Aaron O'Connell's blog](http://204nocontent.me/i-coded-the-angular-tutorial-app-in-backbone-and-it-took-260-more-code).

[Ivan Savov](http://minireference.com/) modularized the code into ''CommonJS'' modules,
and provided a working ''gulpfile.js'' to build js + prerequisites using ''browserify''.

TODO: update gulpfile to latest best practices

TODO: simplify code a bit and compare LOC again


## Prerequisites

### Git

- [Set up](http://help.github.com/articles/set-up-git)
- [Git home](http://http://git-scm.com/) (download, documentation)

### Node.js

- [Get Node.js](http://http://nodejs.org/download/).

## Workings of the application

- A basic Node app serves static files and JSON.
- All Backbone app files are located in ''src/''
- ''src/jst.js'' is a templating dictionary created by ''mktemplates'' task in gulp
- The entire js code (including jQuery, Backbone and _) is combined into ''public/bundle.js''


## Tutorial Outline

To follow the tutorial step by step (very educational),
check out the Original author's [blog post](http://204nocontent.me/i-coded-the-angular-tutorial-app-in-backbone-and-it-took-260-more-code).


# Useful links for gulp and browseify dev

- http://browserify.org/
- http://viget.com/extend/gulp-browserify-starter-faq
- http://rkulla.blogspot.com/2014/04/using-browserify-with-jquery-backbonejs.html
