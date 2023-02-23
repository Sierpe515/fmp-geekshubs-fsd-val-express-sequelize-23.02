
const express = require('express');
const app = express();
const db = require('./db/db');
const PORT = 3000;
const { sequelize } = require("./models/index");
app.use(express.json());

app.listen(PORT, ()=>{

    console.log(`Servidor rulando en puerto ${PORT}`);


    //DANGER...PELIGRO...ACHTUNG!!!...

    //Comando que va a sincronizar los modelos con la base de datos.... sólo una vez please

    // sequelize.sync({force: true})

    //Comando que usaremos después de la primera vez....para conectarnos
    db.authenticate()
    .then(() => {
        console.log("Connected to the database, sync is ok");
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
});