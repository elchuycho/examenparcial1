var express = require('express');
var router = express.Router();
var userModel = require('./fotos.model');

router.get('/users/all', (req,res)=>{
    return res.status(200).json(userModel.getAll());
});

module.exports = router;
