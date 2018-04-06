'use strict'
var express = require('express');
var controlador = require('../controladoras/calculos');

var api = express.Router();

var multipart = require('connect-multiparty');


var md_ruta = multipart({uploadDir: './Uploads'});

api.post('/misuma', controlador.sumar);
api.post('/miresta', controlador.restar);
api.post('/mimultiplicacion', controlador.multiplicar);
api.post('/midivision', controlador.dividir);
api.post('/misubida', [md_ruta], controlador.uploadFiles);
api.get('/mibajada/:archivo', controlador.obtenerArchivo);


//api.post('/misuma', function(req, res){
 // Controller.Create
//});

module.exports = api;
