import { router } from '../routes/api';
import express from 'express';
import cors from 'cors';


export class Server {

    public app: express.Application = express();
    public port: string = process.env.PORT || '8080';
    public apiPath: string = '/api/';

    constructor() {

        this.middlewares();
        this.routes();

    }

    middlewares(): void {

//        this.app.use(cors);

        // List of allowed origins.
        const allowedOrigins = ['http://localhost:' + this.port];

        const options: cors.CorsOptions = {
            origin: allowedOrigins
        };

        this.app.use(cors(options));

        this.app.use(express.json());
        this.app.use(express.static('public'));

    }

    routes(): void {

        this.app.use(this.apiPath, router);

    }

    listen(): void {

        this.app.listen(this.port, () => {
            console.group('Servidor corriendo en puerto', this.port);
        });

    }
}

