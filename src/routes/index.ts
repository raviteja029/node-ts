import { Application, Request, Response } from 'express';

import AuthRoutes from './auth.route';


export default class Routes {

    private authRoutes: AuthRoutes = new AuthRoutes();

    public init(app: Application) {
        app.use('/auth', this.authRoutes.route);
        // this.authRoutes.route(app);
        app.use('/test', (req, res, next) => {
            return res.status(200).send('Route Success');
        });
        app.all('**', (req: Request, res: Response) => {
            return res.status(404).send({ error: true, message: 'Check your URL please' });
        });
    }
}

