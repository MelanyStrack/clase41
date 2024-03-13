const express = require('express');
const router = express.Router();
const genresController = require('../../controllers/api/genresController');

router.get("/api/genres", genresController.listGenres);
router.get("/api/genres/detail/:id", genresController.detailGenre);



module.exports = router;