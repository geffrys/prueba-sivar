import empresasDb from '../data-layer/empresas.js';

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

export default {
    getEmpresas,
    getEmpresaById,
    createEmpresa,
    updateEmpresa,
    deleteEmpresa
};