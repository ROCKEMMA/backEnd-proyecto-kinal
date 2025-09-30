require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');

app.use(cors({ origin: '*' }));
// rutas
app.get('/',(req,res)=>{
    res.send("backEnd kinal");
});

app.get('/pokemons', async (req,res)=>{
    
    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
        const datos = await respuesta.json();
        res.json(datos);
    } catch (error) {
        console.error(error);
    }

});


// Configuraciones
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Escuchando: http://localhost:${PORT}`);
});