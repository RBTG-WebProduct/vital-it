import express from 'express';
import dotenv from 'dotenv';

/**
 * Loading environmental variables.
 */
dotenv.config();

/**
 * Declare your Server Prop types here.
 */
declare global { 
    type ServerPropsType = {
        
    }
}

/**
 * Instantiating our router.
 */
const app = express();

/**
 * Some middleware to make sure all our urls are encoded and all data sent/recieved is parsed into a JSON format.
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**
 * Creating routes for static files.
 */
app.use('/css', express.static('./src/public/css'));
app.use('/js', express.static('./src/public/js'));

/**
 * Importing and creating our own routes.
 */
import indexRoute from './routes/index';
import contactRoute from './routes/contact';
import servicesRoute from './routes/services';

app.use('/', indexRoute);
app.use('/contact', contactRoute);
app.use('/services', servicesRoute);

/**
 * Listening on port 3000
 */
app.listen(process.env.PORT);