const express = require('express');
const cors = require('cors');

const app = express();
//utiliser le port 3000
const PORT = 3000;

// Enable CORS for all routes
app.use(cors()); 

// Middleware pour gérer les données JSON
app.use(express.json());

// Importation des routes
const itemRouter = require('./routers/itemRouter');

// Utilisation du routeur pour les requêtes vers /api
app.use('/api', itemRouter);

// Démarre le serveur
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});