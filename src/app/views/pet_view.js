import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var PetView = Backbone.View.extend({
  initialize: function(options) {
    console.log("*****");
    console.log(options);
    console.log("*****");
    this.template = options.template;
  },
  render: function(){
    var html = this.template({pet: this.model.toJSON()});
    this.$el.html(html);
    // Re-attach DOM event listeners to our brand-spankin-new HTML
    // this.delegateEvents();
    return this;
  }

});

export default PetView;
