import connection from "./db.js";

const getPuntosVenta = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM punto_venta WHERE activo = 1', (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};

const getPuntoVentaById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM punto_venta WHERE id = ? AND activo = 1', [id], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
};
