const MernCliController  =	require('../controllers/api/v1/MernCliController')

/**
 * APIs V1 Routes
 */
Route.route('/api')
	.get((req, res) => apiResponse(res, 200, 'Welcome To MernJs API'))
	.all(send405);

Route.route('/api/v1')
	.get((req, res) => apiResponse(res, 200, 'Welcome To MernJs API V1'))
	.all(send405);

Route.route('/api/v1/build')
	.post(MernCliController.build)
	.all(send405);

Route.route('/api/v1/forever')
	.post(MernCliController.forever)
	.all(send405);

Route.route('/api/v1/init')
	.post(MernCliController.init)
	.all(send405);

Route.route('/api/v1/install')
	.post(MernCliController.install)
	.all(send405);

Route.route('/api/v1/run-android-ios')
	.post(MernCliController.runAndroidIos)
	.all(send405);

Route.route('/api/v1/serve')
	.post(MernCliController.serve)
	.all(send405);

Route.route('/api/v1/update')
	.post(MernCliController.update)
	.all(send405);

Route.route('/api/v1/version')
	.get(MernCliController.version)
	.all(send405);

module.exports = Route