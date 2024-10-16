import connection from "./db.js";


const getEmpresaPuntoVenta = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM empresa_punto_venta WHERE activo = 1 INNER JOIN empresa ON empresa_punto_venta.id_empresa = empresa.id INNER JOIN punto_venta ON empresa_punto_venta.id_punto_venta = punto_venta.id', (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
}

const getEmpresaPuntoVentaById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM empresa_punto_venta  INNER JOIN empresa ON empresa_punto_venta.id_empresa = empresa.id INNER JOIN punto_venta ON empresa_punto_venta.id_punto_venta = punto_venta.id WHERE id_empresa = ? AND empresa_punto_venta.activo = 1', [id], (err, rows) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(rows);
        });
    });
}

const createEmpresaPuntoVenta = (empresapuntoventa) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO empresa_punto_venta (id_empresa, id_punto_venta) VALUES (?, ?)', 
            [
                empresapuntoventa.id_empresa,
                empresapuntoventa.id_punto_venta
            ], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

const updateEmpresaPuntoVenta = (id, empresapuntoventa) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE empresa_punto_venta SET id_empresa = ?, id_punto_venta = ?, activo = ? WHERE id = ?', 
            [
                empresapuntoventa.id_empresa,
                empresapuntoventa.id_punto_venta,
                empresapuntoventa.activo,
                id
            ], (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        }
        );
    }
    );
}

const deleteEmpresaPuntoVenta = (id_punto_venta, id_empresa) => {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE empresa_punto_venta SET activo = ? WHERE id_punto_venta = ? AND id_empresa = ?', [
            0,
            id_punto_venta,
            id_empresa
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
    getEmpresaPuntoVenta,
    getEmpresaPuntoVentaById,
    createEmpresaPuntoVenta,
    updateEmpresaPuntoVenta,
    deleteEmpresaPuntoVenta
}
