import connection from "./db.js";

const getEmpresas = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM empresa WHERE activo = 1', (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};

const getEmpresaById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM empresa WHERE id = ? AND activo = 1', [id], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
}

const createEmpresa = (empresa) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO empresa (nombre_empresa, nit_empresa) VALUES (?, ?)', 
            [
                empresa.nombre_empresa,
                empresa.nit_empresa,
            ], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

const updateEmpresa = (id, empresa) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE empresa SET nombre_empresa = ?, nit_empresa = ? WHERE id = ?', 
            [
                empresa.nombre_empresa,
                empresa.direccion_empresa,
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

const deleteEmpresa = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE empresa SET activo = ? WHERE id = ?', [0, id], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

export default {
    getEmpresas,
    getEmpresaById,
    createEmpresa,
    updateEmpresa,
    deleteEmpresa
};
