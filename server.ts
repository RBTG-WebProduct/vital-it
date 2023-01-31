import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

import indexRoute from './routes/index';

app.use('/', indexRoute);

app.listen(3000);