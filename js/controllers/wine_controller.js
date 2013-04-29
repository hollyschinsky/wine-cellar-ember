App.WineController = Em.ObjectController.extend({
    needs: ['wine'],

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