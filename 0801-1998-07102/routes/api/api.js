var express = require('express');
var router = express.Router();

var fotosRouter = require('./fotos/fotos');

router.use('/fotos',fotosRouter);

//http://localhost:3000/api/version
router.get( '/version', function(req, res){
    res.status(200).json({"version":"API v1.0"});
});

module.exports = router;
