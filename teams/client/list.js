Meteor.subscribe('teams');

Template.TeamList.helpers({

  teams: function () {
    return Teams.find();
  }

});