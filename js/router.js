// Set up the map of the URL's to handle
App.Router.map(function() {
    this.route('add');
    this.resource("wines");
    this.route('about');
    this.resource("wine", {
        path: "/wines/:wine_id"
    });
});


// Add a Wine Route
App.AddRoute = Ember.Route.extend({
    model: function() {
        // The new record needs to be created in the controller.
        return null;
    },

    setupController: function(controller) {
        controller.startEditing();
    }
});

// Return all wines as the default model when the '/wines' route is requested...
App.WinesRoute = Ember.Route.extend({
    model: function() {
        return App.Wine.find();
    }
});

// Show/Edit Wine Route - delegate to controller for more to handle...
App.WineRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        // reset editing state
        if (controller.get('isEditing')) {
            controller.stopEditing();
        }
        else (controller.startEditing());

        // highlight this wine as active
        this.controllerFor('wines').set('activeWineId', model.get('id'));
    },

    deactivate: function() {
        var controller = this.controllerFor('wine');

        // reset editing state
        if (controller.get('isEditing')) {
            controller.stopEditing();
        }

        // set active wine id (currently not used)
        this.controllerFor('wines').set('activeWineId', null);
    }
});



