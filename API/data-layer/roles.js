import connection from "./db.js";


const getRoles = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM rol WHERE activo = 1', (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
}

const getRolById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM rol WHERE id = ? AND activo = 1', [id], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
}

const createRol = (rol) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO rol (nombre_rol) VALUES (?)', 
            [
                rol.nombre_rol
            ], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

const updateRol = (id, rol) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE rol SET nombre_rol = ?, activo = ? WHERE id = ?', 
            [
                rol.nombre_rol,
                rol.activo,
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

const deleteRol = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE rol SET activo = 0 WHERE id = ?', [id], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

export default {
    getRoles,
    getRolById,
    createRol,
    updateRol,
    deleteRol
}
