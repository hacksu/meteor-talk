/**
Teams
-----
{
  name: String,
  owner: String,
  created: Date,
  channels: [{
    name: String,
    created: Date,
    messages: [{
      text: String,
      owner: String,
      created: Date
    }]
  }]
}
*/
Teams = new Mongo.Collection('teams');

Meteor.methods({

  'Teams.create': function (name) {
    Teams.insert({
      name: name,
      created: new Date()
    });
  },

  'Teams.update': function (id, name) {
    Teams.update(id, {$set: {name: name}});
  },

  'Teams.delete': function (id) {
    Teams.remove(id);
  },

  'Teams.channels.create': function (teamId, channelName) {
    var channel = {
      name: channelName,
      created: new Date()
    };
    Teams.update(teamId, {$push: {channels: channel}});
  },

  'Teams.channels.update': function (teamId, channelId, channelName) {

  },

  'Teams.channels.delete': function () {

  },

  'Teams.channels.messages.create': function (teamId, channelId, text) {
    var message = {
      text: text,
      created: new Date()
    };
    Teams.update({_id: teamId, 'channels._id': channelId}, {
      $push: {'channels.$.messages': message}
    });
  },

  'Teams.channels.messages.update': function () {

  },

  'Teams.channels.messages.delete': function () {

  }

});