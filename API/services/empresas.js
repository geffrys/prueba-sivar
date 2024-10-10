import empresasDb from '../data-layer/empresas.js';
import empresaPuntoVentaDb from '../data-layer/empresapuntoventa.js';


const getEmpresas = async () => {
    let empresas = await empresasDb.getEmpresas();
    return empresas;
}
const getEmpresaById = async (id) => {
    return await empresasDb.getEmpresaById(id);
}
const createEmpresa = async (empresa) => {
    return await empresasDb.createEmpresa(empresa);
}
const updateEmpresa = async (id, empresa) => {
    return await empresasDb.updateEmpresa(id, empresa);
}
const deleteEmpresa = async (id) => {
    return await empresasDb.deleteEmpresa(id);
}


const asociarPuntoVenta = async (idEmpresa, idPuntoVenta) => {
    return await empresaPuntoVentaDb.createEmpresaPuntoVenta({id_empresa: idEmpresa, id_punto_venta: idPuntoVenta});
}
const desasociarPuntoVenta = async (idEmpresa, idPuntoVenta) => {
    return await empresaPuntoVentaDb.deleteEmpresaPuntoVenta(idPuntoVenta, idEmpresa);
}
const getEmpresaPuntoVenta = async (id) => {
    return await empresaPuntoVentaDb.getEmpresaPuntoVentaById(id);
}
const updateEmpresaPuntoVenta = async (id, empresaPuntoVenta) => {
    return await empresaPuntoVentaDb.updateEmpresaPuntoVenta(id, empresaPuntoVenta);
}







export default {
    getEmpresas,
    getEmpresaById,
    createEmpresa,
    updateEmpresa,
    deleteEmpresa,
    asociarPuntoVenta,
    desasociarPuntoVenta,
    getEmpresaPuntoVenta,
    updateEmpresaPuntoVenta
};