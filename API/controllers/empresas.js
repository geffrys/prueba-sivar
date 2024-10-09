import { Router } from 'express';
import empresaService from '../services/empresas.js';

const empresas = Router();

// GET /api/empresas - Retorna todas as empresas
empresas.get('',async (req,res)=>{
    const empresas = await empresaService.getEmpresas();
    res.status(200).send(await empresas);
})
// GET /api/empresas/:id - Retorna una empresa en especifico
empresas.get('/:id',async (req,res)=>{
    const empresa = await empresaService.getEmpresaById(req.params.id);
    res.status(200).send(await empresa);
})
// POST /api/empresas - Crea una nueva empresa
empresas.post('',async (req,res)=>{
    const empresa = await empresaService.createEmpresa(req.body);
    res.status(200).send(await empresa);
})
// PUT /api/empresas/:id - Actualiza una empresa en especifico
empresas.put('/:id',async (req,res)=>{
    const empresa = await empresaService.updateEmpresa(req.params.id,req.body);
    res.status(200).send(await empresa);
})
// DELETE /api/empresas/:id - Elimina una empresa en especifico
empresas.delete('/:id',async (req,res)=>{
    const empresa = await empresaService.deleteEmpresa(req.params.id);
    res.status(200).send(await empresa);
})

export default empresas;