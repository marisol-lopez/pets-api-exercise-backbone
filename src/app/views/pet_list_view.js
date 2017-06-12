import Backbone from 'backbone';

import PetView from './pet_view';

var PetListView = Backbone.View.extend({
  initialize: function(options) {
    this.petTemplate = _.template($('#pet-card-template').html());
    this.listElement = this.$('.pet-list');
    this.petCardList = [];
  },
  render: function(){
    this.listElement.empty();
    this.petCardList.forEach(function(pet){
      pet.render();
      this.listElement.append(pet.$el);
    }, this);
    return this;
  }

});

export default PetListView;
