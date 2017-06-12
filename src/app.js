import $ from 'jquery';
import _ from 'underscore';

import PetList from 'app/collections/pet_list';
import PetListView from 'app/views/pet_list_view';

$(document).ready(function() {

  var petList = new PetList();
  petList.fetch();

  var options = {
    el: $('#application'),
    model: petList
  };
  var application = new PetListView(options);
  application.render();

});
