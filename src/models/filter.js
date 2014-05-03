
var Backbone = require('backbone');

Filter = Backbone.Model.extend({
    defaults: {
        sortBy: 'age'
    }
});

module.exports = Filter;

