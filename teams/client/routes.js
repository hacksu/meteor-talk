Router.route('/', function () {
  this.render('TeamList');
});

Router.route('/:name', function () {
  var team = Teams.findOne({name: this.params.name});
  this.render('Team', {data: team});
});