import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';
import { movieRoute } from './routes/movie';


const app: Application = express();
app.use(bodyParser.urlencoded({ extended: false }) as express.RequestHandler);
app.use(express.static(path.join(__dirname, 'public')));


//route
app.use('/', movieRoute);

app.use((req: Request, res: Response, next: NextFunction) => {
   res.status(404).send('<h1>Page not found on the server</h1>');
});



const PORT = 3001;
app.listen(PORT, () => {
   console.log('====================================');
   console.log('App running on port ' + PORT);
   console.log('====================================');
});
