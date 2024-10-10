import { Router } from 'express';
import rolesServices from '../services/roles.js';

const roles = Router();

// GET /api/roles - Retorna todos los roles
roles.get('',async (req,res)=>{
    const roles = await rolesServices.getRoles();
    res.status(200).send(await roles);
})
// GET /api/roles/:id - Retorna un rol en especifico
roles.get('/:id',async (req,res)=>{
    const roles = await rolesServices.getRolesById(req.params.id);
    res.status(200).send(await roles);
})
// POST /api/roles - Crea un nuevo rol
roles.post('',async (req,res)=>{
    try{
        const roles = await rolesServices.createRoles(req.body);
        res.status(200).send(await roles);
    }catch(e){
        res.status(400).send({
            message: e.message,
            code: 400
        });
    }
})
// PUT /api/roles/:id - Actualiza un rol en especifico
roles.put('/:id',async (req,res)=>{
    const roles = await rolesServices.updateRoles(req.params.id,req.body);
    res.status(200).send(await roles);
})
// DELETE /api/roles/:id - Elimina un rol en especifico
roles.delete('/:id',async (req,res)=>{
    const roles = await rolesServices.deleteRoles(req.params.id);
    res.status(200).send(await roles);
})

// POST /api/roles/:id/empresa/:idEmpresa/usuario/:idUsuario - Asocia un rol a un usuario de una empresa
roles.post('/:id/empresa/:idEmpresa/usuario/:idUsuario',async (req,res)=>{
    const roles = await rolesServices.createRolesUsuarioEmpresa(req.params.id,req.params.idEmpresa,req.params.idUsuario);
    res.status(200).send(await roles);
})

// GET /api/roles/usuario/:id - Retorna los roles de un usuario
roles.get('/usuario/:id',async (req,res)=>{
    const roles = await rolesServices.getRolesUsuarioEmpresaByIdUsuario(req.params.id);
    res.status(200).send(await roles);
})

export default roles;
