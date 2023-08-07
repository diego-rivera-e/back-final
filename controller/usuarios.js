const { get_usuario_model } = require("../model/consultas");

const get_usuario_controller = async (req, res) => {
    console.log("controlador")
    try{

        //modelo    
        const usuarios = await get_usuario_model();
        return usuarios;
    }catch(error){

    }
}

module.exports = {get_usuario_controller};