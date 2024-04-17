import cors from 'cors'

const ACCEPTED_ORIGINS = [
    'http://localhost:8080',
    'http://localhost:3000',
    'http://192.168.1.206:8080',
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS} = {}) => cors({
    origin: (origin, callback) => {
        if (acceptedOrigins.includes(origin ?? '')) return callback(null, true)
        if (!origin) return callback(null, true)
        return callback(new Error('Not allowed by cors'))
    },
    optionsSuccessStatus: 200
})
