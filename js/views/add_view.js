App.AddView = Ember.View.extend({
    templateName: 'add',
    didInsertElement: function() {
        this.$('input:first').focus();
    }
});
