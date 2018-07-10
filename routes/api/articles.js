//Dependencies
const router = require('express').Router();
const articlesController = require('../../controllers/articlesController');

//Article Routes
router.route('/')
	.get(articlesController.findAll)
	.post(articlesController.create);

router.route('/:id').delete(articlesController.remove);

module.exports = router;
