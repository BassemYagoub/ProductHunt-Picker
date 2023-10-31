import { query } from './query';
import axios, { AxiosError } from 'axios';
import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.post('/products', async (req, res) => {
    try {
        const response = await axios.post(process.env.API_URL!, {
            query,
            variables: req.body.variables,
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return res.json(response.data.data);
    } catch (error) {
        const axiosError = error as AxiosError;
        res.status(axiosError.response!.status).send(`${axiosError}`);
        res.send()
    }
});

export default router;
