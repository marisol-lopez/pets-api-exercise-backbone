import Backbone from 'backbone';

var PetView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
  },
  render: function(){
    var html = this.template({pet: this.model.attributes});
    this.$el.html(html);
  }

});

export default PetView;
