
// Main Data Store (uses Ember Data framework)
App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.FixtureAdapter'
});
