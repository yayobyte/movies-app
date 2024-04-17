import { Request, Response } from 'express';
import { MovieModel } from '../models/movie';

export class MovieController {

    static async searchMoviesByTitle(req: Request<{}, {}, {}, { q: string }>, res: Response) {
        const { q } = req.query;
        if (!q) {
            return res.status(400).json({ message: 'Query parameter "q" is required.' });
        }
        try {
            const movies = await MovieModel.searchMoviesByTitle({ q });
            res.json(movies);
        } catch (error: any) {
            res.status(500).json({ message: 'Internal server error', error: error.message })
        }
    }

    static async getMovieById(req: Request<{ tt: string }>, res: Response) {
        const { tt } = req.params;
        if (!tt) {
            return res.status(400).json({ message: 'IMDb ID parameter "tt" is required.' });
        }
        try {
            const movie = await MovieModel.getMovieById({ tt });
            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' });
            }
            res.json(movie);
        } catch (error: any) {
            res.status(500).json({ message: 'Internal server error', error: error.message })
        }
    }

    static async getTopMovies(req: Request, res: Response) {
        try {
            const movies = await MovieModel.getTop10Movies()
            res.json(movies)
        } catch (error: any) {
            res.status(500).json({ message: 'Internal server error', error: error.message })
        }
    }
}