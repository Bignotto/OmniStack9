const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

routes.get('/', (req,res) => {
    return res.send('Deu certo!');
});

routes.post('/session', SessionController.store);

routes.post('/spot', upload.single('thumbnail'), SpotController.store);

module.exports = routes;