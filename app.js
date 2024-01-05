const express = require ("express");
const app = express ();
const routeVendedores = require("./routes/vendedores")

app.use(express.json());

app.use("/vendedores", routeVendedores )

//Iniciar el servidor
app.listen(3000, () => {
    console.log(`Servidor iniciando en el puerto 3000`);
});