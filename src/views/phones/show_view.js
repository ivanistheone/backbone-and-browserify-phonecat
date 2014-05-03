
var Backbone = require('backbone');

var PhonesShowImageView = require('./show_image_view.js');
var PhonesShowImagesListView = require('./show_images_list_view.js');
var PhonesShowSpecsView = require('./show_specs_view.js');


var PhonesShowView = Backbone.View.extend({

    initialize: function () {
        this.model.fetch();

        this.listenTo(this.model, 'sync', this.render);
    },

    render: function () {
        this.$el.html(JST['phones/show'](this.model));

        new PhonesShowImageView({
            el: this.$('.phone-images'),
            model: this.model
        });

        new PhonesShowImagesListView({
            el: this.$('ul.phone-thumbs'),
            model: this.model
        });

        new PhonesShowSpecsView({
            el: this.$('ul.specs'),
            model: this.model
        });
    }
});

module.exports = PhonesShowView;

