'use strict'
var fs = require('fs');
var path = require('path');
function sumar (request, response){
	var numeros = request.body;
	var suma = parseInt(numeros.num1) + parseInt(numeros.num2);
	var rpta = {"resultado": suma};
	response.status(200).send(rpta);

}

function restar (request, response){
	var numeros = request.body;
	var resta = parseInt(numeros.num1) - parseInt(numeros.num2);
	var rpta = {"resultado": resta};
	response.status(200).send(rpta);

}
function multiplicar (request, response){
	var numeros = request.body;
	var multiplicacion = parseInt(numeros.num1) * parseInt(numeros.num2);
	var rpta = {"resultado": multiplicacion};
	response.status(200).send(rpta);

}
function dividir (request, response){
	var numeros = request.body;
	var division = parseInt(numeros.num1) / parseInt(numeros.num2);
	var rpta = {"resultado": division};
	response.status(200).send(rpta);

}
function uploadFiles(request, response){
	if(request.files){
		console.log("Archivo copiado correctamente");
		response.status(200).send("Archivo agregado con exito");
	}else {
		console.log("No hay ningun archivo");
		response.status(200).send("No se pudo agregar");
	}
}
function obtenerArchivo(request, response){
	var archivo = request.params.archivo;
	var path_file = './Uploads/' +archivo;

	fs.exists(path_file, function(exists){
		if(exists){
			response.sendFile(path.resolve(path_file))
		}else{
			response.status(200).send({message: 'No existe el archivo...'});
		}

	})
}

module.exports = {
	sumar,
	restar,
	multiplicar,
	dividir,
	uploadFiles,
	obtenerArchivo
}                                          




