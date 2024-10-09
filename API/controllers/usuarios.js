import { Router } from 'express';
import userServices from '../services/usuarios.js';


const usuarios = Router();

// GET /api/usuarios - Retorna todos los usuarios
usuarios.get('',async (req,res)=>{
    const users = await userServices.getUsuarios();
    res.status(200).send(users);
})
// GET /api/usuarios/:id - Retorna un usuario en especifico
usuarios.get('/:id',async (req,res)=>{
    const user = await userServices.getUsuarioById(req.params.id);
    res.status(200).send(user);
})
// POST /api/usuarios - Crea un nuevo usuario
usuarios.post('',(req,res)=>{
    console.log(req.body);
    
    const user = userServices.createUsuario(req.body);
    res.status(200).send(user);
})
// PUT /api/usuarios/:id - Actualiza un usuario en especifico
usuarios.put('/:id',(req,res)=>{
    const user = userServices.updateUsuario(req.params.id,req.body);
    res.status(200).send(user);
})
// DELETE /api/usuarios/:id - Elimina un usuario en especifico
usuarios.delete('/:id',(req,res)=>{
    const user = userServices.deleteUsuario(req.params.id);
    res.status(200).send(user);
})

export default usuarios;
