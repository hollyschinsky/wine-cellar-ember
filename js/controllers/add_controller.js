App.AddController = Ember.ObjectController.extend({
    startEditing: function() {
        // create a new record on a local transaction
        this.transaction = this.get('store').transaction();
        this.set('content', this.transaction.createRecord(App.Wine, {}));
    },

    stopEditing: function() {
        // rollback the local transaction if it hasn't already been cleared
        if (this.transaction) {
            this.transaction.rollback();
            this.transaction = null;
        }
    },

    save: function() {
        // commit and then clear the local transaction
        this.transaction.commit();
        this.transaction = null;
        this.transitionToRoute('wines');
    },

    cancel: function() {
        this.stopEditing();
        this.transitionToRoute('wines');
    },

    // Use a computed property to add to the path or set the generic for picture as needed
    newPicture: function() {
        var picture = this.get('picture');
        if (picture)
            return "pics/"+picture;
        else return "pics/generic.jpg"
    }.property('newPicture')
});
