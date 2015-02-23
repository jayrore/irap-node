var mongoose = require('mongoose');


var respuestaSchema = mongoose.Schema( {
            "id_valor" : String,
            "nombre_valor" : String,
            "orden_valor" : String
        });

var preguntaSchema = mongoose.Schema({
      "id_variable": {type:String, unique: true},
      "nombre_variable": String,
      "defecto": String,
      "control": String,
      "valores": [respuestaSchema]
});




var Pregunta = mongoose.model('Pregunta', preguntaSchema);


module.exports = Pregunta;