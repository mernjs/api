class WelcomeController {

    index(req, res){
        view(res, 'pages/welcome', 'Welcome')
    }

}

module.exports = new WelcomeController();