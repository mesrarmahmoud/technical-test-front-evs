const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Route pour récupérer les items (condidat)
router.get('/items', itemController.getItems);

// Route pour créer un nouvel (condidat)
router.post('/items', itemController.createItem);

module.exports = router;