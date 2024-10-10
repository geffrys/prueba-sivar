import { Router } from 'express';
import userServices from '../services/usuarios.js';


const usuarios = Router();

// GET /api/usuarios - Retorna todos los usuarios
usuarios.get('',async (req,res)=>{
    const users = await userServices.getUsuarios();
    res.status(200).send(await users);
})
// GET /api/usuarios/:id - Retorna un usuario en especifico
usuarios.get('/:id',async (req,res)=>{
    const user = await userServices.getUsuarioById(req.params.id);
    res.status(200).send(await user);
})
// POST /api/usuarios - Crea un nuevo usuario
usuarios.post('',async (req,res)=>{
    console.log(req.body);
    try{
        const user = await userServices.createUsuario(req.body);
        res.status(200).send(await user);
    }catch(e){
        res.status(400).send({
            message: e.message,
            code: 400
        });
    }
})
// PUT /api/usuarios/:id - Actualiza un usuario en especifico
usuarios.put('/:id',async (req,res)=>{
    const user = await userServices.updateUsuario(req.params.id,req.body);
    res.status(200).send(await user);
})
// DELETE /api/usuarios/:id - Elimina un usuario en especifico
usuarios.delete('/:id',async (req,res)=>{
    const user = await userServices.deleteUsuario(req.params.id);
    res.status(200).send(await user);
})

export default usuarios;
