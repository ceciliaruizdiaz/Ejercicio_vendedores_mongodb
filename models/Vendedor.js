const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/empresa", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const vendedorSchema = new mongoose.Schema({
    nombre: String,
    producto: String,
    email: String
}, { collection: 'vendedores' });

//definir el modelo
const Vendedor = mongoose.model("vendedor", vendedorSchema);

//exportar el modelo
module.exports = Vendedor;