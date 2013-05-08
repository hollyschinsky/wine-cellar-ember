App.WineController = Ember.ObjectController.extend({
    needs: ['wine'],

    // Use a computed property to add to the path or set the generic for picture as needed
    newPicture: function() {
        var picture = this.get('picture');
        if (picture)
            return "pics/"+picture;
        else return "pics/generic.jpg"
    }.property('newPicture'),

    startEditing: function() {
        // add the wine to a *local* transaction
        var wine = this.get('content');
        var transaction = wine.get('store').transaction();
        transaction.add(wine);
        this.transaction = transaction;
    },

    stopEditing: function() {
        // rollback the local transaction if it hasn't already been cleared...
        var transaction = this.transaction;
        if (transaction) {
            transaction.rollback();
            this.transaction = undefined;
        }
    },

    save: function() {
        this.transaction.commit();
        this.transaction = undefined;
        this.stopEditing();
        this.transitionToRoute('wines');
    },

    cancel: function() {
        this.stopEditing();
        this.transitionToRoute('wines');
    },

    delete: function(wine) {
        wine.deleteRecord();
        this.transaction.commit();
        this.transitionToRoute('wines');
    }

});
