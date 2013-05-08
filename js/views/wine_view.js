App.WineView = Ember.View.extend({
    templateName: 'wine-edit',
    didInsertElement: function() {
        this.$('input:first').focus();
    }

});