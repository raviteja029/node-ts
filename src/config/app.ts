
import express from "express";

import Routes from "./../routes";

class App {
    public app: express.Application;
    private routes: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        // this.mongoSetup();
        // this.routes.init();
        // this.app.use(this.routes.init);
        this.routes.init(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(express.json({ limit: '300kb' }));

        // ? to recognize the incoming Request Object as strings or arrays
        this.app.use(express.urlencoded({ extended: true }));

        // ? to recognize the incoming Request Object as a JSON Object
        this.app.use(express.json({ limit: '300kb' }));

    }

    private mongoSetup(): void {
        // mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    }
}

export default new App().app;