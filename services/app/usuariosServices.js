const Usuarios = require('../../models/usuarios');
const { Op } = require("sequelize");

var methods = {

    obtenerUsuarios: function(request,response){
        Usuarios.findAll()
        .then(usuarios=>{
            response.json(usuarios);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
        })
    },

    obtenerUsuarioPorLogin: function(request,response){
        Usuarios.findAll({
            where: {
                usuario_login: request.params.usuario_login
              } 
        })
        .then(usuarios=>{
            response.json(usuarios);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
        })
    },

    agregarUsuarios: function(request, response){
        Usuarios.create(
            request.body
        )
        .then(usuario=>{
            response
            .status(200)
            .send('Usuario agregado correctamente');
        })
        .catch(error=>
            response.send("Error: "+ error))
    },


    tologin: function(request, response){
        Usuarios.findOne({
            where: {
                [Op.and]:[
                    {usuario_login: request.params.usuario_login},
                    {usuario_clave: request.params.usuario_clave}
                ]
              } 
        })
        .then(
            usuarios=>{
                if(usuarios==null){
                    response.send("Usuario o contrasena invalido")
                }
                else{
                response.json(usuarios);
                }
        })
        .catch((error)=>{
            response.send("Error: "+ error)
        })
    },


}
module.exports= methods;