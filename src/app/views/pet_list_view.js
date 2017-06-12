import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import PetView from './pet_view';

var PetListView = Backbone.View.extend({
  initialize: function(options) {
    console.log(options);
    // Compile a template to be shared between the individual tasks
    this.petTemplate = _.template($('#pet-card-template').html());
    // Keep track of the <ul> element
    this.listElement = this.$('.pet-list');

    // We'll keep track of a list of task models and a list of task views.
    this.petCardList = [];
  },
  render: function(){
    // Make sure the list in the DOM is empty before we start appending items
    this.listElement.empty();
    // Loop through the data assigned to this view
    this.petCardList.forEach(function(pet){
      pet.render();
      this.listElement.append(pet.$el);
    }, this);
    return this;
  }

});

export default PetListView;
