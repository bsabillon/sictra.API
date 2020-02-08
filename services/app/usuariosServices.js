const Usuarios = require('../../models/usuarios');


var methods = {

    getUsuarios: function(request,response){
        Usuarios.findAll()
        .then(usuarios=>{
            response.json(usuarios);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
        })
    },

    addUsuarios: function(request, response){
        Usuarios.create(
            reques.body
        )
        .then(usuario=>{
            response
            .status(200)
            .send('Usuario agregado correctamente');
        })
        .catch(error=>
            response.send("Error: "+ error))
    },

}
module.exports= methods;