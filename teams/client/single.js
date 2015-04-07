Meteor.subscribe('teams');

Template.TeamSingle.helpers({

  team: function () {
    var name = Router.current().params.name;
    var team = Teams.findOne({name: name});
    team.fromNow = moment(team.createdAt).fromNow();
    return team;
  },

});