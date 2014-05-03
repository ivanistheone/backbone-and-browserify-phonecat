
var Backbone = require('backbone');
var Photo = require('../models/photo.js');



PhotosCollection = Backbone.Collection.extend({
    model: Photo
});


module.exports = PhotosCollection;

