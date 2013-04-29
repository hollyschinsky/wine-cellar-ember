App.WinesController = Ember.ArrayController.extend({
    sortProperties: ['name'], // Will cause the array to be sorted on this property
    activeWineId: null
});