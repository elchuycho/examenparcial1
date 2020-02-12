var express = require('express');
var router = express.Router();
var userModel = require('./fotos.model');

router.get('/users/all', (req,res)=>{
    return res.status(200).json(userModel.getAll());
});

router.post('/users/new', (req,res)=>{
    var datosEnviados = req.body;
    var newUser = userModel.addNew(datosEnviados);
    return res.status(200).json(newUser);
});


router.put('/users/upd/:id', (req, res)=>{
    var id = parseInt(req.params.id);
    var updUser = userModel.update( id, req.body);
    return res.status(200).json(updUser);
});


module.exports = router;
