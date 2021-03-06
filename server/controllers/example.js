var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view   = new keystone.View(req, res);
	var locals = res.locals;
	
	locals.section = 'example';

	view.query('page', keystone.list('page').model.findOne({slug: 'example'}));
	
	view.render('example');
	
};
