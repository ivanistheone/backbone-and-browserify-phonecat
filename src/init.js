
// GENERAL IMPORTS
var jquery = require('jquery'); 
var underscore = require('underscore'); 
var Backbone = require('backbone');
Backbone.$ = jquery;

// APP IMPORTS
var Router = require('./router.js');

// GENERAL GLOBALS
window.$ = jquery;      // make jquery global under usual alias $
window._ = underscore;  // make underscore global under usual alias _


// APP GLOBALS
window.App = new Router();  // setup global App objecrt
require('./jst.js');  // setup global templates store window.JST


$(document).ready(function () {
    Backbone.history.start({ pushState: true });
});
