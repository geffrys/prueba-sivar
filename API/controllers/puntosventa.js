import { Router } from 'express';

const puntosventa = Router();

// GET /api/puntosventa - Retorna todos los puntos de venta
puntosventa.get('',(req,res)=>{
    res.status(200).send('OK');
})
// GET /api/puntosventa/:id - Retorna un punto de venta en especifico
puntosventa.get('/:id',(req,res)=>{
    res.status(200).send('OK');
})
// POST /api/puntosventa - Crea un nuevo punto de venta
puntosventa.post('',(req,res)=>{
    res.status(200).send('OK');
})
// PUT /api/puntosventa/:id - Actualiza un punto de venta en especifico
puntosventa.put('/:id',(req,res)=>{
    res.status(200).send('OK');
})
// DELETE /api/puntosventa/:id - Elimina un punto de venta en especifico
puntosventa.delete('/:id',(req,res)=>{
    res.status(200).send('OK');
})

export default puntosventa;