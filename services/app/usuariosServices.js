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



}
module.exports= methods;