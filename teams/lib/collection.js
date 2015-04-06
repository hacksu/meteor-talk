/**
Teams
-----
{
  name: String,
  owner: String, // the user that owns the team
  createdAt: Date
}
*/

Teams = new Mongo.Collection('teams');

Meteor.methods({

  'Teams.create': function (name) {
    Teams.insert({
      name: name,
      createdAt: new Date()
    });
  },

  'Teams.update': function (id, name) {
    Teams.update(id, {$set: {name: name}});
  },

  'Teams.delete': function (id) {
    Teams.remove(id);
  }

});