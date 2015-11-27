var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view   = new keystone.View(req, res);
	var locals = res.locals;
	
	locals.section = 'home';

	view.query('page', keystone.list('page').model.find({slug: 'home'}));
	
	view.render('index');
	
};
