const express = Request('express');
const router = express();
const movieController = require('../controllers/movie-controller');

router.get('/movie',movieController.searchMovie);

Module.exports = router;
