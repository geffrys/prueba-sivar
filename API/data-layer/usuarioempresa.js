import connection from "./db.js";

const getUsuarioEmpresas = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM usuario_empresa WHERE activo = 1 INNER JOIN usuario ON usuario_empresa.id_usuario = usuario.id INNER JOIN empresa ON usuario_empresa.id_empresa = empresa.id', (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
}

const getUsuarioEmpresaById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM usuario_empresa WHERE id = ? AND activo = 1 INNER JOIN usuario ON usuario_empresa.id_usuario = usuario.id INNER JOIN empresa ON usuario_empresa.id_empresa = empresa.id', [id], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
}

const createUsuarioEmpresa = (usuarioempresa) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO usuario_empresa (id_usuario, id_empresa) VALUES (?, ?)', 
            [
                usuarioempresa.id_usuario,
                usuarioempresa.id_empresa
            ], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

const updateUsuarioEmpresa = (id, usuarioempresa) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE usuario_empresa SET id_usuario = ?, id_empresa = ?, activo = ? WHERE id = ?', 
            [
                usuarioempresa.id_usuario,
                usuarioempresa.id_empresa,
                usuarioempresa.activo,
                id
            ], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        }
        )
    });
}

const deleteUsuarioEmpresa = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE usuario_empresa SET activo = ? WHERE id = ?', [
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
    getUsuarioEmpresas,
    getUsuarioEmpresaById,
    createUsuarioEmpresa,
    updateUsuarioEmpresa,
    deleteUsuarioEmpresa
}