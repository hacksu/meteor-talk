Router.route('/', function () {
  this.render('TeamList');
});

Router.route('/:name', function () {
  this.render('TeamSingle');
});