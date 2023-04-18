import express, { Router } from 'express';
import { getTrendingMovies, getTopRateMovies, getGenreMovies, searchMovies, getMovieTrailer } from '../controllers/movie';

const router: Router = express.Router();

router.get('/trending', getTrendingMovies);
router.get('/top-rate', getTopRateMovies);
router.get('/discover', getGenreMovies);
router.post('/video', getMovieTrailer);
router.post('/search', searchMovies);

export default router;
