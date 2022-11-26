const{usuario} =require('../models/index');

module.exports = {
    signIn( req, res){

    },

    signUp(req, res){
        let password =
        usuario.create({
            rol: req.body.rol,
            correo: req.body.correo,
            password:password
        })

    }
}