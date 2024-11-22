import express from 'express';
import customerRouter from './routes/customerRoute.js';
import productRouter from './routes/productRoute.js';

import helmet from 'helmet'
import bodyParser from 'body-parser';
import rateLimit from 'express-rate-limit'

const app = express();

// app.use(helmet());
app.use(bodyParser.json())

// const limiter = rateLimit({
//     max: 100,windowMs: 60 * 60 * 1000,
//     message: 'Too many request from this ip! Please try again in an hour'
// });
// app.use('/', limiter);

app.use('/api/v1/customers', customerRouter);
app.use('/api/v1/products', productRouter);

export default app;
