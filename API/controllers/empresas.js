import { Router } from 'express';

const empresas = Router();

// GET /api/empresas - Retorna todas as empresas
empresas.get('',async (req,res)=>{
    await res.status(200).send('OK');
})
// GET /api/empresas/:id - Retorna una empresa en especifico
empresas.get('/:id',(req,res)=>{
    res.status(200).send('OK');
})
// POST /api/empresas - Crea una nueva empresa
empresas.post('',(req,res)=>{
    res.status(200).send('OK');
})
// PUT /api/empresas/:id - Actualiza una empresa en especifico
empresas.put('/:id',(req,res)=>{
    res.status(200).send('OK');
})
// DELETE /api/empresas/:id - Elimina una empresa en especifico
empresas.delete('/:id',(req,res)=>{
    res.status(200).send('OK');
})

export default empresas;