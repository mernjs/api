const 	WelcomeController = require('../controllers/WelcomeController')

Route.route('/')
	.get(WelcomeController.index)
	.all(send405);

module.exports = Route