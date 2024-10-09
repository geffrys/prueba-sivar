import { Router } from 'express';
import puntosventaService from '../services/puntosventa.js';

const puntosventa = Router();

// GET /api/puntosventa - Retorna todos los puntos de venta
puntosventa.get('',async (req,res)=>{
    const puntosventa = await puntosventaService.getPuntosVenta();
    res.status(200).send(await puntosventa);
})
// GET /api/puntosventa/:id - Retorna un punto de venta en especifico
puntosventa.get('/:id',async (req,res)=>{
    const puntoventa = await puntosventaService.getPuntoVentaById(req.params.id);
    res.status(200).send(await puntoventa);
})
// POST /api/puntosventa - Crea un nuevo punto de venta
puntosventa.post('',async (req,res)=>{
    try{
    const puntoventa = await puntosventaService.createPuntoVenta(req.body);
    res.status(200).send(await puntoventa);}
    catch(e){
        res.status(400).send({
            message: e.message,
            code: 400
        });
    }
})
// PUT /api/puntosventa/:id - Actualiza un punto de venta en especifico
puntosventa.put('/:id',async (req,res)=>{
    console.log(req.params.id);
    const puntoventa = await puntosventaService.updatePuntoVenta(req.params.id,req.body);
    res.status(200).send(await puntoventa);
})
// DELETE /api/puntosventa/:id - Elimina un punto de venta en especifico
puntosventa.delete('/:id',async (req,res)=>{
    const puntoventa = await puntosventaService.deletePuntoVenta(req.params.id);
    res.status(200).send(await puntoventa);
})

export default puntosventa;