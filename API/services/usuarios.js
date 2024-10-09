import usuarioDB from '../data-layer/usuarios.js';

const getUsuarios = async () => {
    let usuarios = await usuarioDB.getUsuarios();
    return usuarios; 
};  
const getUsuarioById = async (id) => {
    return await usuarioDB.getUsuarioById(id);
};
const createUsuario = async (usuario) => {
    return await usuarioDB.createUsuario(usuario);
};
const updateUsuario = async (id, usuario) => {
    return await usuarioDB.updateUsuario(id, usuario);
};
const deleteUsuario = async(id) => {
    return await usuarioDB.deleteUsuario(id).then((result) => result);
};


export default {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
};