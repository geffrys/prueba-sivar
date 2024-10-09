import connection from "./db.js";

const getUsuarios = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM usuario WHERE activo = 1', (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};

const getUsuarioById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM usuario WHERE id = ? AND activo = 1', [id], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};

const createUsuario = (usuario) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO usuario (nombre_usuario, documento_usuario) VALUES (?, ?)', 
            [
                usuario.nombre_usuario,
                usuario.documento_usuario
            ], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

const updateUsuario = (id, usuario) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE usuario SET nombre_usuario = ?, documento_usuario = ?, activo = ? WHERE id = ?', 
            [
                usuario.nombre_usuario,
                usuario.documento_usuario,
                usuario.activo,
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

const deleteUsuario = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE usuario SET activo = ? WHERE id = ?', [
            0,
            id
        ]
            , (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

export default {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
};