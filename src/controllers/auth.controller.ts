import { Request, Response, NextFunction } from "express";

export class AuthController {

    constructor() { }

    public async getUser(req: Request, res: Response, next: NextFunction) {

        console.log(req.query);

        return res.status(200).send({
            message: 'User Details'
        });
    }

}