var admin=require("firebase-admin");
var keys=require("../keys.json");

admin.initializeApp({
    credential:admin.credential.cert(keys)
});

var micuenta=admin.firestore();
var conexionUsu=micuenta.collection("usuariosBD");
var conexionProd=micuenta.collection("productosBD");

module.exports={
    conexionUsu,
    conexionProd
};


