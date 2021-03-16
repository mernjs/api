const BuildCommand          = require('../../../models/BuildCommand')
const ForeverCommand        = require('../../../models/ForeverCommand')
const InitCommand           = require('../../../models/InitCommand')
const InstallCommand        = require('../../../models/InstallCommand')
const RunAndroidIosCommand  = require('../../../models/RunAndroidIosCommand')
const ServeCommand          = require('../../../models/ServeCommand')
const UpdateCommand         = require('../../../models/UpdateCommand')

class MernCliController {
    
    build(req, res){
        try{
            new BuildCommand({...req.body, created_at: new Date()}).save()
            .then(data => {
                return apiResponse(res, 200, 'Run Build Command Successfully')
            }).catch(error => {
                return apiResponse(res, 500, error.message)
            })
        } catch (error) {
            return apiResponse(res, 500, error.message)
        }
    }

    forever(req, res){
        try{
            new ForeverCommand({...req.body, created_at: new Date()}).save()
            .then(data => {
                return apiResponse(res, 200, 'Run Forever Command Successfully', data)
            }).catch(error => {
                return apiResponse(res, 500, error.message)
            })
        } catch (error) {
            return apiResponse(res, 500, error.message)
        }
    }

    init(req, res){
        try{
            new InitCommand({...req.body, created_at: new Date()}).save()
            .then(data => {
                return apiResponse(res, 200, 'Run Init Command Successfully', data)
            }).catch(error => {
                return apiResponse(res, 500, error.message)
            })
        } catch (error) {
            return apiResponse(res, 500, error.message)
        }
    }

    install(req, res){
        try{
            new InstallCommand({...req.body, created_at: new Date()}).save()
            .then(data => {
                return apiResponse(res, 200, 'Run Install Command Successfully', data)
            }).catch(error => {
                return apiResponse(res, 500, error.message)
            })
        } catch (error) {
            return apiResponse(res, 500, error.message)
        }
    }

    runAndroidIos(req, res){
        try{
            new RunAndroidIosCommand({...req.body, created_at: new Date()}).save()
            .then(data => {
                return apiResponse(res, 200, 'Run Android IOS Command Successfully', data)
            }).catch(error => {
                return apiResponse(res, 500, error.message)
            })
        } catch (error) {
            return apiResponse(res, 500, error.message)
        }
    }

    serve(req, res){
        try{
            new ServeCommand({...req.body, created_at: new Date()}).save()
            .then(data => {
                return apiResponse(res, 200, 'Run Serve Command Successfully', data)
            }).catch(error => {
                return apiResponse(res, 500, error.message)
            })
        } catch (error) {
            return apiResponse(res, 500, error.message)
        }
    }

    update(req, res){
        try{
            new UpdateCommand({...req.body, created_at: new Date()}).save()
            .then(data => {
                return apiResponse(res, 200, 'Run Update Command Successfully', data)
            }).catch(error => {
                return apiResponse(res, 500, error.message)
            })
        } catch (error) {
            return apiResponse(res, 500, error.message)
        }
    }

    version(req, res){
        try {
            return apiResponse(res, 200, 'Get Current CLI Version Successfully.', {cli_version: '1.0.8'})
        } catch (error) {
            return apiResponse(res, 500, error.message)
        }
    }

}

module.exports = new MernCliController();