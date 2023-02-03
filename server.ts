import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/CSS', express.static('./src/public/css'));
app.use('/js', express.static('./src/public/js'));

import indexRoute from './routes/index';
import contactRoute from './routes/contact';
import servicesRoute from './routes/services';

app.use('/', indexRoute);
app.use('/contact', contactRoute);
app.use('/services', servicesRoute);

app.listen(process.env.PORT);