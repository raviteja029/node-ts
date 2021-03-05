import { Router, Request, Response, Application } from 'express';

import { AuthController } from './../controllers';

export default class AuthRoutes {

    private authController: AuthController = new AuthController();

    public route(app: Application) {
        console.log('route');

        app.get('/user', (req: Request, res: Response, next) => {
            return res.status(200).send('Route Success');
        });

        // app.get('/user', this.authController.getUser);

    }

}

