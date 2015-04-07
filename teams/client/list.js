Meteor.subscribe('teams');

Template.TeamList.helpers({

  teams: function () {
    return Teams.find();
  }

});

Template.TeamList.events({

  'submit form': function (event) {
    var name = event.target.name.value;
    Meteor.call('Teams.create', name);
    event.target.name.value = '';
    return false;
  }

});