import connection from "./db.js";

const getRolesUsuarioEmpresa = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM rol_usuario_empresa  INNER JOIN rol ON rol_usuario_empresa.id_rol = rol.id INNER JOIN usuario ON rol_usuario_empresa.id_usuario = usuario.id INNER JOIN empresa ON rol_usuario_empresa.id_empresa = empresa.id WHERE rol_usuario_empresa.activo = 1 ', (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
}

const getRolesUsuarioEmpresaByIdUsuario = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM rol_usuario_empresa  INNER JOIN rol ON rol_usuario_empresa.id_rol = rol.id INNER JOIN usuario ON rol_usuario_empresa.id_usuario = usuario.id INNER JOIN empresa ON rol_usuario_empresa.id_empresa = empresa.id WHERE rol_usuario_empresa.id_usuario = ? AND rol_usuario_empresa.activo = 1', [id], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
}

const createRolesUsuarioEmpresa = (rolesusuarioempresa) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO rol_usuario_empresa (id_rol, id_usuario, id_empresa) VALUES (?, ?, ?)', 
            [
                rolesusuarioempresa.id_rol,
                rolesusuarioempresa.id_usuario,
                rolesusuarioempresa.id_empresa
            ], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

const updateRolesUsuarioEmpresa = (id, rolesusuarioempresa) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE rol_usuario_empresa SET id_rol = ?, id_usuario = ?, id_empresa = ?, activo = ? WHERE id = ?', 
            [
                rolesusuarioempresa.id_rol,
                rolesusuarioempresa.id_usuario,
                rolesusuarioempresa.id_empresa,
                rolesusuarioempresa.activo,
                id
            ], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

const deleteRolesUsuarioEmpresa = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE rol_usuario_empresa SET activo = ? WHERE id = ?', [
            0,
            id
        ], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

export default {
    getRolesUsuarioEmpresa,
    getRolesUsuarioEmpresaByIdUsuario,
    createRolesUsuarioEmpresa,
    updateRolesUsuarioEmpresa,
    deleteRolesUsuarioEmpresa
}