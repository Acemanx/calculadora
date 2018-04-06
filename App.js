'use strict' //Informacion de errores mas completa y obliga a buena codificacion
var express = require('express');
var bodyparser = require('body-parser');
var app = express();


module.exports = app;	

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

var ruta = require('./rutas/rutas_calculadora')
app.use('/api', ruta);

//Configurar las cabeceras http. son para evitar problemas de control de acceso
//El next es para salir del middelware y pasar a otra función.
app.use((req,res,next) => {
  //Con lo siguiente permitimos acceso a todos los dominios.
  res.header('Access-Control-Allow-Origin' , '*');
  //Para que funcione a nivel de Ajax
  res.header('Access-Control-Allow-Headers' , 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method  ');
  //Indicamos los metodos que se van a soportar
  res.header('Access-Control-Allow-Methods' , 'GET, POST, OPTIONS, PUT, DELETE');

  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  //Salir del middleware y continuar con el flujo normal de ejecución, con una ruta concreta de un metodo de un controaldor
  next();
});