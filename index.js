'use strict'
var app = require('./App');
var port = process.env.PORT || 2525; //Para tomar puerto aleatorio que nos da el server o hosting, para evitar conflictos.

app.listen(port, function(){
	console.log("Servidor escuchando correctamente en el puerto **2018** "+port);
});