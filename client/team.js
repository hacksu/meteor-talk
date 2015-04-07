Template.Team.helpers({

  team: function () {
    return Teams.findOne({name: Router.current().params.team});
  },

  messages: function () {
    return Session.get('channel').messages;
  }

});

Template.Team.events({

  'click .channel-name': function (event) {
    var channel = Teams.findOne({name: Router.current().params.team}).channels.filter(function (channel) {
      return channel.name == event.target.innerText;
    })[0];
    console.log(channel);
    Session.set('channel', channel);
    return false;
  },

  'submit .new-channel': function (event) {
    var name = event.target.name.value;
    var teamId = Teams.findOne({name: Router.current().params.team})._id;
    Meteor.call('Teams.channels.create', teamId, name);

    event.target.name.value = '';
    return false;
  },

  'submit .new-message': function (event) {
    var text = event.target.message.value;
    var teamId = Teams.findOne({name: Router.current().params.team})._id;
    var channelId = Session.get('channel')._id;
    Meteor.call('Teams.channels.messages.create', teamId, channelId, text);

    event.target.message.value = '';
    return false;
  }

});