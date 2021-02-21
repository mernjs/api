const InitCommand	= require('../models/InitCommand')

class WelcomeController {

    index(req, res){
        view(res, 'pages/welcome', 'Welcome')
    }

    async projects(req, res){
    	const data = await InitCommand.find()
        view(res, 'pages/projects', 'Projects', 'Get All Projects Successfully', data)
    }

}

module.exports = new WelcomeController();