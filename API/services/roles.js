import rolesDb from '../data-layer/roles.js';
import rolesUsuarioEmpresaDb from '../data-layer/rolesusuarioempresa.js';

const getRoles = async () => {
    return await rolesDb.getRoles();
}
const getRolesById = async (id) => {
    return await rolesDb.getRolById(id);
}
const createRoles = async (roles) => {
    return await rolesDb.createRol(roles);
}
const updateRoles = async (id, roles) => {
    return await rolesDb.updateRol(id, roles);
}
const deleteRoles = async (id) => {
    return await rolesDb.deleteRol(id);
}



const getRolesUsuarioEmpresa = async () => {
    return await rolesUsuarioEmpresaDb.getRolesUsuarioEmpresa();
}
const getRolesUsuarioEmpresaByIdUsuario = async (id) => {
    return await rolesUsuarioEmpresaDb.getRolesUsuarioEmpresaByIdUsuario(id);
}
const createRolesUsuarioEmpresa = async (id, idEmpresa, idUsuario) => {
    return await rolesUsuarioEmpresaDb.createRolesUsuarioEmpresa({id_rol: id, id_usuario: idUsuario, id_empresa: idEmpresa});
}
const updateRolesUsuarioEmpresa = async (id, rolesUsuarioEmpresa) => {
    return await rolesUsuarioEmpresaDb.updateRolesUsuarioEmpresa(id, rolesUsuarioEmpresa);
}
const deleteRolesUsuarioEmpresa = async (id) => {
    return await rolesUsuarioEmpresaDb.deleteRolesUsuarioEmpresa(id);
}

export default {
    getRoles,
    getRolesById,
    createRoles,
    updateRoles,
    deleteRoles,
    getRolesUsuarioEmpresa,
    getRolesUsuarioEmpresaByIdUsuario,
    createRolesUsuarioEmpresa,
    updateRolesUsuarioEmpresa,
    deleteRolesUsuarioEmpresa
}