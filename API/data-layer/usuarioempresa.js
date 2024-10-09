import connection from "./db.js";

const getUsuarioEmpresas = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM usuario_empresa WHERE activo = 1 INNER JOIN usuario ON ', (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
}
