var Backbone = require('backbone');
var PhonesIndexView = require('./views/phones/index_view.js');
var PhonesShowView = require('./views/phones/show_view.js');
var Phone = require('./models/phone.js');


var Router = Backbone.Router.extend({
    
    routes: {
        '':           'phonesIndex',
        'phones/:id': 'phonesShow'
    },

    phonesIndex: function () {
        new PhonesIndexView({ el: 'section#main' });
    },

    phonesShow: function (id) {
        new PhonesShowView({
            el: 'section#main',
            model: new Phone({ id: id })
        });
    }

});


module.exports = Router;

