import puntoVentaDb from '../data-layer/puntosventa.js';

const getPuntosVenta = async () => {
    return await puntoVentaDb.getPuntosVenta();
}

const getPuntoVentaById = async (id) => {
    return await puntoVentaDb.getPuntoVentaById(id);
}

const createPuntoVenta = async (puntoventa) => {
    return await puntoVentaDb.createPuntoVenta(puntoventa);
}

const updatePuntoVenta = async (id, puntoventa) => {
    return await puntoVentaDb.updatePuntoVenta(id, puntoventa);
}

const deletePuntoVenta = async (id) => {
    return await puntoVentaDb.deletePuntoVenta(id);
}


export default {
    getPuntosVenta,
    getPuntoVentaById,
    createPuntoVenta,
    updatePuntoVenta,
    deletePuntoVenta
}
