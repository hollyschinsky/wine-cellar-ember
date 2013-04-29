App.WineView = Ember.View.extend({
    templateName: 'wine',
    didInsertElement: function() {
        this.$('input:first').focus();
    }
});