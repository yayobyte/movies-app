import { Router } from 'express';
import { MovieController } from '../controllers/movies'

const router = Router()

router.get('/search', MovieController.searchMoviesByTitle)
router.get('/by-id/:tt', MovieController.getMovieById)

export const moviesRouter = router
