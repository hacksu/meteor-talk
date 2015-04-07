Router.route('/', function () {
  return this.render('TeamList');
});

Router.route('/:team', function () {
  return this.render('Team');
})