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

const createPuntoVenta = (puntoventa) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO punto_venta (nombre_punto_venta, direccion_punto_venta) VALUES (?, ?)', 
            [
                puntoventa.nombre_punto_venta,
                puntoventa.direccion_punto_venta
            ], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};

const updatePuntoVenta = (id, puntoventa) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE punto_venta SET nombre_punto_venta = ?, direccion_punto_venta = ?, activo = ? WHERE id = ?', 
            [
                puntoventa.nombre_punto_venta,
                puntoventa.direccion_punto_venta,
                puntoventa.activo,
                id
            ], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
};

const deletePuntoVenta = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE punto_venta SET activo = ? WHERE id = ?', [
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
};


export default {
    getPuntosVenta,
    getPuntoVentaById,
    createPuntoVenta,
    updatePuntoVenta,
    deletePuntoVenta
}

